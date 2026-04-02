import React from 'react';

export default function GridSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Delivering good designs since 1954 <span className="text-base">🚗🛡️</span>
          </h2>
          <p className="text-gray-600 mb-6">
            We're the first multi-purpose design kit solutions for businesses. We help you bridge gaps between your layouts, templates and developers to empower all involved.
          </p>
        </div>

        {/* Features Grid - 2x2 на мобильных, 4 в ряд на desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
              {/* 🎭 ИКОНКА #1 - замени на свою SVG/PNG */}
              <span className="text-white text-2xl">💬</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Support</h3>
            <p className="text-sm text-gray-600">
              Delivering faster and more personalized support with shared screens and cool design systems for Figma
            </p>
            <button className="text-blue-600 font-semibold text-sm mt-3 hover:underline">Learn more</button>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
              {/* 🎭 ИКОНКА #2 - замени на свою SVG/PNG */}
              <span className="text-white text-2xl">⏰</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Sales growth</h3>
            <p className="text-sm text-gray-600">
              Identify qualified customers with easy-to-use live chat messaging and AI-based Sales Bot
            </p>
            <button className="text-blue-600 font-semibold text-sm mt-3 hover:underline">Learn more</button>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              {/* 🎭 ИКОНКА #3 - замени на свою SVG/PNG */}
              <span className="text-white text-2xl">⚙️</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Components-driven</h3>
            <p className="text-sm text-gray-600">
              Delivering faster and more personalized support with shared screens and cool design systems for Figma
            </p>
            <button className="text-blue-600 font-semibold text-sm mt-3 hover:underline">Learn more</button>
          </div>

          {/* Feature 4 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
              {/* 🎭 ИКОНКА #4 - замени на свою SVG/PNG */}
              <span className="text-white text-2xl">👍</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Swap the icon</h3>
            <p className="text-sm text-gray-600">
              You can toggle any icon within instances and customize outlined stroke to more bolder or lighter
            </p>
            <button className="text-blue-600 font-semibold text-sm mt-3 hover:underline">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
