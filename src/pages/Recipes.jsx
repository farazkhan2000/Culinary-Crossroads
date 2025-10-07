import { useState } from 'react';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'main', name: 'Main Course' },
    { id: 'appetizer', name: 'Appetizer' },
    { id: 'dessert', name: 'Dessert' },
    { id: 'beverage', name: 'Beverage' },
    { id: 'bread', name: 'Bread' }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const recipes = [
    {
      id: 1,
      name: "Classic Margherita Pizza",
      category: "main",
      difficulty: "beginner",
      time: "45min",
      servings: 4,
      country: "Italy",
      description: "Traditional Neapolitan pizza with fresh tomatoes, mozzarella, and basil",
      ingredients: ["Pizza dough", "San Marzano tomatoes", "Fresh mozzarella", "Basil", "Olive oil"],
      image: "🍕",
      rating: 4.8
    },
    {
      id: 2,
      name: "Sushi Rolls",
      category: "main",
      difficulty: "intermediate",
      time: "90min",
      servings: 4,
      country: "Japan",
      description: "Vinegared rice and fresh ingredients rolled in nori seaweed",
      ingredients: ["Sushi rice", "Nori", "Fresh fish", "Cucumber", "Avocado"],
      image: "🍣",
      rating: 4.9
    },
    {
      id: 3,
      name: "Tacos al Pastor",
      category: "main",
      difficulty: "advanced",
      time: "4h",
      servings: 6,
      country: "Mexico",
      description: "Marinated pork cooked on a vertical spit with pineapple",
      ingredients: ["Pork shoulder", "Achiote", "Pineapple", "Corn tortillas"],
      image: "🌮",
      rating: 4.7
    },
    {
      id: 4,
      name: "Chicken Biryani",
      category: "main",
      difficulty: "advanced",
      time: "2h",
      servings: 6,
      country: "India",
      description: "Fragrant rice dish layered with spiced chicken and saffron",
      ingredients: ["Basmati rice", "Chicken", "Yogurt", "Saffron", "Spices"],
      image: "🍛",
      rating: 4.8
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      category: "dessert",
      difficulty: "intermediate",
      time: "30min",
      servings: 4,
      country: "France",
      description: "Warm chocolate cake with a molten chocolate center",
      ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour"],
      image: "🍫",
      rating: 4.6
    },
    {
      id: 6,
      name: "Greek Salad",
      category: "appetizer",
      difficulty: "beginner",
      time: "15min",
      servings: 4,
      country: "Greece",
      description: "Fresh vegetables with feta cheese and olive oil dressing",
      ingredients: ["Tomatoes", "Cucumber", "Feta", "Olives", "Olive oil"],
      image: "🥗",
      rating: 4.5
    },
    {
      id: 7,
      name: "Mango Lassi",
      category: "beverage",
      difficulty: "beginner",
      time: "5min",
      servings: 2,
      country: "India",
      description: "Refreshing yogurt-based drink with sweet mango",
      ingredients: ["Ripe mango", "Yogurt", "Milk", "Cardamom"],
      image: "🥭",
      rating: 4.4
    },
    {
      id: 8,
      name: "Fresh Croissants",
      category: "bread",
      difficulty: "advanced",
      time: "3h",
      servings: 8,
      country: "France",
      description: "Buttery, flaky pastry with delicate layers",
      ingredients: ["Butter", "Flour", "Yeast", "Milk", "Sugar"],
      image: "🥐",
      rating: 4.7
    }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

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
      {/* Hero Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Global Recipes
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover authentic dishes from around the world with cultural stories and traditional methods
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search recipes, countries, or ingredients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-lg"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                  🔍
                </div>
              </div>
            </div>

            {/* Filter Row */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-lime-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Difficulty Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {difficulties.map(difficulty => (
                  <button
                    key={difficulty.id}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                      selectedDifficulty === difficulty.id
                        ? 'bg-lime-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {difficulty.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mt-4">
              <span className="text-gray-600 text-sm">
                Showing {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRecipes.map(recipe => (
                <div
                  key={recipe.id}
                  className="bg-white rounded-2xl border border-gray-200 hover:border-lime-400 transition duration-300 hover:shadow-lg group"
                >
                  {/* Recipe Image/Icon */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="text-6xl text-center mb-4 group-hover:scale-110 transition duration-300">
                      {recipe.image}
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.name}</h3>
                      <div className="flex items-center justify-center space-x-2 text-gray-600">
                        <span>🌎</span>
                        <span className="font-medium">{recipe.country}</span>
                      </div>
                    </div>
                  </div>

                  {/* Recipe Details */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {recipe.description}
                    </p>

                    {/* Recipe Meta */}
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <span>⏱️</span>
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>👥</span>
                        <span>{recipe.servings}</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                        {recipe.difficulty}
                      </div>
                    </div>

                    {/* Key Ingredients */}
                    <div className="mb-4">
                      <p className="text-gray-700 text-sm font-medium mb-2">Key Ingredients:</p>
                      <div className="flex flex-wrap gap-1">
                        {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {ingredient}
                          </span>
                        ))}
                        {recipe.ingredients.length > 3 && (
                          <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">
                            +{recipe.ingredients.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* UPDATED LINK - Corrected to use "viewrecipe" */}
                    <Link
                      to={`/viewrecipe/${recipe.id}`}
                      className="block w-full bg-lime-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-lime-500 transition duration-300"
                    >
                      View Recipe
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🍳</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No recipes found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                  setSearchTerm('');
                }}
                className="bg-lime-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-500 transition duration-300"
              >
                Show All Recipes
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Recipes;