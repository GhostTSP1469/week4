import React from 'react';
import gridicon from '../assets/icon-layout.png'
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Desktop Version */}
          <div className="hidden md:flex justify-between items-center">
            {/* Left: Logo + Grid Text */}
            <div className="flex items-center gap-3">
             
              <img src={gridicon} alt="Grid Icon" />
              <span className="font-bold text-2xl text-black">Grid</span>
             </div>

            {/* Center: Navigation with yellow dots */}
            <nav className="flex items-center gap-2">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">How it works</a>
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Who we are</a>
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">What we do</a>
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Contact us</a>
            </nav>

            {/* Right: Sign In Button */}
            <button className="bg-purple-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-purple-700">
              Sign In
            </button>
          </div>

          {/* Mobile Version */}
          <div className="md:hidden flex justify-between items-center">
            {/* Left: Burger Menu */}
            <button 
              onClick={this.toggleMenu}
              className="text-2xl text-gray-700"
            >
              ☰
            </button>

            {/* Center: Grid Text */}
            <span className="font-bold text-xl text-black">Grid</span>

            {/* Right: Sign In Button */}
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700">
              Sign In
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold">How it works</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold">Who we are</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold">What we do</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold">Contact us</a>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  }
}

