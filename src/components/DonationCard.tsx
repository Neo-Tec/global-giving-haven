
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

interface DonationCardProps {
  title: string;
  description: string;
  imageSrc: string;
  raised: number;
  goal: number;
}

const DonationCard = ({ title, description, imageSrc, raised, goal }: DonationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div 
      className="rounded-xl overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img 
          src={imageSrc} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="w-full bg-white/30 rounded-full h-1.5">
            <div 
              className="bg-zakat-secondary h-1.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center mt-2 text-white text-sm">
            <span>Raised: ${raised.toLocaleString()}</span>
            <span>Goal: ${goal.toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-zakat-dark">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Button asChild className="w-full bg-zakat-primary hover:bg-zakat-dark text-white">
          <Link to="/donate" className="flex items-center justify-center gap-2">
            <Heart className="h-4 w-4" />
            <span>Donate Now</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DonationCard;
