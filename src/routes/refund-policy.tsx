import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Gifty" },
      {
        name: "description",
        content: "Gifty's 48-hour guarantee, refunds, replacements and cancellations.",
      },
      { property: "og:title", content: "Refund Policy — Gifty" },
      {
        property: "og:description",
        content: "Perfect or replaced — our 48-hour guarantee explained.",
      },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: () => (
    <PolicyPage
      title="Refund Policy"
      intro="If a gift arrives less than perfect, we replace it or refund you in full."
      sections={[
        {
          heading: "The 48-hour guarantee",
          body: "Tell us within 48 hours of delivery and send a photo. We will replace the gift on the next available slot or refund you in full — your choice.",
        },
        {
          heading: "Cancellations",
          body: "Cancel free of charge until the order enters production, which is 24 hours before the delivery slot for fresh items.",
        },
        {
          heading: "Returns",
          body: "Non-perishable gifts can be returned unopened within 14 days. Personalised and engraved items cannot be returned unless faulty.",
        },
        {
          heading: "How refunds are issued",
          body: "Refunds return to the original payment method within three to five working days. Cash-on-delivery orders are refunded by bank transfer.",
        },
      ]}
    />
  ),
});
