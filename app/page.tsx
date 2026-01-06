import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Info from "@/components/Info";
import Benefits from "@/components/Benefits";
import Appointment from '@/components/Appointment';
import Science from '@/components/Science';
import Results from '@/components/Results';
import Reviews from '@/components/Reviews';
import Savings from '@/components/Savings';
import Doctors from '@/components/Doctors';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Info />
      <Benefits />
      <Appointment />
      <Science />
      <Savings />
      <Doctors />
      <Results />
      <Reviews />
      <Footer />
    </main>
  );
}
