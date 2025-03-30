
import { Link } from 'react-router-dom';

const ImpactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-charity-green text-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Bukal ng Buhay: Reaching Orphans for 21 Years
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Bringing Joy & Purpose for the future. Since our founding, we've been committed to providing loving homes, quality education, and spiritual guidance to orphaned children across the Philippines.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-charity-light-green">1,200+</span>
                <span className="text-white/80">Children Helped</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-charity-light-green">24</span>
                <span className="text-white/80">Communities Served</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-charity-light-green">80%</span>
                <span className="text-white/80">College Graduation Rate</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-charity-light-green">100%</span>
                <span className="text-white/80">Donations to Children</span>
              </div>
            </div>
            <Link to="/about">
              <button className="bg-white text-charity-dark-green px-6 py-3 rounded-full font-medium hover:bg-charity-cream transition-colors duration-300">
                Learn Our Story
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Children smiling" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
