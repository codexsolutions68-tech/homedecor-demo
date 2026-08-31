import Image from "next/image";
import Reveal from "./Reveal";

const bullets = [
  "Atención a nivel nacional",
  "Profesionales altamente capacitados",
  "Precios competitivos",
  "Atención personalizada",
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <p className="text-orange font-bold tracking-[0.2em] text-xs uppercase mb-4">
            Home Decor
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight mb-6">
            Nosotros
          </h2>
          <p className="text-stone text-lg leading-relaxed mb-4">
            HomeDecor se enorgullece en ser una empresa con más de 10 años de
            experiencia en la fabricación de cortinas enrollables para el
            hogar, proyectos y oficina.
          </p>
          <p className="text-stone text-lg leading-relaxed mb-8">
            Utilizamos insumos certificados, importados de fábricas
            seleccionadas en ferias internacionales a las que asistimos
            anualmente para actualizarnos en las tendencias del mercado.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-ink-soft font-medium">
                <span className="flex-none w-5 h-5 rounded-full bg-orange/15 text-orange flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
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
      </div>
    </section>
  );
}
