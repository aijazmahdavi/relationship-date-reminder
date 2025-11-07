const nodemailer = require('nodemailer');

// Configuration
const startDate = new Date(process.env.RELATIONSHIP_START_DATE);
const today = new Date();

// Calculate months and years
const monthsDiff = (today.getFullYear() - startDate.getFullYear()) * 12 + 
                  (today.getMonth() - startDate.getMonth());
const yearsDiff = Math.floor(monthsDiff / 12);

// Check if today is the day of month
const isMonthsary = today.getDate() === startDate.getDate();

if (!isMonthsary) {
  console.log('Not a monthsary today! Today is:', today.toDateString());
  process.exit(0);
}

// Determine the type of celebration
let subject, message;

if (monthsDiff % 12 === 0 && monthsDiff > 0) {
  // Anniversary
  subject = `🎉 ${yearsDiff} Year Anniversary Alert!`;
  message = `
    <h2>🎊 Happy ${yearsDiff} Year Anniversary! 🎊</h2>
    <p>Today marks <strong>${yearsDiff} year${yearsDiff > 1 ? 's' : ''}</strong> with your girlfriend!</p>
    <p>Started: ${startDate.toDateString()}</p>
    <p><strong>Don't forget to celebrate this special milestone!</strong></p>
    <hr>
    <p><em>💡 Ideas: Plan something special, write a heartfelt message, or surprise her with something meaningful.</em></p>
  `;
} else {
  // Regular monthsary
  subject = `💝 ${monthsDiff} Month Monthsary Reminder!`;
  message = `
    <h2>💕 Monthsary Alert! 💕</h2>
    <p>Today marks <strong>${monthsDiff} months</strong> together with your girlfriend!</p>
    <p>Started: ${startDate.toDateString()}</p>
    ${monthsDiff % 6 === 0 ? '<p><strong>🎉 This is a 6-month milestone!</strong></p>' : ''}
    <p><strong>Time to show some love!</strong></p>
    <hr>
    <p><em>💡 Quick ideas: Send a sweet message, plan a date, or get her favorite treat.</em></p>
  `;
}

// Setup email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

// Email options
const mailOptions = {
  from: process.env.GMAIL_USER,
  to: process.env.RECIPIENT_EMAIL,
  subject: subject,
  html: message
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
    process.exit(1);
  }
  console.log('Email sent successfully:', info.response);
  console.log('Subject:', subject);
});
