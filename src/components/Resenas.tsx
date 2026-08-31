import { Star } from "lucide-react";
import Reveal from "./Reveal";

const resenas = [
  {
    nombre: "Milagros R.",
    distrito: "San Miguel",
    texto:
      "Vinieron a medir el mismo día que llamé e instalaron en menos de una semana. La blackout de mi cuarto quedó perfecta.",
  },
  {
    nombre: "Jorge T.",
    distrito: "Los Olivos",
    texto:
      "Le pusimos roller screen a toda la oficina. Se nota la diferencia de calor y ya no encandila la pantalla.",
  },
  {
    nombre: "Carla V.",
    distrito: "Surco",
    texto:
      "Precio justo y buena asesoría — no sabía qué modelo elegir y me ayudaron a decidir según cada ambiente.",
  },
];

export default function Resenas() {
  return (
    <section className="py-20 md:py-28 bg-paper-dim">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-xl mb-14">
          <p className="text-orange font-bold tracking-[0.2em] text-xs uppercase mb-4">
            Reseñas
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight">
            Lo que dicen quienes ya instalaron
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resenas.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 100}>
              <div className="bg-paper rounded-2xl p-7 h-full shadow-lg shadow-ink/5">
                <div className="flex gap-1 text-orange mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-ink-soft leading-relaxed mb-6">
                  &ldquo;{r.texto}&rdquo;
                </p>
                <p className="text-ink font-semibold text-sm">
                  {r.nombre}
                  <span className="text-stone font-normal"> · {r.distrito}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
