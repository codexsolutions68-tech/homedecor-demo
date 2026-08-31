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
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
            De la medición a la instalación
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {pasos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 120}>
              <div className="h-full">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={p.img}
                    alt={p.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-orange text-white font-extrabold flex items-center justify-center text-sm">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-ink mb-2">
                  {p.titulo}
                </h3>
                <p className="text-stone leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
