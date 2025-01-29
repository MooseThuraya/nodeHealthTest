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
          
          <div className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-up leading-relaxed space-y-4" style={{ animationDelay: "0.1s" }}>
            <p>
              Say goodbye to:
            </p>
            <p className="space-y-2">
              <span className="relative inline-block">
                <span className="font-semibold">Excel-sheets</span> that are hard to manage
                <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-primary animate-[strike_1s_ease-in_forwards]"></span>
              </span>
              <br />
              <span className="relative inline-block">
                messy <span className="font-semibold">WhatsApp groups</span>
                <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-primary animate-[strike_1s_ease-in_forwards_0.5s]"></span>
              </span>
              <br />
              <span className="relative inline-block">
                and <span className="font-semibold">missed deadlines</span>
                <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-primary animate-[strike_1s_ease-in_forwards_1s]"></span>
              </span>
            </p>
            <p className="text-2xl font-medium text-accent">
              Meet <span className="font-bold text-[#8B5CF6]">EventAI</span> - the free, user friendly event planner
              <br />
              designed to get you from <span className="font-semibold bg-[#F2FCE2] px-1 rounded">no-planner to pro-planner</span>.
            </p>
          </div>
          
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