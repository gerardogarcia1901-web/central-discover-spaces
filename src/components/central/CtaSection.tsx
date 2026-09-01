import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CtaSection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      {image && (
        <>
          <img src={image} alt="" aria-hidden loading="lazy" className="absolute inset-0 size-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" aria-hidden />
        </>
      )}
      <div className="container-central relative py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow text-ink-foreground/50">{eyebrow}</p>}
          <h2 className="display-lg mt-5">{title}</h2>
          <p className="mt-6 text-base leading-relaxed text-ink-foreground/70 md:text-lg">{description}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="rounded-none eyebrow">
              <Link to={primary.to as never}>{primary.label}</Link>
            </Button>
            {secondary && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-white/30 bg-transparent eyebrow text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
              >
                <Link to={secondary.to as never}>{secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
