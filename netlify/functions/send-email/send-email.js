const nodemailer = require("nodemailer");

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "mail.yashuapervez.com",
      port: 465,
      secure: true,
      auth: {
        user: "yashuapervez@yashuapervez.com",
        pass: "#;Gfbn?i{56?]+-QJD",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailOptions = {
      from: '"Yashua Pervez" <yashuapervez@yashuapervez.com>',
      to: "yashuapervez@gmail.com",
      subject: "Hello",
      html: "<p>Hi, this works</p>",
    };

    const response = await transporter.sendMail(mailOptions);
    console.log("response >>", response);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello World` }),
    };
  } catch (error) {
    console.log("error >>", error);
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
