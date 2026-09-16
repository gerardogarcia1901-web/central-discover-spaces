import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Placeholder visual para fotografías pendientes de Grupo Galo. */
export function MediaPlaceholder({
  label = "Fotografía próximamente",
  tone = "sand",
  className,
}: {
  label?: string;
  tone?: "sand" | "ink";
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex size-full flex-col items-center justify-center gap-3 overflow-hidden px-6 text-center",
        tone === "ink" ? "bg-ink text-ink-foreground" : "bg-sand text-foreground",
        className,
      )}
    >
      <span className={cn("wordmark text-2xl md:text-3xl", tone === "ink" ? "opacity-30" : "opacity-20")}>CENTRAL</span>
      <span className={cn("eyebrow", tone === "ink" ? "text-ink-foreground/50" : "text-muted-foreground")}>{label}</span>
    </div>
  );
}

/** Bloque para módulos sin contenido definitivo todavía. */
export function ContentPlaceholder({
  eyebrow,
  title,
  description,
  items,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items?: readonly string[];
  children?: ReactNode;
}) {
  return (
    <div className="border border-dashed border-border p-8 md:p-12">
      {eyebrow && <p className="eyebrow text-muted-foreground">{eyebrow}</p>}
      <p className="display-md mt-4 text-2xl md:text-3xl">{title}</p>
      {description && <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{description}</p>}
      {items && (
        <ul className="mt-8 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item} className="border-t border-border pt-4 text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
