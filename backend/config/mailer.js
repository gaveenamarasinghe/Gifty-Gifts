/** Nodemailer transport shared by every transactional email. */
const nodemailer = require("nodemailer");

function createTransport() {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASSWORD?.replace(/\s+/g, "").trim();

  if (!user || !pass) {
    throw new Error("Email credentials are not configured. Set EMAIL_USER and EMAIL_PASSWORD.");
  }

  const host = process.env.EMAIL_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.EMAIL_PORT || 587);

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: true,
    auth: { user, pass },
  });
}

const transporter = createTransport();

module.exports = transporter;
