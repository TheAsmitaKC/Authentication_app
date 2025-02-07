const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

let verificationCode = null; // Temporarily store verification code (use a database in production)

app.use(bodyParser.json());

// Send verification code to email
app.post("/api/send-verification-code", async (req, res) => {
  const { email } = req.body;

  // Generate a random 6-digit code
  verificationCode = Math.floor(100000 + Math.random() * 900000);

  // Set up email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Verification Code",
    text: `Your verification code is: ${verificationCode}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Verification code sent!");
  } catch (err) {
    res.status(500).send("Error sending email.");
  }
});

// Verify the code
app.post("/api/verify-code", (req, res) => {
  const { code } = req.body;

  if (code === verificationCode.toString()) {
    res.status(200).send("Verification successful!");
  } else {
    res.status(400).send("Invalid verification code.");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
