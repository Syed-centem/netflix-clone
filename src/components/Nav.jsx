import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSearch, MdHome, MdTv, MdLocalMovies, MdAdd, MdLogout } from 'react-icons/md';

function Nav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a full app, you might also clear localStorage or state here
    navigate('/'); // Send the user back to the Login screen
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-black/95 flex flex-col items-center py-8 z-50 border-r border-gray-800">
      {/* Logo */}
      <div className="text-red-600 font-bold text-2xl mb-12 cursor-pointer">N</div>
      
      {/* Main Navigation Icons */}
      <nav className="flex flex-col space-y-8 text-gray-400 flex-1">
        <MdSearch className="w-7 h-7 hover:text-white transition-colors duration-200 cursor-pointer" title="Search" />
        <MdHome className="w-7 h-7 hover:text-white transition-colors duration-200 cursor-pointer" title="Home" />
        <MdTv className="w-7 h-7 hover:text-white transition-colors duration-200 cursor-pointer" title="TV Shows" />
        <MdLocalMovies className="w-7 h-7 hover:text-white transition-colors duration-200 cursor-pointer" title="Movies" />
        <MdAdd className="w-7 h-7 hover:text-white transition-colors duration-200 cursor-pointer" title="My List" />
      </nav>

      {/* Logout Button at the bottom */}
      <div className="mt-auto text-gray-400">
        <MdLogout 
          onClick={handleLogout}
          className="w-7 h-7 hover:text-red-600 transition-colors duration-200 cursor-pointer" 
          title="Logout"
        />
      </div>
    </div>
  );
}

export default Nav;
