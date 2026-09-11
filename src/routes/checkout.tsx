import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CreditCard, Banknote, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PageHeader, Section } from "@/components/PageHeader";
import { getProduct, useShop } from "@/context/ShopContext";
import { currency } from "@/lib/data";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Gifty" },
      {
        name: "description",
        content: "Choose delivery date, add a gift message and pay securely.",
      },
      { property: "og:title", content: "Checkout — Gifty" },
      {
        property: "og:description",
        content: "Secure Gifty checkout with Stripe and cash on delivery.",
      },
      { property: "og:url", content: "/checkout" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/checkout" }],
  }),
  component: Checkout,
});

/** Validation runs client-side here and again in the Express API (express-validator). */
const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  address: z.string().trim().min(6, "Enter the delivery address").max(200),
  city: z.string().trim().min(2, "Enter a city").max(80),
  postcode: z.string().trim().min(3, "Enter a postcode").max(12),
  deliveryDate: z.string().min(1, "Pick a delivery date"),
  slot: z.string().min(1, "Pick a time slot"),
  message: z.string().trim().max(300, "Keep the note under 300 characters").optional(),
  payment: z.enum(["stripe", "cod", "wallet"]),
});

type FormValues = z.infer<typeof schema>;

const slots = ["09:00 – 11:00", "11:00 – 13:00", "13:00 – 15:00", "15:00 – 17:00", "17:00 – 19:00"];

function Checkout() {
  const { cart, totals, placeOrder } = useShop();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { payment: "stripe", slot: slots[0], deliveryDate: "", message: "" },
  });

  function onSubmit(values: FormValues) {
    // In production this POSTs to /api/orders on the Express backend, which
    // creates the Stripe PaymentIntent and writes the Firestore order document.
    const order = placeOrder({
      address: `${values.address}, ${values.city} ${values.postcode}`,
      deliveryDate: values.deliveryDate,
      slot: values.slot,
      message: values.message ?? "",
      payment: values.payment,
    });
    navigate({ to: "/order-success", search: { id: order.id } });
  }

  if (cart.length === 0) {
    return (
      <>
        <PageHeader title="Checkout" />
        <Section>
          <div className="rounded-3xl border border-dashed border-border p-16 text-center">
            <p className="text-muted-foreground">Your basket is empty.</p>
            <Button asChild variant="hero" className="mt-6">
              <Link to="/shop">Browse gifts</Link>
            </Button>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Final step"
        title="Checkout"
        subtitle="Delivery details, gift note and payment."
      />
      <Section className="grid gap-10 lg:grid-cols-[1fr_380px]">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
          <Card title="Delivery address">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" error={form.formState.errors.fullName?.message}>
                <Input {...form.register("fullName")} placeholder="Alex Morgan" />
              </Field>
              <Field label="Email" error={form.formState.errors.email?.message}>
                <Input type="email" {...form.register("email")} placeholder="alex@example.com" />
              </Field>
              <Field label="Phone" error={form.formState.errors.phone?.message}>
                <Input {...form.register("phone")} placeholder="+1 555 0100" />
              </Field>
              <Field label="Postcode" error={form.formState.errors.postcode?.message}>
                <Input {...form.register("postcode")} placeholder="SW1A 1AA" />
              </Field>
              <Field label="Address" error={form.formState.errors.address?.message} full>
                <Input {...form.register("address")} placeholder="12 Rosebury Lane" />
              </Field>
              <Field label="City" error={form.formState.errors.city?.message}>
                <Input {...form.register("city")} placeholder="London" />
              </Field>
            </div>
          </Card>

          <Card title="Delivery date & slot">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Delivery date" error={form.formState.errors.deliveryDate?.message}>
                <Input type="date" {...form.register("deliveryDate")} />
              </Field>
              <Field label="Time slot" error={form.formState.errors.slot?.message}>
                <select
                  {...form.register("slot")}
                  className="h-10 w-full rounded-full border border-input bg-background px-4 text-sm"
                >
                  {slots.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
            </div>
          </Card>

          <Card title="Gift message">
            <Textarea
              {...form.register("message")}
              rows={3}
              placeholder="Happy birthday — hope this makes your day sparkle."
              className="rounded-2xl"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Handwritten on cotton card, free of charge.
            </p>
          </Card>

          <Card title="Payment method">
            <RadioGroup
              value={form.watch("payment")}
              onValueChange={(v) => form.setValue("payment", v as FormValues["payment"])}
              className="grid gap-3 sm:grid-cols-3"
            >
              <PayOption value="stripe" icon={CreditCard} label="Card (Stripe)" />
              <PayOption value="wallet" icon={Wallet} label="Wallet" />
              <PayOption value="cod" icon={Banknote} label="Cash on delivery" />
            </RadioGroup>
          </Card>

          <Button type="submit" variant="hero" size="xl" className="w-full">
            Pay {currency(totals.total)}
          </Button>
        </form>

        <aside className="h-fit rounded-3xl border border-border bg-card p-7 shadow-card lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-semibold">Your order</h2>
          <ul className="mt-5 space-y-3">
            {cart.map((l) => {
              const p = getProduct(l.productId);
              if (!p) return null;
              return (
                <li key={l.productId} className="flex items-center gap-3 text-sm">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl gradient-soft text-xl"
                    aria-hidden
                  >
                    {p.emoji}
                  </span>
                  <span className="flex-1">
                    {p.name} <span className="text-muted-foreground">× {l.qty}</span>
                  </span>
                  <span className="font-medium">{currency(p.price * l.qty)}</span>
                </li>
              );
            })}
          </ul>
          <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd>{currency(totals.subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Shipping</dt>
              <dd>{totals.shipping === 0 ? "Free" : currency(totals.shipping)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Tax</dt>
              <dd>{currency(totals.tax)}</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-3">
              <dt className="font-display text-lg font-semibold">Total</dt>
              <dd className="font-display text-lg font-bold text-primary">
                {currency(totals.total)}
              </dd>
            </div>
          </dl>
        </aside>
      </Section>
    </>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-border bg-card p-7 shadow-soft">
      <h2 className="mb-5 font-display text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <Label className="mb-2 block">{label}</Label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function PayOption({
  value,
  icon: Icon,
  label,
}: {
  value: string;
  icon: typeof CreditCard;
  label: string;
}) {
  return (
    <Label
      htmlFor={`pay-${value}`}
      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border p-4 transition-smooth hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-accent"
    >
      <RadioGroupItem value={value} id={`pay-${value}`} />
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium">{label}</span>
    </Label>
  );
}
