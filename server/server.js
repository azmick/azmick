const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cugri123@gmail.com',
    pass: 'utrwnhgdiygfbbfb',
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // Kullanıcının girdiği e-posta adresi
    to: 'cugri123@gmail.com',
    subject: `İletişim Formu: ${name} (${email})`,
    text: `Gönderen Adı: ${name}\nGönderen E-posta: ${email}\n\nMesaj:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Mail gönderilirken bir hata oluştu:', error);
      res.status(500).send('E-posta gönderilirken bir hata oluştu.');
    } else {
      console.log('E-posta gönderildi:', info.response);
      res.status(200).send('E-posta başarıyla gönderildi.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
