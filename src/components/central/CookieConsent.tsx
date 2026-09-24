import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const STORAGE_KEY = "central-cookie-preferences-v1";
const OPEN_EVENT = "central:open-cookie-preferences";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
};

function savePreferences(analytics: boolean) {
  const preferences: CookiePreferences = { necessary: true, analytics };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  window.dispatchEvent(new CustomEvent("central:cookie-preferences-changed", { detail: preferences }));
}

export function openCookiePreferences() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const preferences = JSON.parse(saved) as Partial<CookiePreferences>;
        setAnalytics(preferences.analytics === true);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
        setBannerOpen(true);
      }
    } else {
      setBannerOpen(true);
    }
    setReady(true);

    const openSettings = () => setSettingsOpen(true);
    window.addEventListener(OPEN_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_EVENT, openSettings);
  }, []);

  const accept = (allowAnalytics: boolean) => {
    savePreferences(allowAnalytics);
    setAnalytics(allowAnalytics);
    setBannerOpen(false);
    setSettingsOpen(false);
  };

  if (!ready) return null;

  return (
    <>
      {bannerOpen && (
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
          className="fixed inset-x-0 bottom-0 z-[80] border-t border-border bg-background shadow-elevated"
        >
          <div className="container-central flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 id="cookie-title" className="display-md text-2xl">Tu privacidad importa.</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Usamos tecnologías necesarias para que el sitio funcione y, con tu permiso, herramientas de medición para entender su uso. Puedes aceptar todas, rechazar las no esenciales o configurar tus preferencias.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Button onClick={() => accept(true)} className="rounded-none eyebrow">Aceptar todas</Button>
              <Button onClick={() => accept(false)} variant="outline" className="rounded-none eyebrow">Rechazar no esenciales</Button>
              <Button onClick={() => setSettingsOpen(true)} variant="ghost" className="rounded-none eyebrow">Configurar preferencias</Button>
            </div>
          </div>
        </section>
      )}

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="max-w-xl rounded-none border-border p-0">
          <DialogHeader className="border-b border-border px-6 py-5">
            <DialogTitle className="display-md text-2xl">Preferencias de cookies</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-6">
            <div className="flex items-start gap-4 border-b border-border pb-6">
              <Checkbox id="cookies-necessary" checked disabled className="mt-1 rounded-none" />
              <div>
                <Label htmlFor="cookies-necessary">Cookies necesarias</Label>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Siempre activas. Son necesarias para el funcionamiento correcto del sitio.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Checkbox
                id="cookies-analytics"
                checked={analytics}
                onCheckedChange={(value) => setAnalytics(value === true)}
                className="mt-1 rounded-none"
              />
              <div>
                <Label htmlFor="cookies-analytics">Cookies de medición / analítica</Label>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Se utilizan para entender cómo se utiliza el sitio y mejorar la experiencia.
                </p>
              </div>
            </div>
            <Button onClick={() => accept(analytics)} className="w-full rounded-none eyebrow sm:w-auto">
              Guardar preferencias
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}