"use client";

import { useEffect, useRef, useState } from "react";
import { useSectionProgress } from "@/lib/useSectionProgress";
import { ramp, fadeInOut } from "@/lib/utils";
import { waLink } from "@/lib/site";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progress = useSectionProgress(sectionRef);
  // Duración real del clip (~10.005s); se ajusta sola si el navegador
  // reporta un valor distinto una vez cargados los metadatos.
  const [duration, setDuration] = useState(10.005);

  // El video es una sola toma continua (casa -> ventana -> cortina),
  // así que el scroll simplemente "restaura" el tiempo del video en vez
  // de cruzar dos fotos como antes.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = progress * duration;
  }, [progress, duration]);

  const teaser1 = fadeInOut(progress, 0.03, 0.1, 0.22, 0.3);
  const teaser2 = fadeInOut(progress, 0.42, 0.5, 0.6, 0.68);

  const arrival = ramp(progress, 0.74, 0.93);
  const darken = ramp(progress, 0.6, 0.93) * 0.4;

  const scrollHintOpacity = 1 - ramp(progress, 0.02, 0.1);

  return (
    <section id="home-hero" ref={sectionRef} style={{ height: "320vh" }} className="relative">
      <div className="sticky top-0 h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink pt-20">
        <video
          ref={videoRef}
          src="/video/hero.mp4"
          poster="/video/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/15 to-transparent" />
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
