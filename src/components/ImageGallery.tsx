
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const images = [
  {
    url: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=1200",
    caption: "Providing water to drought-affected regions"
  },
  {
    url: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=1200",
    caption: "Education support for children in remote villages"
  },
  {
    url: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=1200",
    caption: "Community development programs"
  },
  {
    url: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=1200",
    caption: "Distributing food to families in need"
  },
  {
    url: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1200",
    caption: "Livestock distribution to support sustainable living"
  }
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <section id="projects" ref={galleryRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-sm font-medium tracking-wider text-zakat-primary uppercase bg-zakat-primary/10 rounded-full">
            Our Projects
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-zakat-dark">
            Making a Difference
          </h2>
          <div className="w-16 h-1 bg-zakat-primary mx-auto mt-6 mb-8 rounded"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            See the impact of your donations through our humanitarian projects worldwide. 
            Every contribution helps transform lives and communities.
          </p>
        </div>

        <div 
          className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ height: "600px" }}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          {images.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.caption}
                className={`w-full h-full object-cover transition-transform duration-4000 ${
                  currentIndex === index ? 'scale-105' : 'scale-100'
                }`}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          ))}
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {images[currentIndex].caption}
              </h3>
              <div className="w-20 h-1 bg-zakat-secondary rounded mb-6"></div>
            </div>
          </div>
          
          <div className="absolute right-6 bottom-6 flex space-x-2 z-20">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white rounded-full h-12 w-12"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white rounded-full h-12 w-12"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsLoading(true);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-white w-6' 
                    : 'bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((index) => {
            const imageIndex = (currentIndex + index) % images.length;
            return (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  height: "300px", 
                  transitionDelay: `${index * 200}ms` 
                }}
              >
                <img
                  src={images[imageIndex].url}
                  alt={images[imageIndex].caption}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">{images[imageIndex].caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
