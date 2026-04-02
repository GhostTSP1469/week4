import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-yellow-50 to-white py-8 md:py-16 overflow-hidden">
      {/* Декоративные жёлтые точки в фоне */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-30">
        <div className="flex flex-wrap gap-3">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-yellow-300 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Title с фоновым элементом */}
        <div className="text-center mb-8 md:mb-12 relative">
          {/* Фоновая волнистая фигура за "fine" */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-64 h-20 bg-gradient-to-b from-green-200 to-green-300 rounded-full blur-3xl -z-0"></div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Combine <span className="relative">
              <span className="text-red-500 font-extrabold">fine</span>
              {/* Зеленая декоративная штука под "fine" */}
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-green-400 rounded-full" style={{transform: 'translateY(8px)'}}></div>
            </span> images
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-6">
            To represent a product
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="bg-black text-white p-6 rounded-lg h-40 md:h-48 flex items-center justify-center">
             
              <span className="text-sm text-center">We aimed to deliver HQ templates for Free! Used by 123 people</span>
            </div>
          </div>

        
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-purple-300 to-purple-500 rounded-lg h-48 md:h-80 flex items-center justify-center">
             
              <div className="text-white text-center">
                <p className="text-xl md:text-2xl font-bold">Consider it done!</p>
              </div>
            </div>
          </div>

         
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="bg-blue-400 rounded-lg h-24 md:h-24 flex items-center justify-center">
             
              <span className="text-white text-center text-sm">Product Image</span>
            </div>
            <div className="bg-gray-300 rounded-lg h-20 md:h-24 flex items-center justify-center">
             
              <span className="text-gray-600 text-center text-sm">Image</span>
            </div>
          </div>
        </div>

       
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-orange-400 rounded-lg h-24 md:h-32 flex items-center justify-center">
     
            <span className="text-white text-center text-sm">Orange Design</span>
          </div>

          <div className="bg-pink-400 rounded-lg h-24 md:h-32 flex items-center justify-center">
           
            <div className="text-white text-center">
              <p className="font-bold">See my goal?</p>
            </div>
          </div>

          <div className="bg-gray-400 rounded-lg h-24 md:h-32 flex items-center justify-center">
           
            <span className="text-gray-600 text-center text-sm">Image</span>
          </div>
        </div>


        <div className="mt-8 text-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

