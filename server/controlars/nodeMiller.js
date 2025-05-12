const nodemailer = require("nodemailer");
require("dotenv").config();

const sendOTP = async (email, strOtp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.USER_EMAIL}`,
      pass: `${process.env.MAIL_CODE}`,
    },
  });

  let info = await transporter.sendMail({
    from: `"Zaki Ur Rehman" <${process.env.USER_EMAIL}>`,
    to: `${email}`,
    subject: "OTP Verification ✔",
    text: "Hello world?",
    html: `
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f7; color: #333333; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
    <h1 style="font-size: 20px; color: #2c3e50; margin-top: 0;">Your One-Time Password (OTP) for Account Verification</h1>

    <p style="font-size: 16px; line-height: 1.6;">Dear ${email},</p>

    <p style="font-size: 16px; line-height: 1.6;">As part of our commitment to safeguarding your account, please use the following One-Time Password (OTP) to proceed with your verification:</p>

    <div style="font-size: 28px; font-weight: bold; background-color: #eaf3ff; color: #1a73e8; padding: 15px; text-align: center; border-radius: 6px; letter-spacing: 4px; margin: 20px 0;">${strOtp}</div>

    <p style="font-size: 16px; line-height: 1.6;">This code is valid for the next <strong>10 minutes</strong>. Kindly enter it promptly to complete your login or verification process.</p>

    <p style="font-size: 16px; line-height: 1.6;"><strong>Important:</strong> For your protection, never share this code with anyone. Our team will never ask you for it.</p>

    <p style="font-size: 16px; line-height: 1.6;">If you did not initiate this request, please disregard this message or contact our support team immediately.</p>

    <p style="font-size: 16px; line-height: 1.6;">Warm regards,<br/>
    The ZAKBASH Team</p>

    <div style="font-size: 14px; color: #888888; text-align: center; margin-top: 30px;">
      &copy; ZAKBASH All rights reserved.
    </div>
  </div>
</body>

        `,
  });

  return info;
};

module.exports = sendOTP;
