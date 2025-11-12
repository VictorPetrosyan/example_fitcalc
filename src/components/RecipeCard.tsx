import { motion } from 'motion/react';
import { Clock, Flame, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface Recipe {
  id: number;
  name: string;
  image: string;
  calories: number;
  description: string;
  mealType: string;
  goal: string;
  prepTime: string;
  protein: number;
  carbs: number;
  fats: number;
}

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

export function RecipeCard({ recipe, index }: RecipeCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const mealTypeColors: { [key: string]: string } = {
    breakfast: 'bg-orange-100 text-orange-700',
    lunch: 'bg-blue-100 text-blue-700',
    dinner: 'bg-purple-100 text-purple-700',
    snack: 'bg-green-100 text-green-700',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative">
          <ImageWithFallback
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                isFavorite
                  ? 'bg-red-500 text-white'
                  : 'bg-white/80 text-gray-600 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </motion.button>
          </div>
          <div className="absolute top-3 left-3">
            <Badge className={`${mealTypeColors[recipe.mealType]} capitalize`}>
              {recipe.mealType}
            </Badge>
          </div>
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-gray-900">{recipe.calories} kcal</span>
          </div>
        </div>

        <CardContent className="p-5 space-y-4">
          <div>
            <h3 className="text-gray-900 mb-2">{recipe.name}</h3>
            <p className="text-gray-600 line-clamp-2">{recipe.description}</p>
          </div>

          <div className="flex items-center gap-4 text-gray-600 pt-2 border-t">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.prepTime}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="bg-orange-50 rounded-lg p-2 text-center">
              <p className="text-orange-600">{recipe.protein}g</p>
              <p className="text-gray-600">Protein</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-2 text-center">
              <p className="text-blue-600">{recipe.carbs}g</p>
              <p className="text-gray-600">Carbs</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-2 text-center">
              <p className="text-amber-600">{recipe.fats}g</p>
              <p className="text-gray-600">Fats</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
