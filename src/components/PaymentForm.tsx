
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, Check, ArrowRight } from 'lucide-react';

const donationAmounts = [50, 100, 250, 500, 1000];

const PaymentForm = () => {
  const [donationAmount, setDonationAmount] = useState<number | string>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const handleDonationAmountChange = (value: string) => {
    if (value === "custom") {
      setIsCustomAmount(true);
      setDonationAmount(customAmount || "");
    } else {
      setIsCustomAmount(false);
      setDonationAmount(parseInt(value, 10));
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    if (isCustomAmount) {
      setDonationAmount(value || 0);
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    let formattedValue = '';
    
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }
    
    if (formattedValue.length <= 19) { // 16 digits + 3 spaces
      setCardNumber(formattedValue);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    let formattedValue = '';
    
    if (value.length > 0) {
      formattedValue += value.substring(0, Math.min(2, value.length));
      if (value.length > 2) {
        formattedValue += '/' + value.substring(2, Math.min(4, value.length));
      }
    }
    
    setExpiry(formattedValue);
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 3) {
      setCvc(value);
    }
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Donation Successful",
        description: `Thank you for your generous donation of $${donationAmount}. Your receipt has been emailed to ${email}.`,
        variant: "default",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setCardNumber("");
      setExpiry("");
      setCvc("");
      setDonationAmount(100);
      setCurrentStep(1);
    }, 1500);
  };

  const nextStep = () => {
    if (currentStep === 1 && (!donationAmount || donationAmount === 0)) {
      toast({
        title: "Please enter donation amount",
        description: "Please select or enter a donation amount to proceed.",
        variant: "destructive",
      });
      return;
    }
    setCurrentStep(2);
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-zakat-dark mb-2">Make a Donation</h2>
        <p className="text-gray-600">Your generosity can transform lives</p>
      </div>
      
      {/* Step indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
          currentStep === 1 ? 'bg-zakat-primary text-white' : 'bg-zakat-primary text-white'
        }`}>
          1
        </div>
        <div className={`h-1 w-16 ${
          currentStep === 2 ? 'bg-zakat-primary' : 'bg-gray-200'
        }`}></div>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
          currentStep === 2 ? 'bg-zakat-primary text-white' : 'bg-gray-200 text-gray-600'
        }`}>
          2
        </div>
      </div>
      
      <form onSubmit={handleSubmitDonation}>
        {currentStep === 1 ? (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label className="text-base font-medium text-gray-700 mb-3 block">
                Select Donation Amount
              </Label>
              <RadioGroup 
                value={isCustomAmount ? "custom" : donationAmount.toString()}
                onValueChange={handleDonationAmountChange}
                className="grid grid-cols-3 gap-3"
              >
                {donationAmounts.map((amount) => (
                  <div key={amount} className="relative">
                    <RadioGroupItem
                      value={amount.toString()}
                      id={`amount-${amount}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`amount-${amount}`}
                      className="flex h-14 items-center justify-center rounded-md border-2 border-muted bg-transparent px-3 py-2 ring-offset-background peer-data-[state=checked]:border-zakat-primary peer-data-[state=checked]:text-zakat-primary cursor-pointer font-medium hover:bg-muted/5 transition-colors"
                    >
                      ${amount}
                    </Label>
                  </div>
                ))}
                <div className="relative">
                  <RadioGroupItem
                    value="custom"
                    id="amount-custom"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="amount-custom"
                    className="flex h-14 items-center justify-center rounded-md border-2 border-muted bg-transparent px-3 py-2 ring-offset-background peer-data-[state=checked]:border-zakat-primary peer-data-[state=checked]:text-zakat-primary cursor-pointer font-medium hover:bg-muted/5 transition-colors"
                  >
                    Custom
                  </Label>
                </div>
              </RadioGroup>
            </div>
            
            {isCustomAmount && (
              <div className="animate-fade-in">
                <Label htmlFor="custom-amount" className="text-base font-medium text-gray-700 mb-2 block">
                  Enter Custom Amount
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    id="custom-amount"
                    type="text"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="pl-8"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-3">
              <Label htmlFor="name" className="text-base font-medium text-gray-700 block">
                Personal Information
              </Label>
              <Input
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                id="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="button" 
              onClick={nextStep}
              className="w-full bg-zakat-primary hover:bg-zakat-dark text-white py-6 rounded-lg"
            >
              <span>Continue to Payment</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="mb-4">
              <Label className="text-base font-medium text-gray-700 mb-3 block">
                Card Information
              </Label>
              <div className="space-y-3">
                <div className="relative">
                  <Input
                    id="card-number"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19}
                    required
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={handleExpiryChange}
                    maxLength={5}
                    required
                  />
                  <Input
                    id="cvc"
                    placeholder="CVC"
                    value={cvc}
                    onChange={handleCvcChange}
                    maxLength={3}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-zakat-light p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Donation Amount:</span>
                <span className="font-medium">${donationAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Processing Fee:</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="border-t border-gray-200 my-2 pt-2 flex justify-between">
                <span className="font-medium">Total:</span>
                <span className="font-bold text-zakat-dark">${donationAmount}</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-zakat-primary hover:bg-zakat-dark text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Complete Donation
                    <Check className="ml-2 h-5 w-5" />
                  </span>
                )}
              </Button>
            </div>
          </div>
        )}
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Your donation is secure and encrypted. Thank you for your generosity.
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;
