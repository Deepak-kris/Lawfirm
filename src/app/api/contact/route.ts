import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getResend } from '@/lib/resend';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  practiceArea: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(20),
  website: z.string().max(0),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 });
  }

  const { name, email, phone, practiceArea, subject, message, website } = parsed.data;

  // Honeypot: silently accept bots
  if (website) {
    return NextResponse.json({ success: true });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!to || !from) {
    console.error('Contact email env vars not configured');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    await getResend().emails.send({
      from,
      to,
      reply_to: email,
      subject: `[Website Inquiry] ${subject}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff;">
          <div style="background: #0A1628; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #C9A84C; font-size: 20px; margin: 0;">New Website Inquiry</h1>
            <p style="color: #9ca3af; font-size: 13px; margin: 4px 0 0;">Justice &amp; Partners LLP</p>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: bold; color: #111827;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td><td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td><td style="padding: 8px 0; color: #111827;">${phone}</td></tr>` : ''}
              ${practiceArea ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Practice Area</td><td style="padding: 8px 0; color: #111827;">${practiceArea}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Subject</td><td style="padding: 8px 0; color: #111827;">${subject}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <h3 style="color: #111827; font-size: 14px; margin: 0 0 12px;">Message</h3>
            <p style="color: #374151; line-height: 1.7; white-space: pre-wrap; font-size: 14px;">${message}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 16px; text-align: center;">
            Sent via the Justice &amp; Partners LLP website contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
