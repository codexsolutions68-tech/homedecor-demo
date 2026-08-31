import { Phone, Mail, MapPin } from "lucide-react";
import { site, waLink } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contacto() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-ink overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-orange/10 blur-3xl" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="text-orange font-bold tracking-[0.2em] text-xs uppercase mb-4">
            Cotiza gratis
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
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
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 mt-16 text-left">
          <Reveal delay={0}>
            <div className="group border border-white/10 rounded-2xl p-6 h-full hover:border-orange/40 hover:-translate-y-1 transition-all duration-300">
              <Phone className="text-orange mb-4" size={22} />
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                Teléfono / WhatsApp
              </p>
              <a href={`tel:+${site.phoneWhatsApp}`} className="text-white font-semibold">
                {site.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="group border border-white/10 rounded-2xl p-6 h-full hover:border-orange/40 hover:-translate-y-1 transition-all duration-300">
              <Mail className="text-orange mb-4" size={22} />
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                Correo
              </p>
              <a href={`mailto:${site.email}`} className="text-white font-semibold break-all">
                {site.email}
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="group border border-white/10 rounded-2xl p-6 h-full hover:border-orange/40 hover:-translate-y-1 transition-all duration-300">
              <MapPin className="text-orange mb-4" size={22} />
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
                Dirección
              </p>
              <p className="text-white font-semibold">{site.address}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 h-72 md:h-96">
            <iframe
              title="Ubicación de Home Decor"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
              className="w-full h-full grayscale-[0.3] contrast-[1.1] invert-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
