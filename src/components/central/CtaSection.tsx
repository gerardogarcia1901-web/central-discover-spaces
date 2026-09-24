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
    <section className="relative isolate overflow-hidden border-t border-border bg-sand text-foreground">
      {image && (
        <img src={image} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 size-full object-cover opacity-15" />
      )}
      <div className="container-central relative py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow text-muted-foreground">{eyebrow}</p>}
          <h2 className="display-lg mt-5">{title}</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-none eyebrow">
              <Link to={primary.to as never}>{primary.label}</Link>
            </Button>
            {secondary && (
              <Button asChild size="lg" variant="outline" className="rounded-none eyebrow">
                <Link to={secondary.to as never}>{secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
