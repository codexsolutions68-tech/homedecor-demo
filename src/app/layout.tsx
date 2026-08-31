import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Home Decor | Fabricantes de Cortinas y Persianas en Lima",
    template: "%s | Home Decor",
  },
  description:
    "Fabricantes de cortinas roller y persianas en Lima con más de 10 años de experiencia. Roller Blackout, Duo, Screen y Natura. Visita técnica y cotización gratis por WhatsApp.",
  keywords: [
    "cortinas roller Lima",
    "persianas Lima",
    "cortinas para oficina",
    "roller blackout",
    "roller screen",
    "fabricantes de cortinas Peru",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Home Decor | Fabricantes de Cortinas y Persianas en Lima",
    description:
      "Cortinas roller a medida para hogar y oficina. Más de 10 años de experiencia, insumos importados y atención personalizada en Lima.",
    url: site.url,
    siteName: "Home Decor",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: site.name,
              image: `${site.url}/images/about-roller.webp`,
              telephone: `+${site.phoneWhatsApp}`,
              email: site.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address,
                addressLocality: "Lima",
                addressCountry: "PE",
              },
              areaServed: "Lima, Peru",
              url: site.url,
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
