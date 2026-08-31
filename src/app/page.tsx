import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Features from "@/components/Features";
import Productos from "@/components/Productos";
import NuestroTrabajo from "@/components/NuestroTrabajo";
import Resenas from "@/components/Resenas";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import PromoDescuento from "@/components/PromoDescuento";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Productos />
        <Nosotros />
        <NuestroTrabajo />
        <Resenas />
        <Contacto />
      </main>
      <Footer />
      <PromoDescuento />
    </>
  );
}
