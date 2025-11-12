import { motion } from 'motion/react';
import { Lightbulb, Droplets, Dumbbell, Moon, Apple, TrendingUp, TrendingDown, Flame } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TipsPage() {
  const tips = [
    {
      icon: Droplets,
      title: 'Stay Hydrated',
      description: 'Drink at least 8 glasses of water daily. Proper hydration boosts metabolism, improves skin health, and helps control appetite.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Dumbbell,
      title: 'Regular Exercise',
      description: 'Aim for 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week, plus strength training twice weekly.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Moon,
      title: 'Quality Sleep',
      description: 'Get 7-9 hours of quality sleep each night. Good sleep helps regulate hunger hormones and supports muscle recovery.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Apple,
      title: 'Eat Whole Foods',
      description: 'Focus on whole, unprocessed foods. Fill half your plate with vegetables, a quarter with lean protein, and a quarter with whole grains.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: TrendingUp,
      title: 'Track Your Progress',
      description: 'Keep a food diary and track your workouts. Monitoring progress helps you stay accountable and identify what works for you.',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Lightbulb,
      title: 'Meal Preparation',
      description: 'Plan and prep meals in advance. This helps you make healthier choices and saves time during busy weekdays.',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-50',
    },
  ];

  const nutritionFacts = [
    {
      title: 'Protein Power',
      fact: 'Consuming 0.8-1g of protein per pound of body weight supports muscle growth and recovery.',
    },
    {
      title: 'Carb Timing',
      fact: 'Eating complex carbs before workouts provides sustained energy, while simple carbs after help with recovery.',
    },
    {
      title: 'Healthy Fats',
      fact: 'Include omega-3 fatty acids from fish, nuts, and seeds to support brain health and reduce inflammation.',
    },
    {
      title: 'Fiber First',
      fact: 'Aim for 25-30g of fiber daily to improve digestion, control blood sugar, and promote feelings of fullness.',
    },
  ];

  const popularArticles = [
    {
      title: 'The Ultimate Beginners Guide to Calorie Counting',
      views: '12.5K',
      trend: 'up',
      category: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1734989175071-fedc119fb52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHNhbGFkfGVufDF8fHx8MTc2Mjg5NTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: '7-Day Meal Plan for Weight Loss',
      views: '9.8K',
      trend: 'up',
      category: 'Meal Plans',
      image: 'https://images.unsplash.com/photo-1610450620997-6921021865da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJvd2wlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzYyODc5MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Best Pre and Post Workout Nutrition',
      views: '8.3K',
      trend: 'up',
      category: 'Fitness',
      image: 'https://images.unsplash.com/photo-1693996045346-d0a9b9470909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc2hha2UlMjBmaXRuZXNzfGVufDF8fHx8MTc2Mjk0NzQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'How to Build Muscle While Losing Fat',
      views: '7.2K',
      trend: 'up',
      category: 'Fitness',
      image: 'https://images.unsplash.com/photo-1642006573231-c128034fe862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwZml0bmVzc3xlbnwxfHx8fDE3NjI5MDYwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>Fitness & Nutrition Tips</span>
          </div>
          <h1 className="text-gray-900 mb-4">
            Expert Tips for Success
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Science-backed advice to help you achieve your health and fitness goals
            and maintain a balanced lifestyle.
          </p>
        </motion.div>

        {/* Popular Articles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-gray-900 flex items-center gap-2">
              <Flame className="w-6 h-6 text-orange-500" />
              Trending Articles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-white/95 text-gray-900">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      {article.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span>{article.views} views</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className={`${tip.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
                <CardHeader>
                  <div className={`bg-gradient-to-br ${tip.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    <tip.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Nutrition Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-gray-900 text-center mb-8">
            Quick Nutrition Facts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nutritionFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <h3 className="text-gray-900 mb-3">{fact.title}</h3>
                <p className="text-gray-600">{fact.fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Daily Routine Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-gray-900 text-center mb-8">
                Sample Daily Routine
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-gray-900">Morning</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Wake up and drink a glass of water</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>30 minutes of cardio or yoga</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>High-protein breakfast within 1 hour</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-gray-900">Afternoon</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Balanced lunch with protein and veggies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Healthy snack (nuts, fruit, or yogurt)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Stay hydrated throughout the day</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-gray-900">Evening</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Strength training or sports activity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Light dinner 2-3 hours before bed</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-gray-900">Night</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Avoid screens 1 hour before bed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Relaxation or stretching routine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Get 7-9 hours of quality sleep</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}