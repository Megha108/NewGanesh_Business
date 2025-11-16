const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    // Allow only POST
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method Not Allowed" }),
      };
    }

    // Parse request body safely
    let data;
    try {
      data = JSON.parse(event.body);
    } catch (e) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid JSON format" }),
      };
    }

    const { name, email, phone, city, product, message } = data;

    // Validate mandatory fields
    if (!name || !email || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // Ensure environment variables exist
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Email credentials missing" }),
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // required for Gmail SMTP
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Build Email
    const mailOptions = {
      from: `"Website Enquiry" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
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

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("❌ Server Error:", error.message);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Internal server error",
        error: error.message,
      }),
    };
  }
};
