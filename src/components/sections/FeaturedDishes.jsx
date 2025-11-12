// import { Link } from 'react-router-dom';

// const FeaturedDishes = () => {
//   const featuredDishes = [
//     {
//       id: 1,
//       name: "Sushi Rolls",
//       country: "Japan",
//       description: "Fresh fish and vinegared rice wrapped in seaweed",
//       time: "2 hours",
//       difficulty: "Intermediate",
//       icon: "🍣"
//     },
//     {
//       id: 2,
//       name: "Tacos al Pastor",
//       country: "Mexico",
//       description: "Marinated pork with pineapple in corn tortillas",
//       time: "4 hours",
//       difficulty: "Advanced",
//       icon: "🌮"
//     },
//     {
//       id: 3,
//       name: "Pizza Margherita",
//       country: "Italy",
//       description: "Classic Neapolitan pizza with tomato and mozzarella",
//       time: "1 hour",
//       difficulty: "Beginner",
//       icon: "🍕"
//     },
//     {
//       id: 4,
//       name: "Chicken Biryani",
//       country: "India",
//       description: "Fragrant rice dish with spiced chicken and saffron",
//       time: "2.5 hours",
//       difficulty: "Advanced",
//       icon: "🍛"
//     }
//   ];

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case 'Beginner': return 'bg-green-100 text-green-800 border border-green-200';
//       case 'Intermediate': return 'bg-blue-100 text-blue-800 border border-blue-200';
//       case 'Advanced': return 'bg-purple-100 text-purple-800 border border-purple-200';
//       default: return 'bg-gray-100 text-gray-800 border border-gray-200';
//     }
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Featured Global Dishes
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Handpicked recipes showcasing authentic culinary traditions from around the world
//           </p>
//         </div>
        
//         {/* Dishes Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {featuredDishes.map((dish) => (
//             <div 
//               key={dish.id} 
//               className="bg-white rounded-2xl border-2 border-gray-200 hover:border-lime-500 transition-all duration-300 hover:shadow-xl group"
//             >
//               {/* Dish Header */}
//               <div className="p-6 border-b border-gray-100">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
//                     {dish.icon}
//                   </div>
//                   <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(dish.difficulty)}`}>
//                     {dish.difficulty}
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <span className="text-sm">🌎</span>
//                   <span className="text-sm font-medium">{dish.country}</span>
//                 </div>
//               </div>
              
//               {/* Dish Details */}
//               <div className="p-6">
//                 <p className="text-gray-600 text-sm mb-4 leading-relaxed">
//                   {dish.description}
//                 </p>
                
//                 <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
//                   <div className="flex items-center space-x-1">
//                     <span>⏱️</span>
//                     <span className="font-medium">{dish.time}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <span>👥</span>
//                     <span className="font-medium">2-4</span>
//                   </div>
//                 </div>
                
//                 <Link 
//                   to={`/recipes/${dish.id}`}
//                   className="block w-full bg-lime-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-lime-500 transition duration-300 group-hover:shadow-lg"
//                 >
//                   View Recipe
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl p-8 text-white">
//             <h3 className="text-2xl font-bold mb-4">Ready to Explore More?</h3>
//             <p className="text-lime-100 mb-6 max-w-md mx-auto">
//               Discover hundreds of authentic recipes with cultural stories and traditional cooking methods.
//             </p>
//             <Link 
//               to="/recipes"
//               className="inline-flex items-center space-x-2 bg-white text-lime-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300"
//             >
//               <span>Browse All Recipes</span>
//               <span>→</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedDishes;

import { Link } from 'react-router-dom';
import { recipes } from '../../data/recipesData';

const FeaturedDishes = () => {
  // Select 4 random recipes
  const getFeaturedDishes = () => {
    return [...recipes]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  };

  const featuredDishes = getFeaturedDishes();

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': 
      case 'Beginner': 
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'intermediate': 
      case 'Intermediate': 
        return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'advanced': 
      case 'Advanced': 
        return 'bg-purple-100 text-purple-800 border border-purple-200';
      default: 
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const formatDifficulty = (difficulty) => {
    if (!difficulty) return 'Beginner';
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  if (featuredDishes.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Dishes</h2>
          <p className="text-gray-600">No featured dishes available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Global Dishes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover random authentic recipes from around the world - refreshed every visit!
          </p>
        </div>
        
        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredDishes.map((dish) => (
            <div 
              key={dish.id} 
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-lime-500 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Dish Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {dish.image}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(dish.difficulty)}`}>
                    {formatDifficulty(dish.difficulty)}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
                <div className="flex items-center space-x-2 text-gray-600">
                  <span className="text-sm">🌎</span>
                  <span className="text-sm font-medium">{dish.country}</span>
                </div>
              </div>
              
              {/* Dish Details */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {dish.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <span>⏱️</span>
                    <span className="font-medium">{dish.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>👥</span>
                    <span className="font-medium">{dish.servings}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>⭐</span>
                    <span className="font-medium">{dish.rating}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/viewrecipe/${dish.id}`}
                  className="block w-full bg-lime-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-lime-500 transition duration-300 group-hover:shadow-lg"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Hungry for More?</h3>
            <p className="text-lime-100 mb-6 max-w-md mx-auto">
              Explore all {recipes.length} authentic recipes with cultural stories and traditional cooking methods.
            </p>
            <Link 
              to="/recipes"
              className="inline-flex items-center space-x-2 bg-white text-lime-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300"
            >
              <span>Browse All Recipes</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;