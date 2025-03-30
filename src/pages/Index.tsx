
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MissionSection from '@/components/MissionSection';
import VideoSection from '@/components/VideoSection';
import GallerySection from '@/components/GallerySection';
import ImpactSection from '@/components/ImpactSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MissionSection />
      <VideoSection />
      <GallerySection />
      <ImpactSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
