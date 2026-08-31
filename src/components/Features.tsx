import { CircleCheck, ShieldCheck, Truck } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: CircleCheck,
    title: "Material de Calidad",
    desc: "Materiales de primera calidad, seleccionados para garantizar durabilidad y estilo en cada cortina.",
  },
  {
    icon: ShieldCheck,
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
    <section className="py-10 md:py-16 px-4 md:px-8" style={{ backgroundColor: "#ff4b00" }}>
      <Reveal className="mx-auto max-w-[1360px] border-2 border-white p-8 sm:p-12 lg:p-[68px]">
        <p className="text-center font-bold text-sm text-[#0d1214] mb-3">
          Beneficios
        </p>
        <h2 className="text-center font-extrabold uppercase text-2xl md:text-4xl text-[#fbfbfb] mb-14 leading-tight">
          Somos Fabricantes de Cortinas Roller
        </h2>

        <div className="grid sm:grid-cols-3 gap-12">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <f.icon size={50} strokeWidth={1.75} className="text-[#0d1214] mb-4" />
              <h3 className="font-bold uppercase text-[#0d1214] mb-3">
                {f.title}
              </h3>
              <p className="text-white/95 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
