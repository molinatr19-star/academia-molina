import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Modalities, Master, Schedule, Plans, Gallery, Location } from "@/components/Sections";
import { Faq, ExitPopup, FloatingWhatsApp } from "@/components/Interactive";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Modalities />
        <Master />
        <Gallery />
        <Schedule />
        <Plans />
        <Faq />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ExitPopup />
    </>
  );
}
