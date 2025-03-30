
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="section-container">
        <h1 className="section-title">Contact Us</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-10">
            <p className="text-xl md:text-2xl font-medium mb-4">Please contact us any time!</p>
            <p className="text-lg md:text-xl mb-6">We would love to hear from you!</p>
            <p className="text-gray-600 mb-8">For general inquiries, donations, and volunteer opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Mail className="text-charity-orange mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <a href="mailto:menozaangelita693@gmail.com" className="text-charity-green hover:text-charity-dark-green transition-colors">
                    menozaangelita693@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Phone className="text-charity-orange mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <a href="tel:+639178221322" className="text-charity-green hover:text-charity-dark-green transition-colors">
                    0917-822-1322
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Facebook className="text-charity-orange mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-charity-green hover:text-charity-dark-green transition-colors">
                    Bukal ng Buhay Foundation
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <MapPin className="text-charity-orange mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                  <p className="text-gray-700">
                    #403, Brgy Malamig, Bustos, Bulacan, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md mb-8">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15420.854501639616!2d120.86806752431793!3d14.96916337972961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396b0e7e7b3fd23%3A0x5c7c7d1411ddd4ab!2sBrgy.%20Malamig%2C%20Bustos%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1699414841957!5m2!1sen!2sph" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bukal ng Buhay Foundation Location"
            ></iframe>
          </div>
        </div>
        
        <div className="text-center italic text-gray-600 mb-8">
          Bringing Joy & Purpose for the future.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
