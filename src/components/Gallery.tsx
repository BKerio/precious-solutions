import { useInView } from '@/hooks/useInView';

const images = [
  {
    src: 'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Spa and Wellness Sanctuary',
    title: 'Sanctuary',
    size: 'lg:col-span-4 lg:row-span-2 aspect-[4/3] lg:aspect-auto',
  },
  {
    src: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    alt: 'Fine Dining Restaurant',
    title: 'Culinary Art',
    size: 'lg:col-span-8 aspect-[16/9] lg:aspect-auto',
  },
  {
    src: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    alt: 'Cozy Lounge Area',
    title: 'Lounge Comfort',
    size: 'lg:col-span-4 aspect-[4/3] lg:aspect-auto',
  },
  {
    src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    alt: 'Luxury Pool side view',
    title: 'Rooftop Escape',
    size: 'lg:col-span-4 aspect-[4/3] lg:aspect-auto',
  },
];

function Gallery() {
  const { ref: sectionRef, inView: sectionInView } = useInView(0.1);

  return (
    <section id="gallery" className="bg-white py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-1000 ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="section-label">Our Project Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-medium text-primary leading-[1.2]">
            Inside Our Projects
          </h2>
        </div>

        {/* Masonry/Mosaic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[620px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`gallery-item rounded-[4px] shadow-sm group ${img.size}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.20em] text-white/70 font-semibold mb-1 block">
                    Precious Solutions Experience
                  </span>
                  <h4 className="text-xl font-medium text-white">
                    {img.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
