// App.js
import React from 'react';

// VideoCard Component
const VideoCard = ({ video }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{video.description}</p>
                </div>
            </div>
        </div>
    );
};

// YourVideos Page
const YourVideos = () => {
    const videos = [
        {
            id: 1,
            title: "React Crash Course",
            description: "Learn React in 1 hour",
            thumbnail: "https://via.placeholder.com/300x200",
        },
        {
            id: 2,
            title: "JavaScript Fundamentals",
            description: "Master JavaScript basics",
            thumbnail: "https://via.placeholder.com/300x200",
        },
        {
            id: 3,
            title: "Node.js Tutorial",
            description: "Build backend with Node.js",
            thumbnail: "https://via.placeholder.com/300x200",
        },
        {
            id: 4,
            title: "Tailwind CSS Introduction",
            description: "How to use Tailwind CSS",
            thumbnail: "https://via.placeholder.com/300x200",
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Videos</h1>
            <div className="flex flex-wrap -m-2">
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

export default YourVideos
