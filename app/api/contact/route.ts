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

    const { error, data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || "No provisto"}\n\nMensaje:\n${message}`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Contact request received", data }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error handling contact request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
