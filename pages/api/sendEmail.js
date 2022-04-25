const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "Sendinblue",
  auth: {
    user: process.env.SENDINBLUE_USER,
    pass: process.env.SENDINBLUE_PASSWORD,
  },
});

export default async function sendEmail(req, res) {
  try {
    const { name, email, subject, message } = JSON.parse(req.body);
    let info = await transporter.sendMail({
      from: "sehoulihamza@yahoo.com", // sender address
      to: "sehouli.hamza@gmail.com", // list of receivers
      subject: subject, // Subject line
      html: `<div>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        </div>`,
    });

    res.status(200).json({ message: "Email sent succefully", ok: true });
  } catch (err) {
    res.status(400).json({ message: "Email has not been sent", ok: false });
  }
}
