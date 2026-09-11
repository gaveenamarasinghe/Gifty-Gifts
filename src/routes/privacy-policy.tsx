import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Gifty" },
      {
        name: "description",
        content: "How Gifty collects, stores and protects your personal data.",
      },
      { property: "og:title", content: "Privacy Policy — Gifty" },
      { property: "og:description", content: "Our commitments on data, cookies and your rights." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <PolicyPage
      title="Privacy Policy"
      intro="We collect the minimum we need to deliver your gift, and we never sell your data."
      sections={[
        {
          heading: "What we collect",
          body: "Your name, email, phone number, delivery addresses and order history. Payment card details are handled by Stripe and never touch our servers.",
        },
        {
          heading: "Why we collect it",
          body: "To process orders, deliver gifts, prevent fraud and — only if you opt in — send occasional offers.",
        },
        {
          heading: "Where it is stored",
          body: "In Firebase Firestore with role-based security rules. Access is limited to staff who need it to fulfil orders.",
        },
        {
          heading: "Cookies",
          body: "Essential cookies keep you signed in and remember your basket. Analytics cookies are optional and can be declined.",
        },
        {
          heading: "Your rights",
          body: "You can request a copy of your data, correct it, or ask us to delete your account at any time by emailing hello@gifty.shop.",
        },
      ]}
    />
  ),
});
