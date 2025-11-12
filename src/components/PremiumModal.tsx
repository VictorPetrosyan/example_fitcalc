import { motion, AnimatePresence } from 'motion/react';
import { X, Crown, Check, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PremiumModal({ isOpen, onClose }: PremiumModalProps) {
  const features = [
    'Unlimited calorie calculations',
    'Advanced macro tracking',
    'Personalized meal plans',
    'Progress tracking & analytics',
    'Ad-free experience',
    'Priority customer support',
    'Export calculation history',
    'Custom nutrition goals',
  ];

  const plans = [
    {
      name: 'Monthly',
      price: '$9.99',
      period: '/month',
      badge: null,
    },
    {
      name: 'Yearly',
      price: '$79.99',
      period: '/year',
      badge: 'Save 33%',
      popular: true,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full p-8 my-8 relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: 'spring' }}
                  className="bg-gradient-to-br from-amber-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <Crown className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-gray-900 mb-2">
                  Upgrade to Premium
                </h2>
                <p className="text-gray-600">
                  Unlock all features and supercharge your fitness journey
                </p>
              </div>

              {/* Plans */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Card
                      className={`relative ${
                        plan.popular
                          ? 'border-2 border-green-500 shadow-xl'
                          : 'border border-gray-200'
                      }`}
                    >
                      {plan.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1 rounded-full flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            <span>{plan.badge}</span>
                          </div>
                        </div>
                      )}
                      <CardContent className="p-6 text-center">
                        <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                        <div className="mb-4">
                          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            {plan.price}
                          </span>
                          <span className="text-gray-600">{plan.period}</span>
                        </div>
                        <Button
                          className={`w-full rounded-xl ${
                            plan.popular
                              ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                              : 'border-2 border-green-600 text-green-600 hover:bg-green-50'
                          }`}
                          variant={plan.popular ? 'default' : 'outline'}
                        >
                          Choose {plan.name}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                <h3 className="text-gray-900 mb-4 text-center">
                  Premium Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className="bg-green-600 rounded-full p-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <p className="text-center text-gray-500 mt-6">
                Cancel anytime. No hidden fees.
              </p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
