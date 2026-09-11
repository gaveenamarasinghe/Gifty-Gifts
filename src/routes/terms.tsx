import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Gifty" },
      { name: "description", content: "The terms that apply when you order a gift from Gifty." },
      { property: "og:title", content: "Terms & Conditions — Gifty" },
      { property: "og:description", content: "Orders, pricing, delivery and liability terms." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <PolicyPage
      title="Terms & Conditions"
      intro="Plain-English terms covering orders, pricing, delivery and liability."
      sections={[
        {
          heading: "Placing an order",
          body: "An order is accepted once you receive our confirmation email. We may decline an order if an item is out of stock or the delivery address is outside our network.",
        },
        {
          heading: "Pricing",
          body: "Prices include VAT where applicable. Shipping is calculated at checkout and is free on orders over $120.",
        },
        {
          heading: "Substitutions",
          body: "For fresh flowers and cakes we may substitute an item of equal or greater value if a component is unavailable, keeping the overall design intact.",
        },
        {
          heading: "Liability",
          body: "Our liability for any order is limited to the amount you paid for it. Nothing here limits liability we cannot exclude by law.",
        },
        {
          heading: "Account use",
          body: "Keep your password confidential. You are responsible for activity under your account.",
        },
      ]}
    />
  ),
});
