import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Gift } from "lucide-react";

/** Shared shell for login / register / password pages. */
export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden gradient-soft">
      <div className="absolute inset-0 gradient-glow" aria-hidden />
      <div className="relative mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-4 py-16">
        <Link to="/" className="mx-auto flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
            <Gift className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-bold">Gifty</span>
        </Link>
        <div className="mt-8 rounded-[2rem] border border-border bg-card p-8 shadow-card">
          <h1 className="font-display text-3xl font-bold">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-7">{children}</div>
        </div>
        {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
      </div>
    </div>
  );
}
