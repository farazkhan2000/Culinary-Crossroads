import { Link } from "react-router-dom";
import chefImg from "../../assets/chef.jpg"; 

const Hero = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            
            <h1 className="text-5xl md:text-5xl font-bold text-white leading-tight mb-6">
              Your everyday{" "}
              <span className="relative inline-block">
                <span className="z-10 relative">cooking inspiration</span>
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-200 rounded-full -z-10"></span>
              </span>
            </h1>
            
            <p className="text-gray-400 text-md mb-8 leading-relaxed">
              From simple weeknight dinners to elaborate cultural feasts, discover authentic recipes 
              with step-by-step guides and cultural stories from around the world.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                to="/recipes"
                className="bg-lime-600 text-white px-4 py-3 rounded-xl shadow-md hover:bg-lime-500 transition duration-300 font-semibold flex items-center gap-2"
              >
                <span>Explore Global Recipes</span>
                <span>→</span>
              </Link>
              <Link
                to="/about"
                className="border-2 border-lime-600 text-white px-4 py-3 rounded-xl hover:border-lime-400 hover:text-lime -600 transition duration-300 font-semibold flex items-center gap-2"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Right - Chef Image */}
          <div className="flex-1 flex justify-center relative">
            <img
              src={chefImg}
              alt="Professional Chef"
              className="max-w-md w-full z-10 relative rounded-2xl shadow-2xl border-2 border-lime-600"
            />
            <div className="absolute -z-10 w-80 h-80 bg-orange-100 rounded-full top-10 right-0"></div>
            
            {/* Floating Recipe Cards */}
            <div className="absolute -left-10 top-20 bg-white rounded-xl z-20 shadow-lg p-4 max-w-xs border-2 border-lime-600">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🥗</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">Healthy Choice</div>
                  <div className="text-gray-600 text-xs">Fresh ingredients</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 md:-right-10 bottom-16 md:bottom-20 bg-white rounded-xl z-20 shadow-lg p-3 md:p-4 max-w-[160px] md:max-w-xs border-2 border-lime-600">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg md:text-xl">📚</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-xs md:text-sm">Cultural Stories</div>
                  <div className="text-gray-600 text-xs">Traditional methods</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;