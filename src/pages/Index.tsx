import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/80 rounded-full border border-primary/20 backdrop-blur-sm">
            <span className="text-sm text-accent">EventAI Private Beta</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-8 tracking-tight animate-fade-up">
            The smartest and fastest way
            <br /> to plan your event
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Say goodbye to excel-sheets, WhatsApp groups, and missed deadlines. 
            Meet EventAI - the free, user friendly event planner designed to get you 
            from no-planner to pro-planner.
          </p>
          
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-up transform hover:scale-[1.02] transition-transform duration-300" style={{ animationDelay: "0.3s" }}>
            <img
              src="/lovable-uploads/e6478ba2-a305-4bde-a020-f06ca1725663.png"
              alt="EventAI Demo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;