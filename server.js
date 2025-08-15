import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 5174

app.use(cors())
app.use(express.json())

// Configure transporter - for production set real SMTP creds in env
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body || {}
    if (!email && !phone) {
      return res.status(400).send('Имейл или телефон са задължителни')
    }

    const mailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: 'uchebencentarusmivka@gmail.com',
      subject: 'Ново запитване от сайта – Академия Усмивка',
      text: `Име: ${name || '-'}\nИмейл: ${email || '-'}\nТелефон: ${phone || '-'}\nКурс: ${course || '-'}\n\nСъобщение:\n${message || '-'}`,
    }

    await transporter.sendMail(mailOptions)
    res.status(200).send('OK')
  } catch (err) {
    console.error(err)
    res.status(500).send('MAIL_ERROR')
  }
})

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})


