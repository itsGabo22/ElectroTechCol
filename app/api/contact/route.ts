import { NextResponse } from "next/server";

type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function isContactRequest(value: unknown): value is ContactRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.name === "string" &&
    typeof candidate.email === "string" &&
    typeof candidate.phone === "string" &&
    typeof candidate.message === "string" &&
    candidate.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidate.email) &&
    candidate.phone.trim().length >= 7 &&
    candidate.message.trim().length >= 10
  );
}

async function sendContactEmail(payload: ContactRequest): Promise<void> {
  void payload;
  // Connect Resend, SendGrid, SMTP or another provider here.
}

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);

  if (!isContactRequest(body)) {
    return NextResponse.json({ message: "Invalid contact request" }, { status: 400 });
  }

  await sendContactEmail({
    name: body.name.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    message: body.message.trim(),
  });

  return NextResponse.json({ message: "Contact request received" });
}
