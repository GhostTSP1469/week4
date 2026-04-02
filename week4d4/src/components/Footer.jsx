import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Information Section */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">About Fapster App</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Get In Touch!</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Energy We Use</a></li>
            </ul>
          </div>

          {/* Follow Us - Left */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Follow us</h4>
            <div className="flex gap-3">
              {/* 🎭 ИКОНКИ СОЦСЕТЕЙ - замени на свои */}
              <a href="#" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600">📱</a>
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">💼</a>
              <a href="#" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600">🔷</a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500">𝕏</a>
            </div>
          </div>

          {/* Organized / Action */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Organized / Action</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">We are hiring!</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Resources</a></li>
            </ul>
          </div>

          {/* Keep in Touch */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Keep in Touch</h4>
            <p className="text-sm text-gray-300 mb-3">Your name</p>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 bg-gray-800 text-white text-sm rounded mb-3 border border-gray-700 focus:border-purple-500 outline-none"
            />
            <textarea
              placeholder="Leave your message!"
              rows="2"
              className="w-full px-3 py-2 bg-gray-800 text-white text-sm rounded mb-3 border border-gray-700 focus:border-purple-500 outline-none"
            ></textarea>
            <button className="w-full bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700">
              SEND
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 text-sm text-gray-400">
          <p className="mb-4">
            Copyright © 2018 • Your Company
            <br />
            <a href="mailto:hello@fasteredapp.com" className="text-purple-400 hover:text-purple-300">hello@fasteredapp.com</a>
            <br />
            All rights reserved.
            <br />
            Made in
            <a href="#" className="text-purple-400 hover:text-purple-300"> fateredapp.com</a>
          </p>
        </div>

        {/* Bottom Follow Section */}
        <div className="mt-8 text-center">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Follow us</h4>
          <div className="flex justify-center gap-3">
            <a href="#" className="w-8 h-8 text-gray-400 hover:text-white">📱</a>
            <a href="#" className="w-8 h-8 text-gray-400 hover:text-white">💼</a>
            <a href="#" className="w-8 h-8 text-gray-400 hover:text-white">🔷</a>
            <a href="#" className="w-8 h-8 text-gray-400 hover:text-white">𝕏</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
