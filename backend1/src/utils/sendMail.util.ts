import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.OFFICIAL_EMAIL}`,
    pass: `${process.env.OFFICIAL_EMAIL_APP_PASSWORD}`,
  },
});
