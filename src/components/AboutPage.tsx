import { motion } from 'motion/react';
import { Target, Users, Award, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower individuals to take control of their health through accessible, science-based nutrition and fitness tools.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive community where everyone can share their journey and celebrate their achievements together.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Expert Backed',
      description: 'All our recommendations are based on the latest nutritional science and reviewed by certified health professionals.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Heart,
      title: 'Holistic Health',
      description: 'We believe in a balanced approach that considers nutrition, exercise, mental health, and sustainable lifestyle changes.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4" />
            <span>About FitCalc</span>
          </div>
          <h1 className="text-gray-900 mb-6">
            Your Partner in Health & Wellness
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            FitCalc was created with a simple mission: to make health and nutrition tracking
            accessible, accurate, and enjoyable for everyone. We believe that understanding your
            body's needs is the first step toward achieving your wellness goals.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-br ${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-gray-900 text-center mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    FitCalc was born from a personal struggle with understanding nutrition and making
                    healthy choices. Our founders realized that while there was plenty of health
                    information available, it was often confusing, contradictory, or hard to apply
                    to daily life.
                  </p>
                  <p>
                    We set out to create a platform that would simplify the science of nutrition,
                    provide personalized recommendations, and make tracking your health journey
                    intuitive and motivating. Today, FitCalc helps thousands of people every day
                    make informed decisions about their health.
                  </p>
                  <p>
                    Whether you're looking to lose weight, build muscle, or simply maintain a
                    healthier lifestyle, we're here to support you every step of the way with
                    tools that are both powerful and easy to use.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gray-900 text-center mb-8">
            Our Impact
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  50,000+
                </div>
                <p className="text-gray-600">Active Users</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  1,000+
                </div>
                <p className="text-gray-600">Healthy Recipes</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  2M+
                </div>
                <p className="text-gray-600">Calculations Made</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <p className="text-gray-600">Success Rate</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
