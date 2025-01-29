import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white via-white/80 to-transparent backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-accent hover:text-accent-light transition-colors">
              EventAI
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <a
              href="#waitlist"
              className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;