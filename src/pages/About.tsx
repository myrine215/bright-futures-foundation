
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="section-container">
        <h1 className="section-title">About Us</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-8">
            Coming soon: About Bukal ng Buhay Foundation
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
