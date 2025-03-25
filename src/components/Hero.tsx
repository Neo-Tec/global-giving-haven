
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=2000"
          alt="Children in need"
          className={`w-full h-full object-cover transition-all duration-1000 ${isLoaded ? 'image-loaded' : 'image-loading'}`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-white uppercase bg-zakat-primary/80 rounded-full">
              Zakat • Sadaqah • Charity
            </span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Your Zakat Can Change <span className="text-zakat-secondary">Their World</span>
          </h1>

          <p className={`text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Help provide clean water, food, shelter, and education to those in need. 
            Your donation today can transform lives and communities.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-900 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button asChild size="lg" className="bg-zakat-primary hover:bg-zakat-dark text-white px-8 py-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <span>Donate Now</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:border-white/50 px-8 py-6 rounded-lg">
              <Link to="/#about" className="flex items-center gap-2">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-slide-up"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
