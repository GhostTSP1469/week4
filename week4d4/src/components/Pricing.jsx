import React from 'react';

export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Individual',
      badge: 'BEST!',
      price: '$8.99',
      period: 'MONTH',
      features: [
        'Unlimited hosting',
        'Free storage',
        'Lifetime support',
        'Constant updates'
      ],
      button: 'Get started!',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      id: 2,
      name: 'Professional',
      badge: 'GOOD!',
      price: '$12.99',
      period: 'MONTH',
      features: [
        'Unlimited hosting',
        'Free storage',
        'Lifetime support',
        'Constant updates'
      ],
      button: 'Select this plan',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      id: 3,
      name: 'Enterprise',
      badge: 'WOW!',
      price: '$32.99',
      period: 'MONTH',
      features: [
        'Unlimited hosting',
        'Free storage',
        'Lifetime support',
        'Constant updates'
      ],
      button: 'Start today!',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Affordable pricing</h2>
          <div className="text-gray-500">
            <span>Bill me </span>
            <span className="text-gray-700 font-semibold">monthly</span>
            <span> • </span>
            <span className="text-gray-700 font-semibold">yearly</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-lg p-6 md:p-8 border ${
                plan.id === 3 ? 'border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white' : 'border-gray-200 bg-white'
              }`}
            >
              {/* Plan Name and Badge */}
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {plan.id === 1 ? '🎁 ' : plan.id === 2 ? '👥 ' : '⭐ '}
                    {plan.name}
                  </h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded ${
                    plan.id === 3 ? 'bg-white text-purple-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.id === 3 ? 'text-purple-200' : 'text-gray-500'}`}>
                  / {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className={`text-lg mt-1 ${plan.id === 3 ? 'text-yellow-300' : 'text-orange-400'}`}>
                      ✓
                    </span>
                    <span className={plan.id === 3 ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className={`w-full py-3 rounded-lg font-semibold text-white transition ${plan.buttonStyle}`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
