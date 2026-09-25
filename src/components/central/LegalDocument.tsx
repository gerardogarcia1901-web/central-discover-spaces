import { Link } from "@tanstack/react-router";

function linkedText(text: string) {
  if (text.includes("sección Contacto")) {
    const [before, after] = text.split("sección Contacto");
    return <>{before}<Link to="/contacto" className="underline underline-offset-4 hover:text-primary">sección Contacto</Link>{after}</>;
  }
  if (text.includes("Política de Privacidad de CENTRAL")) {
    const [before, after] = text.split("Política de Privacidad de CENTRAL");
    return <>{before}<Link to="/privacidad" className="underline underline-offset-4 hover:text-primary">Política de Privacidad de CENTRAL</Link>{after}</>;
  }
  return text;
}

export function LegalDocument({ content }: { content: string }) {
  const blocks = content.trim().split(/\r?\n\s*\r?\n/);

  return (
    <article className="mx-auto max-w-3xl text-foreground">
      {blocks.map((block, index) => {
        const lines = block.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
        if (/^\d+\. /.test(lines[0])) {
          return <h2 key={index} className="display-md mt-14 border-t border-border pt-8 text-2xl md:text-3xl">{lines[0]}</h2>;
        }
        if (lines[0] === "Aviso de cookies") {
          return <h3 key={index} className="mt-8 text-lg font-semibold">{lines[0]}</h3>;
        }
        if (lines.every((line) => line.startsWith("• "))) {
          return (
            <ul key={index} className="my-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground marker:text-primary">
              {lines.map((line) => <li key={line}>{linkedText(line.slice(2))}</li>)}
            </ul>
          );
        }
        return (
          <p key={index} className="mt-5 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
            {linkedText(block.trim())}
          </p>
        );
      })}
    </article>
  );
}