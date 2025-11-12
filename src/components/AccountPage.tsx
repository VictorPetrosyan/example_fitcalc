import { motion } from 'motion/react';
import { User, Calendar, TrendingUp, Award, History } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface AccountPageProps {
  user: { name: string; email: string };
  onLogout: () => void;
}

export function AccountPage({ user, onLogout }: AccountPageProps) {
  // Mock saved calculations
  const savedCalculations = [
    {
      id: 1,
      date: '2025-11-10',
      calories: 2150,
      protein: 150,
      carbs: 242,
      fats: 65,
      goal: 'Lose Weight',
    },
    {
      id: 2,
      date: '2025-11-08',
      calories: 2300,
      protein: 161,
      carbs: 259,
      fats: 70,
      goal: 'Maintain Weight',
    },
    {
      id: 3,
      date: '2025-11-05',
      calories: 2000,
      protein: 140,
      carbs: 225,
      fats: 60,
      goal: 'Lose Weight',
    },
  ];

  const stats = [
    {
      label: 'Calculations Made',
      value: '12',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
    },
    {
      label: 'Days Active',
      value: '45',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Achievements',
      value: '8',
      icon: Award,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">Welcome, {user.name}!</h1>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <Button
              onClick={onLogout}
              variant="outline"
              className="rounded-full border-2"
            >
              Logout
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 mb-2">{stat.label}</p>
                      <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                    </div>
                    <div className={`bg-gradient-to-br ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Calculation History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="w-6 h-6 text-green-600" />
                Calculation History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savedCalculations.map((calc, index) => (
                  <motion.div
                    key={calc.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-600" />
                          <span className="text-gray-600">{calc.date}</span>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {calc.goal}
                          </span>
                        </div>
                        <div className="text-gray-900">
                          Target: {calc.calories} kcal/day
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-gray-600">Protein</p>
                          <p className="text-orange-600">{calc.protein}g</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-600">Carbs</p>
                          <p className="text-blue-600">{calc.carbs}g</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-600">Fats</p>
                          <p className="text-amber-600">{calc.fats}g</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Premium Upsell */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Upgrade to Premium</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get unlimited calculations, advanced tracking, personalized meal plans, and more!
              </p>
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full px-8">
                Upgrade Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
