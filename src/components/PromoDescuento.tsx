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

function parts(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    d: String(Math.floor(total / 86400)).padStart(2, "0"),
    h: String(Math.floor((total % 86400) / 3600)).padStart(2, "0"),
    m: String(Math.floor((total % 3600) / 60)).padStart(2, "0"),
    s: String(total % 60).padStart(2, "0"),
  };
}

export default function PromoDescuento() {
  const [deadline, setDeadline] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [drawIn, setDrawIn] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(DISMISS_KEY)) return;
    const target = document.getElementById("productos");
    if (!target) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDeadline(getDeadline());
            setNow(Date.now());
            setOpen(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      setDrawIn(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const id = setInterval(() => setNow(Date.now()), 1000);
    const drawTimer = setTimeout(() => setDrawIn(true), 50);
    return () => {
      document.body.style.overflow = "";
      clearInterval(id);
      clearTimeout(drawTimer);
    };
  }, [open]);

  useEffect(() => {
    if (deadline && now && now >= deadline) {
      setDeadline(getDeadline());
    }
  }, [now, deadline]);

  function close() {
    setOpen(false);
    window.sessionStorage.setItem(DISMISS_KEY, "1");
  }

  if (!open || !deadline || !now) return null;
  const t = parts(deadline - now);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={close}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between gap-3 px-4 py-3"
          style={{ backgroundColor: "#ff4b00" }}
        >
          <p className="text-white text-[11px] sm:text-sm font-bold tracking-wide whitespace-nowrap overflow-x-auto">
            VENCE EN :{" "}
            <span className="tabular-nums">
              {t.d} DIAS : {t.h} HORAS : {t.m} MINUTOS : {t.s} SEGUNDOS
            </span>
          </p>
          <button
            onClick={close}
            aria-label="Cerrar promoción"
            className="shrink-0 w-6 h-6 flex items-center justify-center bg-white border border-white/70 rounded text-black hover:opacity-80 transition-opacity"
          >
            <X size={14} strokeWidth={3} />
          </button>
        </div>

        <div className="relative py-14 px-8 text-center overflow-hidden">
          <div
            className="absolute -left-8 top-8 w-32 h-14 bg-[#111] rounded-full transition-transform duration-700 ease-out"
            style={{
              transformOrigin: "left center",
              transform: `rotate(-45deg) scaleX(${drawIn ? 1 : 0})`,
            }}
          />
          <div
            className="absolute -right-8 bottom-8 w-32 h-14 bg-[#111] rounded-full transition-transform duration-700 ease-out"
            style={{
              transformOrigin: "right center",
              transform: `rotate(-45deg) scaleX(${drawIn ? 1 : 0})`,
              transitionDelay: "150ms",
            }}
          />

          <h3 className="relative font-extrabold text-3xl sm:text-4xl text-[#111] leading-tight mb-8">
            20% Dscto.
            <br />
            En Todo Tipo De Rollers
          </h3>

          <a
            href={waLink("Hola Home Decor, quiero aprovechar el 20% de descuento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#ff4b00" }}
          >
            » INFORMES AQUI
          </a>

          <p className="relative mt-6 text-xs tracking-[0.15em] text-stone">
            — VÁLIDO PARA LAVADO Y MANTENIMIENTO —
          </p>
        </div>
      </div>
    </div>
  );
}
