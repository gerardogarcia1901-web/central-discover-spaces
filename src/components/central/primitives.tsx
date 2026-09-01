import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { LocationStatus } from "@/data/types";
import { statusLabels } from "@/data/locations";

export function Section({
  children,
  className,
  tone = "default",
  as: Tag = "section",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "ink" | "sand";
  as?: "section" | "div";
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32",
        tone === "ink" && "bg-ink text-ink-foreground",
        tone === "sand" && "bg-sand",
        className,
      )}
    >
      <div className="container-central">{children}</div>
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow text-muted-foreground">{eyebrow}</p>}
        <h2 className="display-md mt-4">{title}</h2>
        {description && <p className="mt-5 text-base leading-relaxed opacity-70 md:text-lg">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function StatusBadge({ status, className }: { status: LocationStatus; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-current/25 px-3 py-1 eyebrow",
        status === "operativo" ? "text-emerald-700" : "text-highlight",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden />
      {statusLabels[status]}
    </span>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string; params?: Record<string, string> }[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      <Link to="/" className="hover:text-foreground">
        Inicio
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <ChevronRight className="size-3" aria-hidden />
          {item.to ? (
            <Link to={item.to} params={item.params as never} className="hover:text-foreground">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  breadcrumbs?: { label: string; to?: string; params?: Record<string, string> }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 size-full object-cover opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" aria-hidden />
        </>
      )}
      <div className="container-central relative py-20 md:py-28 lg:py-36">
        {breadcrumbs && (
          <div className="mb-10 [&_a]:text-ink-foreground/60 [&_a:hover]:text-ink-foreground [&_span]:text-ink-foreground/80">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {eyebrow && <p className="eyebrow text-ink-foreground/50">{eyebrow}</p>}
        <h1 className="display-lg mt-5 max-w-5xl">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/70 md:text-lg">{description}</p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
