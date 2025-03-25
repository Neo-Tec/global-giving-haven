
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentForm from "@/components/PaymentForm";
import { ArrowLeft, Shield, LockKeyhole, CreditCard } from 'lucide-react';

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-zakat-primary hover:text-zakat-dark transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zakat-dark mb-4">
                Make a Donation
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your generosity can transform lives. 100% of your donation goes directly to those in need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 order-2 lg:order-1">
                <div className="bg-zakat-light p-6 rounded-2xl mb-8">
                  <h2 className="text-xl font-bold text-zakat-dark mb-4">Why Donate to GlobalZakat?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-zakat-primary/20 flex items-center justify-center mt-0.5">
                        <Shield className="h-3.5 w-3.5 text-zakat-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-zakat-dark">100% Donation Policy</h3>
                        <p className="text-gray-600 text-sm">All of your donation goes directly to those in need. Administrative costs are covered separately.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-zakat-primary/20 flex items-center justify-center mt-0.5">
                        <LockKeyhole className="h-3.5 w-3.5 text-zakat-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-zakat-dark">Secure Payments</h3>
                        <p className="text-gray-600 text-sm">Your financial information is encrypted and secure. We never store your payment details.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-zakat-primary/20 flex items-center justify-center mt-0.5">
                        <CreditCard className="h-3.5 w-3.5 text-zakat-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-zakat-dark">Tax-Deductible</h3>
                        <p className="text-gray-600 text-sm">All donations are tax-deductible. You'll receive an email receipt for your records.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-zakat-dark mb-4">Where Your Donation Goes</h2>
                    <p className="text-gray-600 mb-4">
                      Your donation supports these essential programs that help those in need:
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-sm text-zakat-dark">Clean Water</span>
                          <span className="text-xs text-gray-500">30%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-zakat-primary h-2 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-sm text-zakat-dark">Food Security</span>
                          <span className="text-xs text-gray-500">25%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-zakat-secondary h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-sm text-zakat-dark">Education</span>
                          <span className="text-xs text-gray-500">20%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-zakat-accent h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-sm text-zakat-dark">Healthcare</span>
                          <span className="text-xs text-gray-500">15%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-zakat-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-sm text-zakat-dark">Emergency Relief</span>
                          <span className="text-xs text-gray-500">10%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-zakat-secondary h-2 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-zakat-dark text-white">
                    <h3 className="text-lg font-bold mb-2">Our Impact</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-zakat-secondary">5.2M+</p>
                        <p className="text-xs text-gray-300">People Helped</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-zakat-secondary">30+</p>
                        <p className="text-xs text-gray-300">Countries</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-zakat-secondary">250+</p>
                        <p className="text-xs text-gray-300">Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 order-1 lg:order-2">
                <PaymentForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
