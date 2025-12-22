import { NextResponse } from 'next/server';
import { generateEmailToAdminHtml } from '@/components/emails/EmailToAdmin';
import { generateEmailToClientHtml } from '@/components/emails/EmailToClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, website, type, budget, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json({ error: 'Configuration error' }, { status: 500 });
    }

    // Send email to Admin
    const adminHtml = generateEmailToAdminHtml({ name, email, website, type, budget, message });

    const adminResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Eurekadev <hello@eurekadev.fr>',
        to: ['hello@eurekadev.fr'],
        subject: 'Nouvelle demande de contact - Eurekadev',
        html: adminHtml,
      }),
    });

    if (!adminResponse.ok) {
      const errorData = await adminResponse.json();
      console.error('Error sending admin email:', errorData);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    // Send email to Client
    const clientHtml = generateEmailToClientHtml({ name });

    const clientResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Eurekadev <hello@eurekadev.fr>',
        to: [email],
        subject: 'Merci pour votre demande !',
        html: clientHtml,
      }),
    });

    if (!clientResponse.ok) {
      const errorData = await clientResponse.json();
      console.error('Error sending client email:', errorData);
      // We don't fail the request if the client email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

