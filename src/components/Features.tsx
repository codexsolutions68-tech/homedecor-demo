import Reveal from "./Reveal";

const features = [
  {
    title: "Material de Calidad",
    desc: "Materiales de primera calidad, seleccionados para garantizar durabilidad y estilo en cada cortina.",
  },
  {
    title: "Experiencia y Trayectoria",
    desc: "Más de 10 años de experiencia y trayectoria nos respaldan en la creación de espacios únicos.",
  },
  {
    title: "Envíos Rápidos",
    desc: "Envíos rápidos dentro de Lima, para que disfrutes de tus cortinas en tiempo récord.",
  },
];

export default function Features() {
  return (
    <section className="bg-ink py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid sm:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 120}>
            <div className="border border-white/10 rounded-2xl p-8 h-full hover:border-orange/40 transition-colors">
              <div className="w-11 h-11 rounded-full bg-orange/15 text-orange flex items-center justify-center font-extrabold text-lg mb-5">
                {i + 1}
              </div>
              <h3 className="font-display text-white font-semibold text-xl mb-3">{f.title}</h3>
              <p className="text-white/60 leading-relaxed">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
