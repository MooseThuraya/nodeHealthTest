import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referralLink, setReferralLink] = useState("https://eventai.com/ref=ABC123");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitted(true);
    toast({
      title: "Welcome to the waitlist!",
      description: "You'll be among the first to know when we launch.",
    });
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied to clipboard!",
      description: "Share this link with your friends",
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center animate-fade-up">
        <h2 className="text-3xl font-bold mb-4 text-secondary">You're on the waitlist!</h2>
        <p className="text-gray-600 mb-8">
          Interested in getting priority access? Refer your friends!
          <br />
          The more friends that join, the faster you'll get access.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            variant="outline"
            className="hover:bg-primary/5 transition-colors duration-300 border-primary text-gray-700"
            onClick={() => window.open("https://linkedin.com/share", "_blank")}
          >
            Share on LinkedIn
          </Button>
          <Button
            variant="outline"
            className="hover:bg-primary/5 transition-colors duration-300 border-primary text-gray-700"
            onClick={() => window.open("https://twitter.com/intent/tweet", "_blank")}
          >
            Share on X (Twitter)
          </Button>
        </div>
        <div className="max-w-md mx-auto">
          <p className="text-sm text-gray-500 mb-2">Or use your unique referral link:</p>
          <div className="flex gap-2">
            <Input value={referralLink} readOnly className="bg-gray-50" />
            <Button 
              onClick={copyReferralLink}
              className="bg-primary hover:bg-primary-hover text-gray-800 hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              Copy
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
          className="h-12 px-6 bg-primary hover:bg-primary-hover text-gray-800 hover:scale-105 active:scale-95 transition-transform duration-200"
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