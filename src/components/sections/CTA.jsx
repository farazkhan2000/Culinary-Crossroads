import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 relative">
      {/* Different background - colorful ingredients */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Culinary Journey Awaits
          </h2>
          
          <p className="text-lg text-gray-200 mb-8">
            Explore authentic recipes from around the world or contribute your own family traditions to our growing community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/recipes"
              className="bg-lime-600 text-white px-8 py-4 rounded-xl hover:bg-lime-500 transition duration-300 font-semibold flex items-center justify-center gap-2"
            >
              <span>Discover Recipes</span>
              <span className="text-lg">🍳</span>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-lime-400 text-lime-400 px-8 py-4 rounded-xl hover:bg-lime-400 hover:text-gray-900 transition duration-300 font-semibold flex items-center justify-center gap-2"
            >
              <span>Share Your Dish</span>
              <span className="text-lg">🌟</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;