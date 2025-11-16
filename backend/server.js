const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, phone, city, product, message } = JSON.parse(event.body);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail
        pass: process.env.GMAIL_PASS, // App password from Gmail
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Where you receive the enquiry
      subject: `New Enquiry from ${name}`,
      text: `
New Customer Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
City: ${city}
Product: ${product}
Message: ${message}

Submitted On: ${new Date().toLocaleString()}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Enquiry sent successfully!" }),
    };
  } catch (err) {
    console.error("❌ Email Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Failed to send enquiry." }),
    };
  }
};
