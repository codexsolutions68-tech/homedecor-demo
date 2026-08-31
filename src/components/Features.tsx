import { ShieldCheck, Award, Truck } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Material de Calidad",
    desc: "Materiales de primera calidad, seleccionados para garantizar durabilidad y estilo en cada cortina.",
  },
  {
    icon: Award,
    title: "Experiencia y Trayectoria",
    desc: "Más de 10 años de experiencia y trayectoria nos respaldan en la creación de espacios únicos.",
  },
  {
    icon: Truck,
    title: "Envíos Rápidos",
    desc: "Envíos rápidos dentro de Lima, para que disfrutes de tus cortinas en tiempo récord.",
  },
];

export default function Features() {
  return (
    <section className="relative bg-ink py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid sm:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 120}>
            <div className="group border border-white/10 rounded-2xl p-8 h-full hover:border-orange/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-orange/15 text-orange flex items-center justify-center mb-6 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                <f.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="font-display text-white font-semibold text-xl mb-3">
                {f.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
