import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Gifty Delivery, Returns & Gift Notes" },
      {
        name: "description",
        content:
          "Answers on Gifty delivery times, gift messages, timed slots, refunds and international shipping.",
      },
      { property: "og:title", content: "FAQs — Gifty" },
      { property: "og:description", content: "Everything about delivery, gift notes and refunds." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <PageHeader
        eyebrow="Help"
        title="Frequently asked"
        subtitle="Can't find it? Our concierge replies within the hour."
      />
      <Section>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
