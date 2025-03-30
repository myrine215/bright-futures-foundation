
const VideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">See Our Impact</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Orphans are among the most vulnerable people in the world. God calls us to care for these children who are close to His heart.
        </p>
        
        <div className="rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto aspect-video">
          {/* Replace with your actual video or embed */}
          <div className="relative pb-[56.25%] h-0">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Bukal ng Buhay Foundation Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
