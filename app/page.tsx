import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Info from "@/components/Info";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Info />
    </main>
  );
}
