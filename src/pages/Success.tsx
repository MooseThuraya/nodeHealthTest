import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import confetti from "canvas-confetti";

const Success = () => {
  const [referralLink, setReferralLink] = useState("https://eventai.com/ref=ABC123");

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
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-32 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/80 rounded-full border border-primary/20 backdrop-blur-sm">
            <span className="text-sm text-accent">EventAI Private Beta</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-accent animate-fade-up">
            You're on the waitlist!
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Interested in getting priority access? Refer your friends!
              <br />
              The more friends that join, the sooner you'll get access.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button
                variant="outline"
                className="hover:bg-primary/5 transition-colors duration-300 border-primary text-accent"
                onClick={() => window.open("https://linkedin.com/share", "_blank")}
              >
                Share on LinkedIn
              </Button>
              <Button
                variant="outline"
                className="hover:bg-primary/5 transition-colors duration-300 border-primary text-accent"
                onClick={() => window.open("https://twitter.com/intent/tweet", "_blank")}
              >
                Share on X (Twitter)
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