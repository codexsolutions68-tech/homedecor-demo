"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site, waLink } from "@/lib/site";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#trabajo", label: "Nuestro Trabajo" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-20 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Home Decor"
            width={168}
            height={54}
            priority
            className="h-10 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-ink-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-orange transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink("Hola Home Decor, quisiera cotizar una visita técnica.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-orange hover:bg-orange-deep text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shine"
        >
          Cotizar por WhatsApp
        </a>

        <button
          aria-label="Abrir menú"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 h-0.5 bg-ink mb-1.5" />
          <div className="w-6 h-0.5 bg-ink mb-1.5" />
          <div className="w-6 h-0.5 bg-ink" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-black/5 px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ink-soft font-semibold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Hola Home Decor, quisiera cotizar una visita técnica.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-orange text-white text-sm font-bold px-5 py-3 rounded-full"
          >
            Cotizar por WhatsApp
          </a>
          <a href={`tel:+${site.phoneWhatsApp}`} className="text-sm text-stone">
            {site.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
