
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="section-container">
        <h1 className="section-title">About Us</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Mission & Vision Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="section-subtitle text-center mb-4">MISSION</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is to empower and guide children in their holistic development. We are committed to nurturing their physical, emotional, and intellectual growth while fostering a deep awareness of God's love and providence in their lives. Through dedicated care and mentorship, we aim to instill in them the intrinsic value of life and to assist in the formation of an upright conscience. Our holistic approach seeks to lay the foundation for resilient, compassionate individuals who are attuned to their potential and the positive impact they can make in the world.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="section-subtitle text-center mb-4">VISION</h2>
                <p className="text-gray-700 leading-relaxed">
                  In our vision, we see a future where holistically formed children, thriving in all aspects of their being, stand as living testaments to productivity and resilience. They embody the hope of the future generation, equipped with the skills, values, and determination to contribute positively to society. At Bukal ng Buhay Foundation Inc., we aspire to foster a legacy where each child's holistic development serves as a beacon, illuminating a path toward a brighter and more promising future for generations to come.
                </p>
              </div>
            </div>
          </section>
          
          {/* Founder Section */}
          <section className="mb-16">
            <h2 className="section-subtitle text-center mb-8">Our Founder</h2>
            <div className="flex flex-col md:flex-row items-center mb-10 bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                <div className="bg-charity-light-green h-64 w-64 mx-auto rounded-full overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Nanay Letty" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mt-4">Nanay Letty</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The mission of Bukal ng Buhay Foundation, Inc., began when a former nun, Angelita Mendoza, known as Nanay Letty, heard Jesus' teaching "If you love me, feed my lambs" during a church service in San Nicolas Parish in Quezon City. Three street children approached her afterward, begging for money but instead, she brought them to her home to feed and care for them.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Later, Letty discovered that the children were living in a squalid area and unable to attend school due to extreme poverty. She visited their families and offered to send the children to school and provide them with food. Months later, more children came to Bukal ng Buhay, including a widowed with five children struggling to feed them.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Eventually, Letty and other ex-nuns prayed for guidance and established the Bukal ng Buhay Foundation Inc., with support from friends and family. In 2004, they built Bahay Kalinga for the children, which was blessed by the priest in 2005. Bukal ng Buhay now provides residential homes and education for abandoned, indigent, and neglected children.
                </p>
              </div>
            </div>
          </section>
          
          {/* Wards Section */}
          <section className="mb-16">
            <h2 className="section-subtitle text-center mb-8">Our Wards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[1, 2, 3].map((ward) => (
                <div key={ward} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-charity-light-green h-48 w-48 mx-auto rounded-full overflow-hidden mb-6">
                    <img 
                      src="/placeholder.svg" 
                      alt={`Ward ${ward}`} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ward</h3>
                  <p className="text-gray-700">Name</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed text-center">
                Our goal at Bukal ng Buhay Foundation Inc. is to educate and cultivate productive, self-reliant children who embody respect for God, for others, and for themselves. We strive to empower them to realize their fullest potential, fostering a holistic development that enables them to attain the fullness of life. Through comprehensive education, mentorship, and a values-driven approach, we aim to shape resilient individuals who contribute positively to society and embrace a meaningful, purposeful existence.
              </p>
            </div>
          </section>
          
          <div className="text-center italic text-gray-600 mb-8">
            Bringing Joy & Purpose for the future.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
