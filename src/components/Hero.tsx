import Image from "next/image";
import { waLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/stock-hero-plants.jpeg"
          alt="Cortina roller con luz cálida de atardecer en un departamento en Lima"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_50%] animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
      </div>

      <div className="relative z-10 h-full mx-auto max-w-7xl px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-28 pt-32">
        <p className="text-orange-glow font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">
          Fabricantes desde hace más de 10 años
        </p>
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
          Cortinas y persianas hechas para tu espacio
        </h1>
        <p className="text-white/85 text-lg md:text-xl mt-6 max-w-xl">
          Diseño y atención personalizada en Lima. Visita técnica gratuita,
          insumos importados y precios competitivos.
        </p>

        <div className="flex flex-wrap gap-4 mt-9">
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

        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 text-white/80 text-sm">
          <span>✓ Atención a nivel nacional</span>
          <span>✓ Envíos rápidos en Lima</span>
          <span>✓ Precios competitivos</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  );
}
