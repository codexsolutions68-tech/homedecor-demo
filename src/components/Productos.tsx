import Image from "next/image";
import { Moon, Layers, Sun, Leaf } from "lucide-react";
import Reveal from "./Reveal";
import { waLink } from "@/lib/site";

const productos = [
  {
    nombre: "Roller Blackout",
    icon: Moon,
    img: "/images/hero-2-clean.jpeg",
    resumen: "Oscurecimiento total a través de la tela.",
    desc: "Tela que no deja pasar la luz, ideal para dormitorios y salas de proyección. La estructura roller no cubre por completo los laterales, por lo que la oscuridad no es 100% absoluta, pero el bloqueo de luz a través de la tela sí lo es.",
  },
  {
    nombre: "Roller Duo",
    icon: Layers,
    img: "/images/hero-4-clean.jpeg",
    resumen: "Franjas alternadas de luz y privacidad.",
    desc: "Combina la suavidad del tejido con la funcionalidad de una persiana horizontal. Franjas de poliéster de alta calidad que se abren o cierran con una cadena continua, regulando luz y privacidad a tu gusto.",
  },
  {
    nombre: "Roller Screen",
    icon: Sun,
    img: "/images/hero-office-clean.jpeg",
    resumen: "Filtro solar con visibilidad hacia el exterior.",
    desc: "Tela micro perforada (70% PVC, 30% poliéster) con distintos porcentajes de apertura. A mayor cerrazón, mayor filtro UV: hasta 96% de protección solar sin perder la vista hacia afuera. Ideal para oficinas.",
  },
  {
    nombre: "Roller Natura",
    icon: Leaf,
    img: "/images/hero-3-clean.jpeg",
    resumen: "Luz natural sin perder privacidad.",
    desc: "Tela 100% poliéster translúcida: deja pasar la luz del día sin permitir visibilidad hacia dentro ni hacia fuera, de día o de noche. Perfecta para departamentos que buscan privacidad sin sacrificar luminosidad.",
  },
];

export default function Productos() {
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

        <div className="grid md:grid-cols-2 gap-8">
          {productos.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 100}>
              <article className="group bg-paper rounded-2xl overflow-hidden shadow-lg shadow-ink/5 h-full flex flex-col hover:shadow-xl hover:shadow-orange/10 transition-shadow duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={`${p.nombre} — ${p.resumen}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center">
                    <p.icon size={18} strokeWidth={2} />
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-semibold text-ink mb-1">
                    {p.nombre}
                  </h3>
                  <p className="text-orange font-semibold text-sm mb-3">
                    {p.resumen}
                  </p>
                  <p className="text-stone leading-relaxed mb-6 flex-1">
                    {p.desc}
                  </p>
                  <a
                    href={waLink(`Hola Home Decor, quisiera cotizar ${p.nombre}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 text-ink font-bold text-sm border-b-2 border-orange pb-0.5 hover:text-orange hover:gap-3 transition-all"
                  >
                    Cotiza este modelo →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
