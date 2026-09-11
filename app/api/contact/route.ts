import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short"),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(10, "Message is too short"),
});

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body: unknown = await request.json().catch(() => null);
    
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid contact request", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = parsed.data;

    // 1. Correo para el administrador (Hostinger)
    const { error: adminError, data } = await resend.emails.send({
      from: "Web ElectroTech <no-reply@electrotechpasto.com>",
      to: ["contacto@electrotechpasto.com"],
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || "No provisto"}\n\nMensaje:\n${message}`,
    });

    if (adminError) {
      console.error("Resend API error (Admin):", adminError);
      return NextResponse.json({ error: "Failed to send email to admin" }, { status: 500 });
    }

    // 2. Correo de respuesta automática para el cliente
    const { error: clientError } = await resend.emails.send({
      from: "ElectroTech <contacto@electrotechpasto.com>",
      to: [email],
      subject: "Hemos recibido tu solicitud - ElectroTech",
      html: `
        <div style="font-family: sans-serif; color: #2B2B2B; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #004A80;">¡Hola, ${name}!</h2>
          <p>Hemos recibido tu mensaje correctamente a través de nuestra página web.</p>
          <p>Nuestro equipo de ingeniería revisará tu solicitud y nos pondremos en contacto contigo lo más pronto posible para brindarte la mejor asesoría.</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p style="font-size: 14px; color: #666;">
            <strong>Resumen de tu mensaje:</strong><br/>
            <em>"${message}"</em>
          </p>
          <br/>
          <p style="font-size: 14px;">Atentamente,<br/><strong>El equipo de ElectroTech</strong><br/>
          <a href="https://electrotechpasto.com" style="color: #FF7A00; text-decoration: none;">electrotechpasto.com</a></p>
        </div>
      `,
    });

    if (clientError) {
      console.error("Resend API error (Client autoresponder):", clientError);
      // No retornamos error HTTP porque lo principal (avisar al admin) ya funcionó
    }

    return NextResponse.json({ message: "Contact request received", data }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error handling contact request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
