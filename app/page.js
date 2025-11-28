import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Essentials from '@/components/Essentials';
import PromoGrid from '@/components/PromoGrid';
import ProductSection from '@/components/ProductSection';
import BrandsSection from '@/components/BrandsSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import LogoRow from '@/components/LogoRow';
import Gallery from '@/components/Gallery';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Essentials />
      <PromoGrid />
      <BrandsSection />
      <ProductSection />
      <AboutSection />
      <StatsSection />
      <LogoRow />
      <Gallery />
      <Community />
      <Footer />
    </main>
  );
}
