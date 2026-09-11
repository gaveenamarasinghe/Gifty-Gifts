import type { ReactNode } from "react";
import { PageHeader, Section } from "@/components/PageHeader";

export type PolicySection = { heading: string; body: string };

/** Shared layout for the four legal/policy pages. */
export function PolicyPage({
  title,
  intro,
  sections,
  children,
}: {
  title: string;
  intro: string;
  sections: PolicySection[];
  children?: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} subtitle={intro} />
      <Section className="!max-w-3xl">
        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-xl font-semibold">{s.heading}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
          {children}
        </div>
        <p className="mt-12 text-xs text-muted-foreground">
          Last updated {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}.
        </p>
      </Section>
    </>
  );
}
