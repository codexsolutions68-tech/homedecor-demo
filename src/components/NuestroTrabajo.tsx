import Image from "next/image";
import Reveal from "./Reveal";

const pasos = [
  {
    img: "/images/project-1.webp",
    titulo: "Visita técnica y medición",
    desc: "Vamos a tu casa u oficina, medimos cada ventana y te asesoramos sobre el sistema ideal.",
  },
  {
    img: "/images/project-2.webp",
    titulo: "Fabricación e instalación",
    desc: "Fabricamos a medida con insumos importados y coordinamos la instalación por nuestro equipo técnico.",
  },
  {
    img: "/images/project-3.webp",
    titulo: "Mantenimiento y garantía",
    desc: "Acompañamiento post-venta: ajustes, limpieza y garantía sobre el sistema instalado.",
  },
];

export default function NuestroTrabajo() {
  return (
    <section id="trabajo" className="py-24 md:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-orange font-bold tracking-[0.2em] text-xs uppercase mb-4">
            Cómo trabajamos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink leading-tight">
            De la medición a la instalación
          </h2>
        </Reveal>

        <div className="relative grid md:grid-cols-3 gap-10 md:gap-8">
          <div className="hidden md:block absolute top-[38px] left-[16.6%] right-[16.6%] h-px bg-line" />

          {pasos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 120}>
              <div className="h-full relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative z-10 w-9 h-9 rounded-full bg-orange text-white font-display font-semibold flex items-center justify-center text-sm shrink-0">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {p.titulo}
                  </h3>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={p.img}
                    alt={p.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-stone leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
