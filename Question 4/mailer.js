const nodemailer = require('nodemailer');

// Create a transporter object using your email service 
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'zwivhuyachantel@outlook.com', // Your email address
    pass: 'Zwi15vhu%' // Your password 
  }
});

// Email message options
const mailOptions = {
  from: 'zwivhuyachantel@outlook.com', // Your email address
  to: '577907@student.belgiumcampus.ac.za', // Recipient's email address
  subject: 'Belgium Campus ITversity sever',
  text: 'The server is running smoothly.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Email not sent: ' + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});