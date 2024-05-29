const nodemailer = require("nodemailer");



// Sending the Data

const transporter = nodemailer.createTransport({
    service: 'tltpro.org', 
    auth: {
      user: 'lending@tltpro.org', 
      pass: '7fln5kdN1zXVg6Dd',
    },
});
  
// Function to send the email
  const sendEmail = async (data) => {
      try {
      const mailOptions = {
        from: 'lending@tltpro.org',
        to: 'bahashwan@mail.ru', 
        subject: 'subject', 
        text: JSON.stringify(data), 
      };
  
      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
  };
  
  const exampleObj = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      message: 'message',
    };
    
    // 
    sendEmail(exampleObj)