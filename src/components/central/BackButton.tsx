import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Botón "Regresar": vuelve al historial anterior cuando existe,
 * y si no, navega al listado de origen (fallback).
 */
export function BackButton({
  fallbackTo,
  label = "Regresar",
  className,
}: {
  fallbackTo: string;
  label?: string;
  className?: string;
}) {
  const router = useRouter();

  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const classes = cn(
    "inline-flex items-center gap-2 border border-current/25 px-4 py-2 eyebrow transition-colors hover:border-current",
    className,
  );

  if (!canGoBack) {
    return (
      <Link to={fallbackTo as never} className={classes}>
        <ArrowLeft className="size-4" aria-hidden />
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={() => router.history.back()} className={classes}>
      <ArrowLeft className="size-4" aria-hidden />
      {label}
    </button>
  );
}
