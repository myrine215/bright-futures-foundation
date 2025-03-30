
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Donate = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="section-container">
        <h1 className="section-title">Donate</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl font-medium mb-4">
              Support the foundation, support the children
            </p>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Financial contributions, food, clothes, school supplies, and other essentials are always needed. 
              Individuals and businesses can also sponsor a child's education or daily needs. 
              Your generosity makes a difference—100% of your donation goes toward helping orphans thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-4 text-charity-dark-green">One-Time Donation</h3>
              <p className="text-gray-600 mb-6">
                Make an immediate impact with a one-time donation to help children in need.
              </p>
              <Button className="bg-charity-orange hover:bg-charity-dark-orange text-white rounded-full w-full">
                Donate Now
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-4 text-charity-dark-green">Monthly Giving</h3>
              <p className="text-gray-600 mb-6">
                Become a monthly donor and provide consistent support for our children.
              </p>
              <Button className="bg-charity-orange hover:bg-charity-dark-orange text-white rounded-full w-full">
                Become a Monthly Donor
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-4 text-charity-dark-green">Sponsor a Child</h3>
              <p className="text-gray-600 mb-6">
                Transform a child's life through education, healthcare, and daily support.
              </p>
              <Button className="bg-charity-orange hover:bg-charity-dark-orange text-white rounded-full w-full">
                Sponsor a Child
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-xl font-semibold mb-4 text-center text-charity-dark-green">Other Ways to Give</h3>
            
            <div className="space-y-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Donate Goods</h4>
                <p className="text-gray-600">
                  We welcome donations of food, clothing, school supplies, hygiene products, and other essentials. Please contact us for current needs and drop-off information.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Corporate Partnership</h4>
                <p className="text-gray-600">
                  Partner with us as a corporation to make a larger impact. We offer various partnership opportunities for businesses looking to fulfill their social responsibility.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Volunteer</h4>
                <p className="text-gray-600">
                  Share your time and talents with our children. We need volunteers for tutoring, mentoring, facility maintenance, and special events.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-charity-green hover:bg-charity-dark-green text-white rounded-full">
                Contact Us to Learn More
              </Button>
            </div>
          </div>
          
          <div className="bg-charity-light-green p-8 rounded-lg shadow-md text-center mb-8">
            <h3 className="text-xl font-semibold mb-4 text-charity-dark-green">Banking Information</h3>
            <p className="text-gray-700 mb-6">
              For direct bank transfers, please use the following information:
            </p>
            <div className="inline-block text-left">
              <p className="mb-2"><span className="font-semibold">Bank Name:</span> Example Bank</p>
              <p className="mb-2"><span className="font-semibold">Account Name:</span> Bukal ng Buhay Foundation Inc.</p>
              <p className="mb-2"><span className="font-semibold">Account Number:</span> 1234-5678-9012-3456</p>
              <p><span className="font-semibold">Branch:</span> Bulacan Branch</p>
            </div>
          </div>
          
          <div className="text-center italic text-gray-600 mb-8">
            "God doesn't call you to help all 153,000,000 orphans worldwide. But you can help one. And for that one child, you can change the world."
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
