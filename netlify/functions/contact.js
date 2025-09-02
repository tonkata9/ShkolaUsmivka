import nodemailer from 'nodemailer'

export async function handler(event, context) {
  const { name, email, phone, course, message } = JSON.parse(event.body)

  if (!email && !phone) {
    return { statusCode: 400, body: 'Имейл или телефон са задължителни' }
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: 'uchebencentarusmivka@gmail.com',
    subject: 'Ново запитване от сайта – Академия Усмивка',
    text: `Име: ${name}\nИмейл: ${email}\nТелефон: ${phone}\nКурс: ${course}\nСъобщение: ${message}`,
  })

  return { statusCode: 200, body: 'OK' }
}
