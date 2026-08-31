import { site, waLink } from "@/lib/site";

export default function Contacto() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-ink overflow-hidden">
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-orange/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 text-center">
        <p className="text-orange font-bold tracking-[0.2em] text-xs uppercase mb-4">
          Cotiza gratis
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          Pide tu visita técnica ahora
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
          Escríbenos por WhatsApp, cuéntanos las medidas de tus ventanas y te
          respondemos con una cotización el mismo día.
        </p>

        <a
          href={waLink("Hola Home Decor, quisiera solicitar una visita técnica.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-orange hover:bg-orange-deep text-white font-bold text-lg px-9 py-5 rounded-full transition-colors shine"
        >
          Escribir por WhatsApp — {site.phoneDisplay}
        </a>

        <div className="grid sm:grid-cols-3 gap-6 mt-16 text-left">
          <div className="border border-white/10 rounded-2xl p-6">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
              Teléfono / WhatsApp
            </p>
            <a href={`tel:+${site.phoneWhatsApp}`} className="text-white font-semibold">
              {site.phoneDisplay}
            </a>
          </div>
          <div className="border border-white/10 rounded-2xl p-6">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
              Correo
            </p>
            <a href={`mailto:${site.email}`} className="text-white font-semibold break-all">
              {site.email}
            </a>
          </div>
          <div className="border border-white/10 rounded-2xl p-6">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
              Dirección
            </p>
            <p className="text-white font-semibold">{site.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
