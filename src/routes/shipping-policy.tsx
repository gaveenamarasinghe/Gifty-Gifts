import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({
    meta: [
      { title: "Shipping Policy — Gifty" },
      {
        name: "description",
        content: "Gifty delivery windows, timed slots, costs and international shipping.",
      },
      { property: "og:title", content: "Shipping Policy — Gifty" },
      {
        property: "og:description",
        content: "Same-day delivery, timed slots and international shipping.",
      },
      { property: "og:url", content: "/shipping-policy" },
    ],
    links: [{ rel: "canonical", href: "/shipping-policy" }],
  }),
  component: () => (
    <PolicyPage
      title="Shipping Policy"
      intro="Same-day in 40+ cities, next-day express everywhere else."
      sections={[
        {
          heading: "Delivery windows",
          body: "Order before 4pm for same-day delivery in supported cities. Choose a two-hour slot between 9am and 7pm, including weekends and public holidays.",
        },
        {
          heading: "Costs",
          body: "Standard shipping is $9. Express and timed slots are $14. All shipping is free on orders over $120.",
        },
        {
          heading: "International",
          body: "We ship to 22 countries. Perishables such as cakes and flowers are fulfilled by a vetted local partner so they arrive fresh.",
        },
        {
          heading: "Failed deliveries",
          body: "If nobody is home our courier leaves a card and retries the next day. Fresh items are stored chilled between attempts.",
        },
      ]}
    />
  ),
});
