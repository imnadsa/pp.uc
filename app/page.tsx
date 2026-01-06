import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Info from '@/components/Info';
import Benefits from '@/components/Benefits';
import Appointment from '@/components/Appointment';
import Safety from '@/components/Safety';
import Science from '@/components/Science';
import Bonuses from '@/components/Bonuses';
import Results from '@/components/Results';
import Reviews from '@/components/Reviews';
import Doctors from '@/components/Doctors';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ModalProvider from '@/components/ModalProvider';

export default function Home() {
  return (
    <ModalProvider>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Info />

        {/* Жёсткий CTA после объяснения системы */}
        <FinalCTA />

        <Benefits />
        <Appointment />
        <Safety />
        <Science />

        {/* Дожимающий CTA перед бонусами */}
        <FinalCTA />

        <Bonuses />
        <Doctors />
        <Results />
        <Reviews />

        {/* Финальный CTA перед футером */}
        <FinalCTA />

        <Footer />
      </main>
    </ModalProvider>
  );
}

