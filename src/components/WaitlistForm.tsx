import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    
    // Navigate to success page
    navigate('/success');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 text-base transition-shadow duration-200 focus:shadow-lg"
        />
        <Button 
          type="submit"
          className="h-12 px-6 bg-primary hover:bg-primary-hover text-white hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          Get Early Access
        </Button>
      </div>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Join the waitlist to get early access
      </p>
    </form>
  );
};

export default WaitlistForm;