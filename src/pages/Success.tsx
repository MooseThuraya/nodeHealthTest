import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import confetti from "canvas-confetti";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Success = () => {
  const [referralLink, setReferralLink] = useState("https://joya.com/ref=ABC123");

  useEffect(() => {
    // Trigger confetti when the page loads
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFDEE2', '#D3E4FD', '#FEC6A1', '#F2FCE2']
    });
  }, []);

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied to clipboard!",
      description: "Share this link with your friends",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-32 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/80 rounded-full border border-primary/20 backdrop-blur-sm">
            <span className="text-sm text-accent">Joya Private Beta</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-accent animate-fade-up">
            You're on the waitlist!
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Interested in getting priority access? Refer your friends!
            </p>

            <div className="bg-primary/10 rounded-lg p-4 mb-8 animate-fade-up transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: "0.15s" }}>
              <p className="text-lg font-semibold text-accent">
                Refer 20 friends, and we'll plan your next event!
              </p>
            </div>
            
            <div className="flex justify-center gap-6 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary/5 transition-colors duration-300 border-primary text-accent"
                onClick={() => window.open("https://linkedin.com/share", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary/5 transition-colors duration-300 border-primary text-accent"
                onClick={() => window.open("https://twitter.com/intent/tweet", "_blank")}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary/5 transition-colors duration-300 border-primary text-accent"
                onClick={() => window.open("https://instagram.com", "_blank")}
              >
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="max-w-md mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-sm text-gray-500 mb-2">Or use your unique referral link:</p>
              <div className="flex gap-2">
                <Input value={referralLink} readOnly className="bg-gray-light" />
                <Button 
                  onClick={copyReferralLink}
                  className="bg-primary hover:bg-primary-hover text-white hover:scale-105 active:scale-95 transition-transform duration-200"
                >
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;