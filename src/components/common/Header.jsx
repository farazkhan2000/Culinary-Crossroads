import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-lime-500 to-lime-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">CC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">CulinaryCrossroads</h1>
              <p className="text-gray-500 text-xs hidden sm:block">Taste Global Traditions</p>
            </div>
          </Link>

          {/* Navigation Links + CTA Button - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition duration-300 py-2 ${
                    location.pathname === item.path
                      ? 'text-lime-600'
                      : 'text-gray-600 hover:text-lime-600'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-500 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300"></div>

            {/* CTA Button */}
            <Link 
              to="/recipes"
              className="bg-lime-600 text-white px-6 py-3 rounded-xl hover:bg-lime-500 transition duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Recipes
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-600 transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-3 px-6 rounded-xl transition duration-300 ${
                    location.pathname === item.path
                      ? 'bg-lime-50 text-lime-600 border-l-4 border-lime-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-lime-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/recipes"
                className="bg-lime-600 text-white py-3 px-6 rounded-xl text-center hover:bg-lime-500 transition duration-300 font-semibold mt-4 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore Recipes
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;