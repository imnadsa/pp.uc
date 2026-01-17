import Header from '@/components/Header';
import HeroBraces from '@/components/braces/HeroBraces';
import Footer from '@/components/Footer';
import Section2 from '@/components/braces/Section2';
import Section3 from '@/components/braces/Section3';
import Section4 from '@/components/braces/Section4';
import ModalProvider from '@/components/ModalProvider';

export default function BracesPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen">
        <Header />
        <HeroBraces />
        <Section2 />
        <Section3 />
        <Section4 >
        {/* Здесь можно добавить другие блоки */}
        <Footer />
      </main>
    </ModalProvider>
  );
}
