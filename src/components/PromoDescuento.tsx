"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { waLink } from "@/lib/site";

const DEADLINE_KEY = "homedecor_promo_deadline";
const DISMISS_KEY = "homedecor_promo_dismissed";
const CYCLE_HOURS = 48;

function getDeadline(): number {
  const stored = Number(window.localStorage.getItem(DEADLINE_KEY));
  if (stored && stored > Date.now()) return stored;
  const next = Date.now() + CYCLE_HOURS * 60 * 60 * 1000;
  window.localStorage.setItem(DEADLINE_KEY, String(next));
  return next;
}

function formatRemaining(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(total / 3600)).padStart(2, "0");
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export default function PromoDescuento() {
  const [deadline, setDeadline] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (window.sessionStorage.getItem(DISMISS_KEY)) return;
    setDeadline(getDeadline());
    setNow(Date.now());
    setDismissed(false);
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (deadline && now && now >= deadline) {
      setDeadline(getDeadline());
    }
  }, [now, deadline]);

  function close() {
    setDismissed(true);
    window.sessionStorage.setItem(DISMISS_KEY, "1");
  }

  if (dismissed || !deadline || !now) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-3 bg-ink text-white rounded-2xl shadow-2xl shadow-ink/30 pl-4 pr-3 py-3 max-w-[calc(100vw-2rem)]">
      <div>
        <p className="text-orange font-bold text-xs uppercase tracking-wider mb-0.5 leading-tight">
          20% dcto. en tu primera cotización
        </p>
        <p className="font-display text-lg font-semibold tabular-nums">
          {formatRemaining(deadline - now)}
        </p>
      </div>
      <a
        href={waLink("Hola Home Decor, quiero aprovechar el 20% de descuento.")}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange hover:bg-orange-deep text-white text-sm font-bold px-4 py-2 rounded-full transition-colors whitespace-nowrap shrink-0"
      >
        Cotizar
      </a>
      <button
        onClick={close}
        aria-label="Cerrar promoción"
        className="text-white/50 hover:text-white transition-colors shrink-0"
      >
        <X size={16} />
      </button>
    </div>
  );
}
