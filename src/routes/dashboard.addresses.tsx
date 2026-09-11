import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Home, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/dashboard/addresses")({
  component: Addresses,
});

type Address = { id: string; label: string; line: string; city: string; postcode: string };

const seed: Address[] = [
  { id: "a1", label: "Home", line: "12 Rosebury Lane", city: "London", postcode: "SW1A 1AA" },
  { id: "a2", label: "Work", line: "4 Shoreditch High St", city: "London", postcode: "E1 6JJ" },
];

function Addresses() {
  const [list, setList] = useState<Address[]>(seed);
  const [form, setForm] = useState({ label: "", line: "", city: "", postcode: "" });

  return (
    <div>
      <h1 className="font-display text-3xl font-bold">Addresses</h1>
      <p className="mt-1 text-muted-foreground">Saved addresses make checkout a two-tap affair.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {list.map((a) => (
          <div key={a.id} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-start justify-between">
              <Home className="h-5 w-5 text-primary" />
              <Button
                size="icon"
                variant="ghost"
                aria-label={`Delete ${a.label} address`}
                onClick={() => setList((p) => p.filter((x) => x.id !== a.id))}
              >
                <Trash2 className="text-destructive" />
              </Button>
            </div>
            <p className="mt-3 font-display text-lg font-semibold">{a.label}</p>
            <p className="text-sm text-muted-foreground">
              {a.line}, {a.city} {a.postcode}
            </p>
          </div>
        ))}
      </div>

      <form
        className="mt-8 rounded-3xl border border-border bg-card p-7 shadow-soft"
        onSubmit={(e) => {
          e.preventDefault();
          setList((p) => [...p, { id: "a" + Date.now(), ...form }]);
          setForm({ label: "", line: "", city: "", postcode: "" });
          toast.success("Address saved");
        }}
      >
        <h2 className="font-display text-xl font-semibold">Add an address</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {(
            [
              ["label", "Label (Home, Work…)"],
              ["line", "Street address"],
              ["city", "City"],
              ["postcode", "Postcode"],
            ] as const
          ).map(([key, label]) => (
            <div key={key}>
              <Label className="mb-2 block">{label}</Label>
              <Input
                required
                value={form[key]}
                onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
              />
            </div>
          ))}
        </div>
        <Button type="submit" variant="hero" className="mt-6">
          <Plus /> Save address
        </Button>
      </form>
    </div>
  );
}
