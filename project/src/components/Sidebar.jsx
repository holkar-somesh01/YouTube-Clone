// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaCompass, FaHistory, FaVideo, FaClock, FaThumbsUp } from 'react-icons/fa';
// import { ChevronDown, LogOut, Settings, User } from "lucide-react";

// function Sidebar({ isOpen }) {
//   const [open, setOpen] = useState(false);
//   const menuItems = [
//     { icon: FaHome, text: 'Home', path: '/' },
//     { icon: FaCompass, text: 'Explore', path: '/explore' },
//     { icon: FaHistory, text: 'History', path: '/history' },
//     { icon: FaVideo, text: 'Your Videos', path: '/your-videos' },
//     { icon: FaClock, text: 'Watch Later', path: '/watch-later' },
//     { icon: FaThumbsUp, text: 'Liked Videos', path: '/liked' },
//   ];

//   return (
//     <div
//       className={`bg-white border-r border-gray-200 py-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:translate-x-0 w-64 h-full fixed md:relative z-10`}
//     >
//       <ul className="space-y-2 p-2">
//         {menuItems.map((item, index) => (
//           <li key={index}>
//             <Link
//               to={item.path}
//               className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100"
//             >
//               <item.icon className="text-gray-600" />
//               <span className="text-gray-700">{item.text}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <ul>
//         <div className="w-full bottom-0 fixed">
//           <button
//             onClick={() => setOpen(!open)}
//             className="flex items-center w-full p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
//           >
//             <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full">
//               <User className="w-5 h-5" />
//             </div>
//             <span className="ml-3 text-sm font-semibold text-gray-800">John Doe</span>
//             <ChevronDown
//               className={`w-4 h-4 ml-auto text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
//             />
//           </button>

//           {open && (
//             <div className="absolute z-10 bottom-10 left-0 right-0 mt-2 bg-white shadow-lg overflow-hidden">
//               <ul className="py-1">
//                 {[
//                   { icon: <User className="w-4 h-4 mr-2" />, label: "Profile" },
//                   { icon: <Settings className="w-4 h-4 mr-2" />, label: "Settings" },
//                   { icon: <LogOut className="w-4 h-4 mr-2" />, label: "Logout" },
//                 ].map((item, idx) => (
//                   <li key={idx} className='rounded-none'>
//                     <button className="flex items-center w-full px-4 py-2 text-sm bg-white text-gray-700 hover:bg-gray-100">
//                       {item.icon} {item.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;











import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCompass, FaHistory, FaVideo, FaClock, FaThumbsUp } from 'react-icons/fa';
import { ChevronDown, LogOut, Settings, User } from "lucide-react";

function Sidebar({ isOpen }) {
  const [open, setOpen] = useState(false);
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
      className={`bg-white border-r border-gray-200 py-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 w-64 h-full fixed md:relative z-10`}
    >
      <ul className="space-y-2 p-2">
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
      <ul>
        <div className="w-full bottom-0 fixed">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center w-full p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full">
              <User className="w-5 h-5" />
            </div>
            <span className="ml-3 text-sm font-semibold text-gray-800">John Doe</span>
            <ChevronDown
              className={`w-4 h-4 ml-auto text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="absolute z-10 bottom-10 left-0 right-0 mt-2 bg-white shadow-lg overflow-hidden">
              <ul className="py-1">
                {[
                  { icon: <User className="w-4 h-4 mr-2" />, label: "Profile" },
                  { icon: <Settings className="w-4 h-4 mr-2" />, label: "Settings" },
                  { icon: <LogOut className="w-4 h-4 mr-2" />, label: "Logout" },
                ].map((item, idx) => (
                  <li key={idx} className='rounded-none'>
                    <button className="flex items-center w-full px-4 py-2 text-sm bg-white text-gray-700 hover:bg-gray-100">
                      {item.icon} {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
