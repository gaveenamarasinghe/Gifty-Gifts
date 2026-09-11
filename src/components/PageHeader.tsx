import type { ReactNode } from "react";

/** Shared page header used by every inner page for consistent rhythm. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden gradient-soft">
      <div className="absolute inset-0 gradient-glow" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

/** Section heading for homepage rails. */
export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        )}
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}

/** Standard page shell: constrained width + vertical rhythm. */
export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 ${className}`}>{children}</section>
  );
}
