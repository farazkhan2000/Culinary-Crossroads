// import { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { recipes } from '../data/recipesData';

// const ViewRecipe = () => {
//   const { id } = useParams();
//   const [activeTab, setActiveTab] = useState('ingredients');
  
//   // Find the recipe by ID
//   const recipe = recipes.find(recipe => recipe.id === parseInt(id));

//   // If recipe not found, show error
//   if (!recipe) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="text-6xl mb-4">😕</div>
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">Recipe Not Found</h1>
//           <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist.</p>
//           <Link
//             to="/recipes"
//             className="bg-lime-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-500 transition duration-300"
//           >
//             Back to Recipes
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Find similar recipes (same category, excluding current recipe)
//   const similarRecipes = recipes
//     .filter(r => r.category === recipe.category && r.id !== recipe.id)
//     .slice(0, 2);

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case 'beginner': return 'bg-green-100 text-green-800 border border-green-200';
//       case 'intermediate': return 'bg-blue-100 text-blue-800 border border-blue-200';
//       case 'advanced': return 'bg-purple-100 text-purple-800 border border-purple-200';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
//             <Link to="/recipes" className="hover:text-lime-600">Recipes</Link>
//             <span>›</span>
//             <span className="text-gray-800">{recipe.name}</span>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-6 items-start">
//             {/* Recipe Icon */}
//             <div className="text-6xl bg-gray-100 rounded-2xl p-6 lg:p-8">
//               {recipe.image}
//             </div>

//             {/* Recipe Info */}
//             <div className="flex-1">
//               <h1 className="text-3xl font-bold text-gray-800 mb-2">{recipe.name}</h1>
              
//               <div className="flex items-center space-x-4 text-gray-600 mb-4">
//                 <div className="flex items-center space-x-1">
//                   <span>🌎</span>
//                   <span>{recipe.country}</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <span>⭐</span>
//                   <span>{recipe.rating}</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <span>⏱️</span>
//                   <span>{recipe.time}</span>
//                 </div>
//                 <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
//                   {recipe.difficulty}
//                 </div>
//               </div>

//               <p className="text-gray-600 mb-6">{recipe.description}</p>

//               {/* Quick Actions */}
//               <div className="flex flex-wrap gap-3">
//                 <button className="bg-lime-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-lime-500 transition cursor-pointer">
//                   Print Recipe
//                 </button>
//                 <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition cursor-pointer">
//                   Save Recipe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Tabs */}
//       <div className="container mx-auto px-4 py-6">
//         {/* Tab Buttons */}
//         <div className="flex space-x-1 bg-white rounded-lg p-1 mb-6 max-w-md border">
//           {['ingredients', 'instructions', 'story'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition capitalize ${
//                 activeTab === tab
//                   ? 'bg-lime-600 text-white'
//                   : 'text-gray-600 hover:text-lime-600'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="bg-white rounded-lg border p-6">
//           {activeTab === 'ingredients' && (
//             <div>
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Ingredients</h2>
//               <div className="space-y-2">
//                 {recipe.ingredients.map((ingredient, index) => (
//                   <div key={index} className="flex items-center py-2 border-b border-gray-100 last:border-b-0">
//                     <span className="text-gray-800">{ingredient}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'instructions' && (
//             <div>
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Instructions</h2>
//               <div className="space-y-4">
//                 {recipe.instructions.map((instruction, index) => (
//                   <div key={index} className="flex space-x-3">
//                     <div className="flex-shrink-0 w-6 h-6 bg-lime-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
//                       {index + 1}
//                     </div>
//                     <p className="text-gray-700 flex-1">{instruction}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'story' && (
//             <div>
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Story</h2>
//               <p className="text-gray-700 leading-relaxed">{recipe.story}</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Similar Recipes */}
//       {similarRecipes.length > 0 && (
//         <div className="bg-white border-t border-gray-200 py-8">
//           <div className="container mx-auto px-4">
//             <h2 className="text-xl font-bold text-gray-800 mb-6">More Recipes You Might Like</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
//               {similarRecipes.map((similar) => (
//                 <Link
//                   key={similar.id}
//                   to={`/viewrecipe/${similar.id}`}
//                   className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-lime-400 transition group"
//                 >
//                   <div className="text-3xl group-hover:scale-110 transition">
//                     {similar.image}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800">{similar.name}</h3>
//                     <div className="flex items-center space-x-3 text-sm text-gray-600">
//                       <span>🌎 {similar.country}</span>
//                       <span>⏱️ {similar.time}</span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewRecipe;


