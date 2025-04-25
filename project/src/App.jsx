import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import Explore from './components/Explore';
import Watch from './components/Watch';
import History from './pages/History';
import WatchLater from './components/WatchLater';
import YourVideos from './pages/YourVideo';
import { FaHome, FaCompass, FaHistory, FaThumbsUp } from 'react-icons/fa';
import LikedVideos from './pages/LikedVideos';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video/:id" element={<VideoPage />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/watch/:id" element={<Watch />} />
              <Route path="/history" element={<History />} />
              <Route path="/watch-later" element={<WatchLater />} />
              <Route path="/your-videos" element={<YourVideos />} />
              <Route path="/liked" element={<LikedVideos />} />
            </Routes>
          </main>
        </div>

        {/* Mobile Sidebar Toggle Button */}
        <div className="fixed bottom-4 right-4 md:hidden">
          <button
            onClick={toggleSidebar}
            className="p-3 bg-blue-600 text-white rounded-full shadow-lg">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Bottom Tab Navigation for Mobile */}
        <div className="fixed bottom-0 p-2 px-5 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
          <div className="flex justify-between">
            <Link to="/" className="flex flex-col items-center py-2">
              <FaHome className="text-gray-600" />
              <span className="text-xs text-gray-600">Home</span>
            </Link>
            <Link to="/explore" className="flex flex-col items-center py-2">
              <FaCompass className="text-gray-600" />
              <span className="text-xs text-gray-600">Explore</span>
            </Link>
            <Link to="/history" className="flex flex-col items-center py-2">
              <FaHistory className="text-gray-600" />
              <span className="text-xs text-gray-600">History</span>
            </Link>
            <Link to="/liked" className="flex flex-col items-center py-2">
              <FaThumbsUp className="text-gray-600" />
              <span className="text-xs text-gray-600">Liked</span>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
