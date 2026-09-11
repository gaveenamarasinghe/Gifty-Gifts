const transporter = require("../config/mailer");

const BRAND_NAME = "Gifty Shop";
const BRAND_COLOR = "#ec4899";
const BRAND_COLOR_DARK = "#db2777";
const YEAR = new Date().getFullYear();

/**
 * Shared professional email shell (header + footer) so every
 * transactional email looks consistent and on-brand.
 */
function baseLayout({ title, preheader, bodyHtml }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <!-- Preheader (hidden preview text in inbox) -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${preheader}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f7;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg, ${BRAND_COLOR} 0%, ${BRAND_COLOR_DARK} 100%);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:0.5px;">
                🎁 ${BRAND_NAME}
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              ${bodyHtml}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#fafafa;border-top:1px solid #eeeeee;text-align:center;">
              <p style="margin:0 0 8px 0;font-size:12px;color:#999999;">
                This is an automated message from ${BRAND_NAME}. Please do not reply to this email.
              </p>
              <p style="margin:0;font-size:12px;color:#bbbbbb;">
                &copy; ${YEAR} ${BRAND_NAME}. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

async function sendVerificationEmail(email, name, token) {
  if (!process.env.API_URL) {
    throw new Error(
      "API_URL is not set in the environment. Check your .env file and " +
        "make sure dotenv.config() runs before this module is used.",
    );
  }

  const link = `${process.env.API_URL}/api/auth/verify-email?token=${token}`;

  const bodyHtml = `
    <h2 style="margin:0 0 16px 0;color:#1a1a1a;font-size:20px;font-weight:700;">
      Hi ${name}, welcome aboard! 👋
    </h2>
    <p style="margin:0 0 20px 0;color:#555555;font-size:15px;line-height:1.6;">
      Thanks for creating your ${BRAND_NAME} account. You're just one step away 
      please confirm this is your email address to activate your account.
    </p>

    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0;">
      <tr>
        <td style="border-radius:30px;background:linear-gradient(135deg, ${BRAND_COLOR} 0%, ${BRAND_COLOR_DARK} 100%);">
          <a href="${link}"
             style="display:inline-block;padding:14px 36px;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;border-radius:30px;">
            Verify Email Address
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 8px 0;color:#888888;font-size:13px;line-height:1.6;">
      Or copy and paste this link into your browser:
    </p>
    <p style="margin:0 0 24px 0;word-break:break-all;">
      <a href="${link}" style="color:${BRAND_COLOR};font-size:13px;">${link}</a>
    </p>

    <div style="padding:14px 18px;background-color:#fff1f2;border-left:3px solid ${BRAND_COLOR};border-radius:8px;">
      <p style="margin:0;color:#9d174d;font-size:13px;">
        ⏰ This verification link will expire in <strong>24 hours</strong>. If you didn't create a
        ${BRAND_NAME} account, you can safely ignore this email.
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${BRAND_NAME} 🎁" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify your Gifty account",
      html: baseLayout({
        title: "Verify your Gifty account",
        preheader: "Confirm your email to activate your Gifty account.",
        bodyHtml,
      }),
    });
  } catch (error) {
    console.error("Failed to send verification email:", error);
    throw error;
  }
}

async function sendWelcomeEmail(email, name) {
  const shopLink = process.env.CLIENT_URL || "#";

  const bodyHtml = `
    <h2 style="margin:0 0 16px 0;color:#1a1a1a;font-size:20px;font-weight:700;">
      You're verified, ${name}! 🎉
    </h2>
    <p style="margin:0 0 20px 0;color:#555555;font-size:15px;line-height:1.6;">
      Your email has been confirmed and your ${BRAND_NAME} account is now fully active.
      We're thrilled to have you with us thoughtful gifts are just a few clicks away.
    </p>

    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0;">
      <tr>
        <td style="border-radius:30px;background:linear-gradient(135deg, ${BRAND_COLOR} 0%, ${BRAND_COLOR_DARK} 100%);">
          <a href="${shopLink}"
             style="display:inline-block;padding:14px 36px;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;border-radius:30px;">
            Start Shopping
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:0;color:#888888;font-size:13px;line-height:1.6;">
      Need help? Just reply to our support team anytime we're happy to assist.
    </p>
  `;

  try {
    await transporter.sendMail({
      from: `"${BRAND_NAME} 🎁" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to Gifty 🎉",
      html: baseLayout({
        title: "Welcome to Gifty",
        preheader: "Your account is verified and ready to go.",
        bodyHtml,
      }),
    });
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    throw error;
  }
}

async function send(email, subject, html) {
  try {
    await transporter.sendMail({
      from: `"${BRAND_NAME} 🎁" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      html,
    });
  } catch (error) {
    console.error("Failed to send transactional email:", error);
    throw error;
  }
}

module.exports = {
  sendVerificationEmail,
  sendWelcomeEmail,
  send,
};
