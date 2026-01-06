import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Info from "@/components/Info";
import Benefits from "@/components/Benefits";
import Appointment from '@/components/Appointment';
import Safety from '@/components/Safety';
import Science from '@/components/Science';
import Bonuses from '@/components/Bonuses';
import Results from '@/components/Results';
import Reviews from '@/components/Reviews';
import Doctors from '@/components/Doctors';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Info />
      <FinalCTA />
      <Benefits />
      <Appointment />
      <Safety />
      <Science />
      <FinalCTA />
      <Bonuses />
      <Doctors />
      <Results />
      <Reviews />
      <FinalCTA />
      <Footer />
    </main>
  );
}
