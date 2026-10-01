import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Debug log environment variables (without showing the actual password)
console.log('Email service starting...');
console.log('Email configured for:', process.env.EMAIL ? 'Yes' : 'No');
console.log('Email password configured:', process.env.EMAIL_PASS ? 'Yes' : 'No');

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(request: Request) {
  console.log('\n--- New Form Submission ---');
  
  try {
    const body = await request.json();
    console.log('Form data received');

    if (!email || !pass) {
      console.error('Error: Email credentials not configured');
      // Client mailto fallback kullanabilsin diye kontrollü hata
      return NextResponse.json(
        {
          success: false,
          error: 'email_not_configured',
          fallback: true,
        },
        { status: 503 }
      );
    }

    // Gmail SMTP ayarları
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: pass,
      },
      debug: true, // Enable debug output
      logger: true // Enable logging
    });

    const { name, email: fromEmail, company, projectType, budget, timeline, message } = body;
    
    // E-posta ayarları
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'drectivegames@gmail.com',
      replyTo: fromEmail,
      subject: `Yeni İletişim Formu: ${projectType || 'Genel Soru'}`,
      html: `
        <h2>Yeni İletişim Formu</h2>
        <p><strong>Gönderen:</strong> ${name} (${fromEmail})</p>
        <p><strong>Şirket:</strong> ${company || 'Belirtilmemiş'}</p>
        <p><strong>Proje Türü:</strong> ${projectType || 'Belirtilmemiş'}</p>
        <p><strong>Bütçe:</strong> ${budget || 'Belirtilmemiş'}</p>
        <p><strong>Zaman Çizelgesi:</strong> ${timeline || 'Belirtilmemiş'}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${(message || '').replace(/\n/g, '<br>')}</p>
      `,
    };

    console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ 
      success: true,
      message: 'Mesajınız başarıyla gönderildi!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return new NextResponse(
      JSON.stringify({
        success: false, 
        error: 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
        details: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : String(error) : undefined
      }),
      { status: 500 }
    );
  }
}
