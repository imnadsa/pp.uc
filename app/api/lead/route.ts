import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      phone, 
      source,
      age,
      situation,
      symptoms,
      hadTreatment,
      desiredResult
    } = body;

    const emailRecipient = process.env.EMAIL_RECIPIENT!;
    const resendApiKey = process.env.RESEND_API_KEY!;

    // Формируем HTML письма с условными полями
    let htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #5c5af4;">Новая заявка - ${source}</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> <a href="tel:${phone}">${phone}</a></p>
          ${age ? `<p><strong>Возраст:</strong> ${age}</p>` : ''}
          <p><strong>Дата и время:</strong> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</p>
        </div>
    `;

    // Добавляем дополнительные поля если они есть
    if (situation || symptoms || hadTreatment || desiredResult) {
      htmlContent += `
        <div style="background: #e8ebff; padding: 20px; border-radius: 10px;">
          <h3 style="color: #5c5af4; margin-top: 0;">Детали заявки:</h3>
      `;

      if (situation) {
        htmlContent += `
          <div style="margin-bottom: 15px;">
            <strong style="color: #2d2b8f;">Ситуация с зубами:</strong>
            <p style="margin: 5px 0; white-space: pre-wrap;">${situation}</p>
          </div>
        `;
      }

      if (symptoms) {
        htmlContent += `
          <div style="margin-bottom: 15px;">
            <strong style="color: #2d2b8f;">Симптомы:</strong>
            <p style="margin: 5px 0; white-space: pre-wrap;">${symptoms}</p>
          </div>
        `;
      }

      if (hadTreatment) {
        htmlContent += `
          <div style="margin-bottom: 15px;">
            <strong style="color: #2d2b8f;">Проходил(а) лечение ранее:</strong>
            <p style="margin: 5px 0;">${hadTreatment}</p>
          </div>
        `;
      }

      if (desiredResult) {
        htmlContent += `
          <div style="margin-bottom: 15px;">
            <strong style="color: #2d2b8f;">Желаемый результат:</strong>
            <p style="margin: 5px 0; white-space: pre-wrap;">${desiredResult}</p>
          </div>
        `;
      }

      htmlContent += `</div>`;
    }

    htmlContent += `</div>`;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Заявки ПП <onboarding@resend.dev>',
        to: emailRecipient,
        subject: `Новая заявка с сайта - ${source}`,
        html: htmlContent,
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
