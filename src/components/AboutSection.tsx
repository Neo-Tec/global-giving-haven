
import { Sparkles, Users, GraduationCap, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: <Heart className="h-10 w-10 text-zakat-primary" />,
      title: "Poverty Relief",
      description: "Providing essential support to those living in extreme poverty around the world."
    },
    {
      icon: <Users className="h-10 w-10 text-zakat-primary" />,
      title: "Community Development",
      description: "Building infrastructure and supporting local initiatives that strengthen communities."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-zakat-primary" />,
      title: "Education Access",
      description: "Creating opportunities for children and adults to receive quality education."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-zakat-primary" />,
      title: "Emergency Relief",
      description: "Responding quickly to natural disasters and humanitarian crises."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-zakat-light">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium tracking-wider text-zakat-primary uppercase bg-zakat-primary/10 rounded-full">
            Our Mission
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-zakat-dark">
            About GlobalZakat Foundation
          </h2>
          <div className="w-16 h-1 bg-zakat-primary mx-auto mt-6 mb-8 rounded"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            The GlobalZakat Foundation is dedicated to relieving poverty and suffering by 
            distributing Zakat and Sadaqah to those most in need around the world, in accordance 
            with Islamic principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl p-6 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-zakat-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-16 bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-zakat-primary">Our Impact Since 2010</h3>
              <p className="text-gray-600 mb-6">
                For over a decade, we've been working tirelessly to make a difference in the lives of
                millions of people across 30+ countries. Our focus on transparent and effective distribution
                of Zakat funds has allowed us to create lasting impact in communities worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-zakat-dark">5.2M+</p>
                  <p className="text-sm text-gray-500">People Helped</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-zakat-dark">30+</p>
                  <p className="text-sm text-gray-500">Countries</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-zakat-dark">$120M+</p>
                  <p className="text-sm text-gray-500">Donations Distributed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-zakat-dark">250+</p>
                  <p className="text-sm text-gray-500">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800" 
                alt="Children receiving aid"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
