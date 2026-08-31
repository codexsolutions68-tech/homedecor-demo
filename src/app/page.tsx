import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Features from "@/components/Features";
import Productos from "@/components/Productos";
import NuestroTrabajo from "@/components/NuestroTrabajo";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Features />
        <Productos />
        <NuestroTrabajo />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
