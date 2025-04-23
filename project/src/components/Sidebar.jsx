import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCompass, FaHistory, FaVideo, FaClock, FaThumbsUp } from 'react-icons/fa';

function Sidebar({ isOpen }) {
  const menuItems = [
    { icon: FaHome, text: 'Home', path: '/' },
    { icon: FaCompass, text: 'Explore', path: '/explore' },
    { icon: FaHistory, text: 'History', path: '/history' },
    { icon: FaVideo, text: 'Your Videos', path: '/your-videos' },
    { icon: FaClock, text: 'Watch Later', path: '/watch-later' },
    { icon: FaThumbsUp, text: 'Liked Videos', path: '/liked' },
  ];

  return (
    <div
      className={`bg-white border-r border-gray-200 p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 w-64 h-full fixed md:relative z-10`}
    >
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              <item.icon className="text-gray-600" />
              <span className="text-gray-700">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
