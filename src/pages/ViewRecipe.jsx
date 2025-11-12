// import { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// const ViewRecipe = () => {
//   const { id } = useParams();
//   const [servings, setServings] = useState(4);
//   const [activeTab, setActiveTab] = useState('ingredients');

//   // Mock recipe data
//   const recipe = {
//     id: 1,
//     name: "Classic Margherita Pizza",
//     difficulty: "Beginner",
//     time: "45min",
//     servings: 4,
//     country: "Italy",
//     description: "Traditional Neapolitan pizza with fresh tomatoes, mozzarella, and basil.",
//     image: "🍕",
//     rating: 4.8,
//     ingredients: [
//       "500g Pizza dough",
//       "400g San Marzano tomatoes", 
//       "250g Fresh mozzarella",
//       "20 Fresh basil leaves",
//       "2 tbsp Olive oil",
//       "1 tsp Sea salt"
//     ],
//     instructions: [
//       "Mix flour, yeast, and salt. Gradually add water and knead for 10 minutes.",
//       "Let dough rise for 1-2 hours until doubled in size.",
//       "Crush tomatoes by hand and mix with salt.",
//       "Stretch dough into a 12-inch circle.",
//       "Spread tomato sauce, add torn mozzarella and basil leaves.",
//       "Bake at 485°C for 60-90 seconds."
//     ],
//     story: "Created in 1889 to honor Queen Margherita, representing the Italian flag colors."
//   };

//   const similarRecipes = [
//     { id: 2, name: "Sushi Rolls", image: "🍣", country: "Japan", time: "90min" },
//     { id: 3, name: "Tacos", image: "🌮", country: "Mexico", time: "4h" },
//   ];

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
//               </div>

//               <p className="text-gray-600 mb-6">{recipe.description}</p>

//               {/* Quick Actions */}
//               <div className="flex flex-wrap gap-3">
//                 <button className="bg-lime-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-lime-500 transition cursor-pointer">
//                   Print Recipe
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
//       <div className="bg-white border-t border-gray-200 py-8">
//         <div className="container mx-auto px-4">
//           <h2 className="text-xl font-bold text-gray-800 mb-6">More Recipes</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
//             {similarRecipes.map((similar) => (
//               <Link
//                 key={similar.id}
//                 to={`/viewrecipe/${similar.id}`}
//                 className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-lime-400 transition group"
//               >
//                 <div className="text-3xl group-hover:scale-110 transition">
//                   {similar.image}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">{similar.name}</h3>
//                   <div className="flex items-center space-x-3 text-sm text-gray-600">
//                     <span>🌎 {similar.country}</span>
//                     <span>⏱️ {similar.time}</span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
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
            {/* Recipe Icon */}
            <div className="text-6xl bg-gray-100 rounded-2xl p-6 lg:p-8">
              {recipe.image}
            </div>

            {/* Recipe Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{recipe.name}</h1>
              
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <span>🌎</span>
                  <span>{recipe.country}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>⭐</span>
                  <span>{recipe.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>⏱️</span>
                  <span>{recipe.time}</span>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                  {recipe.difficulty}
                </div>
              </div>

              <p className="text-gray-600 mb-6">{recipe.description}</p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <button className="bg-lime-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-lime-500 transition cursor-pointer">
                  Print Recipe
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition cursor-pointer">
                  Save Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 py-6">
        {/* Tab Buttons */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 mb-6 max-w-md border">
          {['ingredients', 'instructions', 'story'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition capitalize ${
                activeTab === tab
                  ? 'bg-lime-600 text-white'
                  : 'text-gray-600 hover:text-lime-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg border p-6">
          {activeTab === 'ingredients' && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Ingredients</h2>
              <div className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-800">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Instructions</h2>
              <div className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-lime-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 flex-1">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'story' && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Story</h2>
              <p className="text-gray-700 leading-relaxed">{recipe.story}</p>
            </div>
          )}
        </div>
      </div>

      {/* Similar Recipes */}
      {similarRecipes.length > 0 && (
        <div className="bg-white border-t border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-800 mb-6">More Recipes You Might Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              {similarRecipes.map((similar) => (
                <Link
                  key={similar.id}
                  to={`/viewrecipe/${similar.id}`}
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-lime-400 transition group"
                >
                  <div className="text-3xl group-hover:scale-110 transition">
                    {similar.image}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{similar.name}</h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <span>🌎 {similar.country}</span>
                      <span>⏱️ {similar.time}</span>
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