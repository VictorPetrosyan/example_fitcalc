import { useState } from 'react';
import { motion } from 'motion/react';
import { UtensilsCrossed, Search, Filter } from 'lucide-react';
import { RecipeCard } from './RecipeCard';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const recipes = [
  {
    id: 1,
    name: 'Mediterranean Quinoa Bowl',
    image: 'https://images.unsplash.com/photo-1734989175071-fedc119fb52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHNhbGFkfGVufDF8fHx8MTc2Mjg5NTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    calories: 420,
    description: 'Protein-rich quinoa with fresh vegetables, feta cheese, and olive oil dressing',
    mealType: 'lunch',
    goal: 'maintain',
    prepTime: '20 min',
    protein: 18,
    carbs: 52,
    fats: 14,
  },
  {
    id: 2,
    name: 'Berry Protein Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1610450620997-6921021865da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJvd2wlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzYyODc5MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    calories: 320,
    description: 'Energizing breakfast bowl with mixed berries, protein powder, and granola',
    mealType: 'breakfast',
    goal: 'lose',
    prepTime: '10 min',
    protein: 25,
    carbs: 45,
    fats: 8,
  },
  {
    id: 3,
    name: 'Grilled Chicken & Veggies',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYyOTIyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    calories: 380,
    description: 'Lean grilled chicken breast with roasted seasonal vegetables',
    mealType: 'dinner',
    goal: 'lose',
    prepTime: '30 min',
    protein: 42,
    carbs: 28,
    fats: 11,
  },
  {
    id: 4,
    name: 'Muscle Building Shake',
    image: 'https://images.unsplash.com/photo-1693996045346-d0a9b9470909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc2hha2UlMjBmaXRuZXNzfGVufDF8fHx8MTc2Mjk0NzQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    calories: 450,
    description: 'High-protein shake with banana, peanut butter, and whey protein',
    mealType: 'snack',
    goal: 'gain',
    prepTime: '5 min',
    protein: 35,
    carbs: 48,
    fats: 15,
  },
  {
    id: 5,
    name: 'Avocado Toast Delight',
    image: 'https://images.unsplash.com/photo-1551888645-5ec881101c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBoZWFsdGh5fGVufDF8fHx8MTc2Mjg3OTUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    calories: 340,
    description: 'Whole grain toast topped with mashed avocado, egg, and cherry tomatoes',
    mealType: 'breakfast',
    goal: 'maintain',
    prepTime: '15 min',
    protein: 14,
    carbs: 38,
    fats: 18,
  },
  {
    id: 6,
    name: 'Power Lunch Salad',
    image: 'https://images.unsplash.com/photo-1734989175071-fedc119fb52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHNhbGFkfGVufDF8fHx8MTc2Mjg5NTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    calories: 390,
    description: 'Mixed greens with grilled salmon, nuts, and balsamic vinaigrette',
    mealType: 'lunch',
    goal: 'lose',
    prepTime: '25 min',
    protein: 32,
    carbs: 24,
    fats: 20,
  },
];

export function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mealFilter, setMealFilter] = useState('all');
  const [goalFilter, setGoalFilter] = useState('all');

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMeal = mealFilter === 'all' || recipe.mealType === mealFilter;
    const matchesGoal = goalFilter === 'all' || recipe.goal === goalFilter;
    
    return matchesSearch && matchesMeal && matchesGoal;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <UtensilsCrossed className="w-4 h-4" />
            <span>Healthy Recipes</span>
          </div>
          <h1 className="text-gray-900 mb-4">
            Delicious & Nutritious Recipes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of healthy recipes designed to help you achieve your
            fitness goals while enjoying delicious meals.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>

            <div className="flex gap-4">
              <Select value={mealFilter} onValueChange={setMealFilter}>
                <SelectTrigger className="w-[180px] rounded-full">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Meal Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Meals</SelectItem>
                  <SelectItem value="breakfast">Breakfast</SelectItem>
                  <SelectItem value="lunch">Lunch</SelectItem>
                  <SelectItem value="dinner">Dinner</SelectItem>
                  <SelectItem value="snack">Snack</SelectItem>
                </SelectContent>
              </Select>

              <Select value={goalFilter} onValueChange={setGoalFilter}>
                <SelectTrigger className="w-[180px] rounded-full">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Goals</SelectItem>
                  <SelectItem value="lose">Weight Loss</SelectItem>
                  <SelectItem value="maintain">Maintain</SelectItem>
                  <SelectItem value="gain">Weight Gain</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-600">
              Try adjusting your filters or search terms
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
