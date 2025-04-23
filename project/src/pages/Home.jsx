import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Video } from 'lucide-react';

function Home() {

  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'React JS Crash Course 2024',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      channel: 'Traversy Media',
      views: '1.2M',
      timestamp: '3 months ago',
    },
    {
      id: 'Ke90Tje7VS0',
      title: 'React Tutorial for Beginners',
      thumbnail: 'https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg',
      channel: 'Programming with Mosh',
      views: '2.5M',
      timestamp: '1 year ago',
    },
    {
      id: 'sbXl-9bGeBo',
      title: 'Tailwind CSS in 1 Hour',
      thumbnail: 'https://img.youtube.com/vi/sbXl-9bGeBo/hqdefault.jpg',
      channel: 'The Net Ninja',
      views: '870K',
      timestamp: '8 months ago',
    },
    {
      id: 'Oe421EPjeBE',
      title: 'JavaScript Tutorial - Full Course',
      thumbnail: 'https://img.youtube.com/vi/Oe421EPjeBE/hqdefault.jpg',
      channel: 'freeCodeCamp.org',
      views: '5.6M',
      timestamp: '2 years ago',
    },
    {
      id: 'YkOSUVzOAA4',
      title: 'Node.js Crash Course',
      thumbnail: 'https://img.youtube.com/vi/YkOSUVzOAA4/hqdefault.jpg',
      channel: 'Traversy Media',
      views: '930K',
      timestamp: '6 months ago',
    },
    {
      id: 'kV__iZuxDGE',
      title: 'Learn MongoDB in 50 Minutes',
      thumbnail: 'https://img.youtube.com/vi/kV__iZuxDGE/hqdefault.jpg',
      channel: 'Web Dev Simplified',
      views: '610K',
      timestamp: '10 months ago',
    },
  ];


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <aside className="w-60 bg-white shadow-md hidden md:block p-4">
        <h2 className="text-xl font-bold mb-6">YouTube</h2>
        <nav className="space-y-3">
          <Link className="block text-gray-700 hover:text-red-500">Home</Link>
          <Link className="block text-gray-700 hover:text-red-500">Trending</Link>
          <Link className="block text-gray-700 hover:text-red-500">Subscriptions</Link>
          <Link className="block text-gray-700 hover:text-red-500">Library</Link>
        </nav>
      </aside> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        {/* <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <Menu className="w-6 h-6 md:hidden" />
            <h1 className="text-lg font-bold text-red-500">YouTube</h1>
          </div>
          <div className="w-full max-w-lg mx-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-3 py-2 outline-none"
              />
              <button className="bg-gray-100 px-3 py-2">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          <Video className="w-6 h-6 text-gray-600" />
        </header> */}

        {/* Video Grid */}
        <main className="p-4 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <Link key={video.id} to={`/video/${video.id}`} className="hover:opacity-90">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-800 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
                    <div className="flex text-sm text-gray-500 mt-1">
                      <span>{video.views} views</span>
                      <span className="mx-1">•</span>
                      <span>{video.timestamp}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
