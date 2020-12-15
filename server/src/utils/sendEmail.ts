import nodemailer from "nodemailer";

export async function sendEmail(email: string, url: string) {
  console.log("Send email activate")
  console.log(email)
  const account = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "ekrijel@gmail.com", // generated ethereal user
      pass: "TimeEatsUs124C1" // generated ethereal password
    }
  });


  const mailOptions = {
    from: '"Fred Foo 👻" <ekrijel@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<a href="${url}">${url}</a>` // html body
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
