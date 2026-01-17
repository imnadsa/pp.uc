import HeroBraces from '@/components/braces/HeroBraces';
import Footer from '@/components/Footer2';
import Section2 from '@/components/braces/Section2';
import Section3 from '@/components/braces/Section3';
import Section4 from '@/components/braces/Section4';
import MultiStepForm from '@/components/braces/MultiStepForm';
import ModalProvider from '@/components/ModalProvider';

export default function BracesPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen">
        <HeroBraces />
        <Section2 />
        <Section3 />
        <Section4 />
        <MultiStepForm />
        {/* Здесь можно добавить другие блоки */}
        <Footer2 />
      </main>
    </ModalProvider>
  );
}
