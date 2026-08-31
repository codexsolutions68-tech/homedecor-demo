"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { waLink } from "@/lib/site";
import { getProductos, subscribeProductos } from "@/lib/catalogStore";
import { ICONS, defaultProductos, type Producto } from "@/lib/productos";

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>(defaultProductos);

  useEffect(() => {
    setProductos(getProductos());
    return subscribeProductos(() => setProductos(getProductos()));
  }, []);

  return (
    <section id="productos" className="py-24 md:py-32 bg-paper-dim">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-orange font-bold tracking-[0.2em] text-xs uppercase mb-4">
            Catálogo
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink leading-tight mb-5">
            Cuatro tipos de roller, un solo objetivo
          </h2>
          <p className="text-stone text-lg">
            Cada ambiente necesita algo distinto: oscuridad total, control de
            privacidad, filtro solar o luz natural. Elegimos contigo el
            sistema correcto para tu espacio.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productos.map((p, i) => {
            const Icon = ICONS[p.icon] ?? ICONS.Sparkles;
            return (
              <Reveal key={p.id} delay={i * 90}>
                <article className="group relative rounded-2xl overflow-hidden shadow-lg shadow-ink/5 hover:shadow-xl hover:shadow-orange/10 transition-shadow duration-300">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={p.img}
                      alt={`${p.nombre} — ${p.resumen}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center">
                      <Icon size={18} strokeWidth={2} />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-start">
                      <h3 className="font-display text-lg font-semibold text-white mb-1">
                        {p.nombre}
                      </h3>
                      <p className="text-white/70 text-sm leading-snug mb-4">
                        {p.resumen}
                      </p>
                      <a
                        href={waLink(`Hola Home Decor, quisiera cotizar ${p.nombre}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-white font-bold text-xs border-b-2 border-orange pb-0.5 hover:text-orange hover:gap-2.5 transition-all"
                      >
                        Cotizar →
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
