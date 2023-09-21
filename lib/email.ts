import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Replace with your SMTP credentials
const smtpOptions = {
  service: process.env.SMTP_HOST || "Gmail",
  //   port: parseInt(process.env.SMTP_PORT || "2525"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "tuanphucnguyen@likelion.net",
    pass: process.env.SMTP_PASSWORD || "logzsamvvlfgddcl",
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL || "tuanphucnguyen2110@gmail.com",
    ...data,
  });
};
