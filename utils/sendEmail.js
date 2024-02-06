import { createTestAccount, createTransport } from "nodemailer";
import config from "./nodemailerConfig.js";

export const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await createTestAccount();

  const transporter = createTransport(config);

  return transporter.sendMail({
    from: '"Mir Uzair from TrekNest" <squadtechinnovations@gmail.com>', // sender address
    to,
    subject,
    html,
  });
};
