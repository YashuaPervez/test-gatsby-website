const nodemailer = require("nodemailer");
const joi = require("joi");

const sendEmailSchema = joi.object().keys({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  phone: joi.number().required(),
});

const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Only post request is allowed" }),
    };
  } else {
    const { error } = sendEmailSchema.validate(JSON.parse(event.body));
    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: error?.details?.[0]?.message,
        }),
      };
    }
  }
  try {
    const body = JSON.parse(event.body);
    const output = `<ul>
    <li>Name: ${body.name}</li>
    <li>Email: ${body.email}</li>
    <li>Phone: ${body.phone}</li>
    </ul>`;

    const transporter = nodemailer.createTransport({
      host: "mail.yashuapervez.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER_NAME,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: `"Yashua Pervez" <${process.env.EMAIL_USER_NAME}>`,
      to: "yashuapervez@gmail.com, guesswhoeve@gmail.com",
      subject: "Message from your website",
      html: output,
    };

    const response = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully",
        success: true,
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
