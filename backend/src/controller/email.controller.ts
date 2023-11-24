import nodemailer from "nodemailer";

export const sendVerificationEmail = async (
  id: string,
  email: string,
  name: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_GMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const VERIFICATION_EMAIL_ROUTE = process.env.VERIFICATION_ROUTE;
    const info = await transporter.sendMail({
      from: process.env.GOOGLE_GMAIL,
      to: email,
      subject: "Campus Book Swap Email Verification",
      html: `<div style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <p style="color: #555555;">Dear,<br/>${name}, please verify your email to continue logging in and using our system.</p>
    <h2 style="color: #333333;">Email Verification</h2>
    <p style="color: #555555;">Thank you for registering with our service. To verify your email address, please click the link below:</p>
    <a href="${VERIFICATION_EMAIL_ROUTE}/${id}" style="display: inline-block; padding: 10px 20px; background-color: #3498db; color: #ffffff; text-decoration: none; border-radius: 3px;">Verify Email</a>
    <p style="color: #555555;">If you didn't register on our platform, you can safely ignore this email.</p>
  </div>`,
    });
  } catch (error) {
    console.log(error.message);
  }
};
