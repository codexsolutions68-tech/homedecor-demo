import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/images/logo.webp"
          alt="Home Decor"
          width={140}
          height={45}
          className="h-9 w-auto brightness-0 invert opacity-90"
        />

        <p className="text-white/40 text-sm text-center">
          © {new Date().getFullYear()} {site.name}. {site.tagline}.
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
