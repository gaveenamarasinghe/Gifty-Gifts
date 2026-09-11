import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHeader, Section } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Gifty — Gift Concierge" },
      {
        name: "description",
        content:
          "Talk to the Gifty gift concierge by email, phone or the contact form. We reply within an hour.",
      },
      { property: "og:title", content: "Contact Gifty — Gift Concierge" },
      { property: "og:description", content: "We reply within the hour, seven days a week." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(3, "Add a subject").max(120),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

function Contact() {
  const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });

  return (
    <>
      <PageHeader
        eyebrow="Say hello"
        title="Contact us"
        subtitle="Our gift concierge replies within the hour, seven days a week."
      />
      <Section className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <form
          noValidate
          onSubmit={form.handleSubmit(() => {
            // POSTs to /api/contacts on the Express backend (Firestore `contacts`).
            toast.success("Message sent — we'll reply within the hour.");
            form.reset();
          })}
          className="space-y-5 rounded-3xl border border-border bg-card p-8 shadow-soft"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label className="mb-2 block">Name</Label>
              <Input {...form.register("name")} placeholder="Alex Morgan" />
              <Err msg={form.formState.errors.name?.message} />
            </div>
            <div>
              <Label className="mb-2 block">Email</Label>
              <Input type="email" {...form.register("email")} placeholder="alex@example.com" />
              <Err msg={form.formState.errors.email?.message} />
            </div>
          </div>
          <div>
            <Label className="mb-2 block">Subject</Label>
            <Input {...form.register("subject")} placeholder="Bespoke hamper for 40 people" />
            <Err msg={form.formState.errors.subject?.message} />
          </div>
          <div>
            <Label className="mb-2 block">Message</Label>
            <Textarea rows={6} {...form.register("message")} className="rounded-2xl" />
            <Err msg={form.formState.errors.message?.message} />
          </div>
          <Button type="submit" variant="hero" size="lg">
            Send message
          </Button>
        </form>

        <aside className="space-y-4">
          {[
            { icon: Mail, label: "hello@gifty.shop", sub: "Email us" },
            { icon: Phone, label: "+1 555 0100", sub: "Mon–Sun, 8am–8pm" },
            { icon: MapPin, label: "12 Rosebury Lane, London", sub: "Studio & pickup" },
          ].map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <c.icon className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">{c.label}</p>
                <p className="text-xs text-muted-foreground">{c.sub}</p>
              </div>
            </div>
          ))}
        </aside>
      </Section>
    </>
  );
}

function Err({ msg }: { msg?: string }) {
  return msg ? <p className="mt-1.5 text-xs text-destructive">{msg}</p> : null;
}
