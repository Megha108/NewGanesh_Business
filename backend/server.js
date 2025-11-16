require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// =========================
//  SEND ENQUIRY API
// =========================
app.post("/send-enquiry", async (req, res) => {
  const { name, email, phone, city, product, message } = req.body;

  try {
    // Gmail Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your gmail
        pass: process.env.GMAIL_PASS, // your app password
      },
    });

    // Email template
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // You receive the enquiry here
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

    res.json({
      success: true,
      message: "Enquiry sent successfully!",
    });
  } catch (err) {
    console.error("❌ Email Error:", err);
    res.json({
      success: false,
      message: "Failed to send enquiry.",
    });
  }
});

// =========================
//  SERVER START (IMPORTANT)
// =========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
