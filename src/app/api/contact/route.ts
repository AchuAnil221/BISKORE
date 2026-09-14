import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Log the enquiry (replace with email service / CRM integration later)
    console.log('📩 New contact enquiry from Biskore website:');
    console.log(`  Name:    ${name}`);
    console.log(`  Email:   ${email}`);
    console.log(`  Phone:   ${phone || 'N/A'}`);
    console.log(`  Subject: ${subject || 'N/A'}`);
    console.log(`  Message: ${message}`);

    // TODO: Integrate with email service (e.g. Resend, SendGrid, Nodemailer)
    // await sendEmail({ to: 'info@biskore.com', from: email, subject, body: message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
