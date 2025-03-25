
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ImageGallery from "@/components/ImageGallery";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import DonationCard from "@/components/DonationCard";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentProjects = [
    {
      title: "Clean Water Initiative",
      description: "Provide clean water to communities suffering from drought and contaminated water sources.",
      imageSrc: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600",
      raised: 35000,
      goal: 50000
    },
    {
      title: "Education For All",
      description: "Support education programs for underprivileged children to break the cycle of poverty.",
      imageSrc: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=600",
      raised: 75000,
      goal: 100000
    },
    {
      title: "Food Security Program",
      description: "Provide nutritious meals to families facing severe food insecurity and malnutrition.",
      imageSrc: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=600",
      raised: 42000,
      goal: 65000
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      
      {/* Current Projects Section */}
      <section className="py-20 bg-zakat-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-sm font-medium tracking-wider text-zakat-primary uppercase bg-zakat-primary/10 rounded-full">
              Current Initiatives
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-zakat-dark">
              Join Our Causes
            </h2>
            <div className="w-16 h-1 bg-zakat-primary mx-auto mt-6 mb-8 rounded"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Your donations directly support these ongoing projects, bringing hope and 
              relief to communities in dire need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <DonationCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                raised={project.raised}
                goal={project.goal}
              />
            ))}
          </div>
        </div>
      </section>
      
      <ImageGallery />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
