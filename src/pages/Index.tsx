import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-light/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/80 rounded-full border border-gray-200 backdrop-blur-sm">
            <span className="text-sm text-gray-600">EventAI Private Beta</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-6 tracking-tight animate-fade-up">
            The smartest and fastest way
            <br /> to plan your event
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
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
              src="/lovable-uploads/46ba3f12-3d23-4d20-838a-96be8f623e4d.png"
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