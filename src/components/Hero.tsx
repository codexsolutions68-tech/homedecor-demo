"use client";

import { useRef } from "react";
import Image from "next/image";
import { useSectionProgress } from "@/lib/useSectionProgress";
import { ramp, fadeInOut } from "@/lib/utils";
import { waLink } from "@/lib/site";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);

  // Acto 1 (grande): el ambiente cálido de una sala real con roller.
  // Acto 2 (pequeño): el detalle de la tela, de cerca.
  // La transición nunca es un corte directo: pasa por un breve blackout
  // con el naranja de marca, como luces de escenario apagándose.
  const act1Opacity = 1 - ramp(progress, 0.3, 0.4);
  const act2Opacity = ramp(progress, 0.36, 0.46);
  const blackout = Math.min(ramp(progress, 0.3, 0.38), 1 - ramp(progress, 0.42, 0.5));

  const driftY = -progress * 40;

  const teaser1 = fadeInOut(progress, 0.04, 0.13, 0.25, 0.33);
  const teaser2 = fadeInOut(progress, 0.4, 0.48, 0.58, 0.66);

  const arrival = ramp(progress, 0.6, 0.82);
  const darken = ramp(progress, 0.5, 0.85) * 0.35;

  const scrollHintOpacity = 1 - ramp(progress, 0.02, 0.12);

  return (
    <section id="home-hero" ref={sectionRef} style={{ height: "300vh" }} className="relative">
      <div className="sticky top-0 h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink pt-20">
        <div
          className="absolute inset-0"
          style={{ transform: `translate3d(0, ${driftY}px, 0)` }}
        >
          <Image
            src="/images/stock-hero-plants.jpeg"
            alt="Cortina roller con luz cálida de atardecer en una sala de Lima"
            fill
            priority
            sizes="100vw"
            className="hero-grade animate-kenburns object-cover object-[65%_50%]"
            style={{ opacity: act1Opacity }}
          />
          <Image
            src="/images/stock-duo.jpeg"
            alt="Detalle de cortina roller duo con textura y luz filtrada"
            fill
            sizes="100vw"
            className="hero-grade animate-kenburns-slow object-cover"
            style={{ opacity: act2Opacity }}
          />
        </div>

        {/* Puente de blackout: tapa el corte entre las dos escenas. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: blackout,
            background:
              "radial-gradient(circle at 50% 55%, rgba(242,102,12,0.35), rgba(28,24,21,1) 72%)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 bg-ink"
          style={{ opacity: darken }}
        />

        <div className="relative z-10 h-full mx-auto max-w-7xl px-5 md:px-8 flex flex-col justify-center">
          {/* Frases de tránsito: mismo lugar en pantalla, se funden una en otra. */}
          <p
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-xl font-display italic text-white/90 text-3xl md:text-4xl font-medium leading-snug"
            style={{
              opacity: teaser1,
              transform: `translateY(calc(-50% + ${(1 - teaser1) * 12}px))`,
            }}
          >
            Diez años dando forma a la luz de tu hogar.
          </p>
          <p
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-xl font-display italic text-white/90 text-3xl md:text-4xl font-medium leading-snug"
            style={{
              opacity: teaser2,
              transform: `translateY(calc(-50% + ${(1 - teaser2) * 12}px))`,
            }}
          >
            Cada cortina, hecha a la medida de tu espacio.
          </p>

          {/* Llegada: el titular real y las llamadas a la acción. */}
          <div
            style={{
              opacity: arrival,
              transform: `translateY(${(1 - arrival) * 24}px)`,
            }}
          >
            <p className="text-orange-glow font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">
              Fabricantes desde hace más de 10 años
            </p>
            <h1 className="font-display text-white font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.08] max-w-3xl">
              Cortinas y persianas hechas para tu espacio
            </h1>
            <p className="text-white/85 text-lg md:text-xl mt-5 max-w-xl">
              Diseño y atención personalizada en Lima. Visita técnica
              gratuita, insumos importados y precios competitivos.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={waLink("Hola Home Decor, quisiera solicitar una visita técnica.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange-deep text-white font-bold px-7 py-4 rounded-full transition-colors shine"
              >
                Solicitar visita técnica
              </a>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-4 rounded-full backdrop-blur-sm transition-colors"
              >
                Ver catálogo
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 text-white/80 text-sm">
              <span>✓ Atención a nivel nacional</span>
              <span>✓ Envíos rápidos en Lima</span>
              <span>✓ Precios competitivos</span>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-float"
          style={{ opacity: scrollHintOpacity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/80" />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-orange to-orange-glow"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
