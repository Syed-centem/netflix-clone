import React from 'react';
// Import the specific icons you need
import { MdSearch, MdHome, MdTv, MdLocalMovies, MdAdd } from 'react-icons/md';

function Nav() {
  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-black/95 flex flex-col items-center py-8 z-50 border-r border-gray-800">
      {/* Logo */}
      <div className="text-red-600 font-bold text-2xl mb-12 cursor-pointer">N</div>
      
      {/* Navigation Icons */}
      <nav className="flex flex-col space-y-8 text-gray-400">
        <MdSearch className="w-7 h-7 hover:text-white transition-colors duration-200 cursor-pointer" />
        <MdHome className="w-7 h-7 hover:text-white transition-colors duration-200 cursor-pointer" />
        <MdTv className="w-7 h-7 hover:text-white transition-colors duration-200 cursor-pointer" />
        <MdLocalMovies className="w-7 h-7 hover:text-white transition-colors duration-200 cursor-pointer" />
        <MdAdd className="w-7 h-7 hover:text-white transition-colors duration-200 cursor-pointer" />
      </nav>
    </div>
  );
}

export default Nav;