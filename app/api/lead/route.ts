import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, age, phone, source } = body;

    const emailRecipient = process.env.EMAIL_RECIPIENT!;
    const resendApiKey = process.env.RESEND_API_KEY!;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Заявки ПП <onboarding@resend.dev>', // Используем тестовый email Resend
        to: emailRecipient,
        subject: `Новая заявка с сайта - ${source}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3BC3F3;">Новая заявка с Яндекс Директа на Учебный центр</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 10px;">
              <p><strong>Имя:</strong> ${name}</p>
              <p><strong>Возраст:</strong> ${age}</p>
              <p><strong>Телефон:</strong> <a href="tel:${phone}">${phone}</a></p>
              <p><strong>Дата и время:</strong> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</p>
            </div>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend error:', data);
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
