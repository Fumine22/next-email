import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import MailTemplate from "../../emails/WelcomeTemplate";
import { sendEmail } from "../../lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await sendEmail({
    to: "phuc.skynight@gmail.com",
    subject: "Welcome to NextAPI",
    html: render(MailTemplate()),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
