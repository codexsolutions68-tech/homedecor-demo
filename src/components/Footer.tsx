import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#trabajo", label: "Nuestro Trabajo" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid sm:grid-cols-3 gap-10 pb-12 border-b border-white/10">
        <div>
          <Image
            src="/images/logo.webp"
            alt="Home Decor"
            width={140}
            height={45}
            className="h-9 w-auto brightness-0 invert opacity-90 mb-4"
          />
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Fabricantes de cortinas roller y persianas en Lima. {site.tagline}.
          </p>
        </div>

        <div>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
            Navegación
          </p>
          <ul className="flex flex-col gap-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 hover:text-orange text-sm transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
            Contacto
          </p>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a href={`tel:+${site.phoneWhatsApp}`} className="text-white/70 hover:text-orange transition-colors">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-white/70 hover:text-orange transition-colors break-all">
                {site.email}
              </a>
            </li>
            <li className="text-white/70">{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-sm text-center">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Home Decor"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
            </svg>
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Home Decor"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
