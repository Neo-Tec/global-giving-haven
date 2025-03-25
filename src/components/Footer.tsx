
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-zakat-dark text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Pre-footer CTA */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zakat-secondary/50 to-transparent"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Your Zakat and charity donations can transform lives. Join us in building a better world for those in need.
            </p>
            <Button asChild size="lg" className="bg-zakat-primary hover:bg-zakat-accent text-white px-8 py-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <span>Donate Now</span>
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-t border-white/10">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-heading font-bold text-white">GlobalZakat</span>
              <span className="text-2xl font-heading font-light text-zakat-secondary">Foundation</span>
            </Link>
            <p className="text-gray-400 mb-6">
              The GlobalZakat Foundation is dedicated to relieving poverty and suffering by distributing Zakat and Sadaqah to those most in need around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-zakat-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-zakat-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-zakat-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-zakat-secondary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/#videos" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  Impact Videos
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  Water Wells
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  Food Distribution
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  Orphan Sponsorship
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  Education Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  Healthcare Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-zakat-secondary transition-colors hover-underline">
                  Emergency Relief
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-zakat-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Charity Way, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-zakat-secondary flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-zakat-secondary flex-shrink-0" />
                <span className="text-gray-400">info@globalzakat.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} GlobalZakat Foundation. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-500 hover:text-zakat-secondary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-zakat-secondary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-zakat-secondary transition-colors text-sm">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
