import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { name, email, date, time } = req.body;

  console.log('name, email, date, time ');
  console.log(name, email, date, time );
  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //send meesage to the CEO :)
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Dog Walk Request',
    text: `You have a new dog walk request from ${name} (${email}) on ${date} at ${time}.`,
  };

   //send meesage to the CEO :)
   const mailOptionsCostumer = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'New Dog Walk Request - Confirmation',
    text: `Hi ${name}, \n\n You have a submitted successfully new dog walk request on ${date} at ${time}. \n For changes and cancelation please let us know using this email thread. \n\n Best Regards, \n Happy Dog Walk INC`,
  };

  try {
    console.log(mailOptions);
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email with new rewuestsent successfully to the manager' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }

  try{
    await transporter.sendMail(mailOptionsCostumer);
    console.log(mailOptionsCostumer);
    res.status(200).json({ message: 'Email confirmation sent successfully to the custumer' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}


