import Header from '@/components/Header';
import HeroBraces from '@/components/braces/HeroBraces';
import Footer from '@/components/Footer';
import ModalProvider from '@/components/ModalProvider';

export default function BracesPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen">
        <Header />
        <HeroBraces />
        {/* Здесь можно добавить другие блоки */}
        <Footer />
      </main>
    </ModalProvider>
  );
}