import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { recipes } from '../data/recipesData';

const ViewRecipe = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('ingredients');
  const [imageError, setImageError] = useState(false);
  
  // Find the recipe by ID
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  // If recipe not found, show error
  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Recipe Not Found</h1>
          <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist.</p>
          <Link
            to="/recipes"
            className="bg-lime-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-500 transition duration-300"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  // Find similar recipes (same category, excluding current recipe)
  const similarRecipes = recipes
    .filter(r => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, 2);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border border-green-200';
      case 'intermediate': return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'advanced': return 'bg-purple-100 text-purple-800 border border-purple-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Function to handle image loading error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link to="/recipes" className="hover:text-lime-600">Recipes</Link>
            <span>›</span>
            <span className="text-gray-800">{recipe.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Recipe Image */}
            <div className="w-full lg:w-1/3">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                {recipe.imageUrl && !imageError ? (
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
                    onError={handleImageError}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-64 lg:h-80 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-6xl">{recipe.image}</div>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">{recipe.time}</span>
                </div>
              </div>
            </div>

            {/* Recipe Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{recipe.name}</h1>
              
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <span className="text-lg">🌎</span>
                  <span className="font-medium">{recipe.country}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-lg">⭐</span>
                  <span className="font-medium">{recipe.rating}</span>
                  <span className="text-gray-400">/5</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-lg">👥</span>
                  <span className="font-medium">{recipe.servings} servings</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{recipe.description}</p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <button className="bg-lime-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-lime-500 transition cursor-pointer flex items-center space-x-2">
                  <span>🖨️</span>
                  <span>Print Recipe</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer flex items-center space-x-2">
                  <span>❤️</span>
                  <span>Save Recipe</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer flex items-center space-x-2">
                  <span>📋</span>
                  <span>Copy Ingredients</span>
                </button>
              </div>

              {/* Quick Info */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-500">Category</div>
                  <div className="font-semibold capitalize">{recipe.category}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-500">Prep Time</div>
                  <div className="font-semibold">{recipe.time}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-500">Servings</div>
                  <div className="font-semibold">{recipe.servings}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-500">Difficulty</div>
                  <div className={`font-semibold capitalize ${getDifficultyColor(recipe.difficulty).split(' ')[1]}`}>
                    {recipe.difficulty}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 py-8">
        {/* Tab Buttons */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 mb-6 max-w-2xl border">
          {['ingredients', 'instructions', 'story', 'tips'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-semibold transition capitalize ${
                activeTab === tab
                  ? 'bg-lime-600 text-white'
                  : 'text-gray-600 hover:text-lime-600 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg border p-6 lg:p-8 shadow-sm">
          {activeTab === 'ingredients' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Ingredients</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Instructions</h2>
              <div className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex space-x-4 p-4 hover:bg-gray-50 rounded-lg transition">
                    <div className="flex-shrink-0 w-8 h-8 bg-lime-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 flex-1 leading-relaxed">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'story' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cultural Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{recipe.story}</p>
              </div>
            </div>
          )}

          {activeTab === 'tips' && recipe.tips && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Tips & Notes</h2>
              <div className="space-y-4">
                {recipe.tips.map((tip, index) => (
                  <div key={index} className="bg-lime-50 border-l-4 border-lime-500 p-4 rounded-r-lg">
                    <div className="flex items-start space-x-3">
                      <span className="text-lime-600 text-lg">💡</span>
                      <p className="text-gray-700 flex-1">{tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Extra Sections if available */}
        {recipe.tips && activeTab !== 'tips' && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Tips</h3>
            <div className="flex flex-wrap gap-2">
              {recipe.tips.slice(0, 3).map((tip, index) => (
                <div key={index} className="bg-white border border-lime-200 rounded-lg p-3">
                  <p className="text-sm text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Similar Recipes */}
      {similarRecipes.length > 0 && (
        <div className="bg-white border-t border-gray-200 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">More {recipe.country} Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarRecipes.map((similar) => (
                <Link
                  key={similar.id}
                  to={`/viewrecipe/${similar.id}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-lime-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    {similar.imageUrl ? (
                      <img
                        src={similar.imageUrl}
                        alt={similar.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <div className="text-4xl">{similar.image}</div>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
                      {similar.time}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 group-hover:text-lime-600 transition">{similar.name}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <span>🌎</span>
                        <span>{similar.country}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>⭐</span>
                        <span>{similar.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewRecipe;