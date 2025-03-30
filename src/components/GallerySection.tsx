
const GallerySection = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1517727896326-57b73c67cf0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Children learning in classroom'
    },
    {
      url: 'https://images.unsplash.com/photo-1499031669402-b145e8f84ed8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80',
      alt: 'Children playing outside'
    },
    {
      url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Volunteer helping child with homework'
    },
    {
      url: 'https://images.unsplash.com/photo-1527521287324-b67083a4c179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Children smiling'
    },
    {
      url: 'https://images.unsplash.com/photo-1617251185850-5d298b8faee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80',
      alt: 'Building new facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Community event'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Our Gallery</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Together, we can give orphaned children a brighter future. See the impact of your support through these glimpses of our work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-xl card-shadow group h-64"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/gallery" className="btn-outline">
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
