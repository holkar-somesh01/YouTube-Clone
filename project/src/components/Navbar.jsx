import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaSearch, FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-2">
          <FaYoutube className="text-red-600 text-3xl" />
          <span className="text-xl font-bold">YouTube Clone</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden sm:flex flex-1 max-w-2xl mx-8">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <FaSearch className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="hidden sm:flex items-center space-x-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50">
          <FaUser />
          <span>Sign In</span>
        </button>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
            <FaSearch className="text-2xl" />
          </button>
          <button className="ml-4 px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50">
            <FaUser />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
