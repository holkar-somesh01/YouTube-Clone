import React from 'react';

// VideoCard Component
const VideoCard = ({ video }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
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
        // 🎓 Educational Videos
        {
            id: 1,
            title: "React Crash Course",
            description: "Learn React in 1 hour with real examples.",
            thumbnail: "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
        },
        {
            id: 2,
            title: "JavaScript Tutorial for Beginners",
            description: "Master JavaScript with this complete guide.",
            thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/hqdefault.jpg",
        },
        {
            id: 3,
            title: "Node.js Tutorial",
            description: "Learn Node.js and backend fundamentals.",
            thumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg",
        },
        {
            id: 4,
            title: "Tailwind CSS Tutorial",
            description: "Build beautiful UIs with Tailwind CSS.",
            thumbnail: "https://img.youtube.com/vi/dFgzHOX84xQ/hqdefault.jpg",
        },
        {
            id: 5,
            title: "MongoDB Crash Course",
            description: "Get started with MongoDB in this video.",
            thumbnail: "https://img.youtube.com/vi/4Z9KEBexzcM/hqdefault.jpg",
        },

        // 🎭 Comedy / Entertainment Videos
        {
            id: 6,
            title: "BB Ki Vines - Angry Masterji",
            description: "Classic comedy by Bhuvan Bam.",
            thumbnail: "https://img.youtube.com/vi/PJxtBTr4mI8/hqdefault.jpg",
        },
        {
            id: 7,
            title: "Ashish Chanchlani - Exams Ka Mausam",
            description: "Funny take on exam stress.",
            thumbnail: "https://img.youtube.com/vi/o5Vz_mphSyQ/hqdefault.jpg",
        },
        {
            id: 8,
            title: "Zakir Khan - Sakht Launda",
            description: "Iconic stand-up by Zakir Khan.",
            thumbnail: "https://img.youtube.com/vi/tWzpN1spCho/hqdefault.jpg",
        },
        {
            id: 9,
            title: "Harsh Beniwal - Types Of Students Before Exams",
            description: "Relatable exam time comedy.",
            thumbnail: "https://img.youtube.com/vi/2o_jZv4_8vI/hqdefault.jpg",
        },
        {
            id: 10,
            title: "Just Sul - Instagram Compilation",
            description: "Hilarious Instagram comedy reels.",
            thumbnail: "https://img.youtube.com/vi/j5SgV9DlRgk/hqdefault.jpg",
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">🎬 Your Videos</h1>
            <div className="flex flex-wrap -m-2">
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

export default YourVideos;
