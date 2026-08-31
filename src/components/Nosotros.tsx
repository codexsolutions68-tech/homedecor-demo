import Image from "next/image";
import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
  { to: 10, suffix: "+", label: "Años de experiencia" },
  { to: 4, suffix: "", label: "Tipos de cortina roller" },
  { to: 100, suffix: "%", label: "Insumos importados" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-paper">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-center">
        <Reveal delay={150} className="md:order-2">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-ink/10">
            <Image
              src="/images/about-roller.webp"
              alt="Instalación real de cortina roller Home Decor sobre sofá gris"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="md:order-1">
          <p className="text-orange font-bold tracking-[0.2em] text-xs uppercase mb-4">
            Home Decor
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight mb-4">
            Más de una década fabricando cortinas a medida
          </h2>
          <p className="text-stone text-lg leading-relaxed mb-10">
            Insumos importados, fábrica propia y un equipo técnico que mide,
            fabrica e instala.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-line pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl md:text-4xl font-semibold text-orange">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-stone text-sm mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
