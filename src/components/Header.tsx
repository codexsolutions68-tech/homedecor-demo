"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site, waLink } from "@/lib/site";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#trabajo", label: "Nuestro Trabajo" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home-hero");
    const onScroll = () => {
      if (!hero) {
        setScrolled(window.scrollY > 60);
        return;
      }
      setScrolled(hero.getBoundingClientRect().bottom <= 84);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-20 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Home Decor"
            width={168}
            height={54}
            priority
            className={`h-10 w-auto md:h-11 transition-all duration-500 ${
              solid ? "" : "brightness-0 invert drop-shadow-lg"
            }`}
          />
        </Link>

        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-500 ${
            solid ? "text-ink-soft" : "text-white"
          }`}
        >
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
          className={`md:hidden p-2 -mr-2 transition-colors ${solid ? "text-ink" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-line px-5 py-4 flex flex-col gap-4">
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
