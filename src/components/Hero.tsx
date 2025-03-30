
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        {/* Green overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-charity-dark-green/80 to-charity-green/60"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Bringing Hope to Orphaned Children Across the Philippines
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            God doesn't call you to help all 153,000,000 orphans worldwide. But you can help one. And for that one child, you can change the world.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/donate">
              <button className="btn-secondary w-full sm:w-auto">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
