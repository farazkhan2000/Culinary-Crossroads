import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-lime-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <div>
              <h2 className="text-lg font-bold">CulinaryCrossroads</h2>
              <p className="text-gray-400 text-xs">Taste Global Traditions</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-lime-300 transition text-sm">
              Home
            </Link>
            <Link to="/recipes" className="text-gray-300 hover:text-lime-300 transition text-sm">
              Recipes
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-lime-300 transition text-sm">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-lime-300 transition text-sm">
              Contact
            </Link>
          </div>

          {/* University Info */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              University of Jyväskylä
            </p>
            <p className="text-gray-500 text-xs">
              Information Systems Masters
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Culinary Crossroads
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;