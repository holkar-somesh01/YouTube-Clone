import React, { useState } from 'react';

const videoData = [
    {
        id: '1',
        title: 'JavaScript Full Course (2023)',
        description: 'Learn JavaScript from scratch in this full course.',
        thumbnail: 'https://img.youtube.com/vi/PkZNo7MFNFg/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
    },
    {
        id: '2',
        title: 'React JS Crash Course',
        description: 'React JS tutorial for beginners.',
        thumbnail: 'https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
    },
    {
        id: '3',
        title: 'Node.js Tutorial for Beginners',
        description: 'Start building backend applications with Node.js.',
        thumbnail: 'https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
    },
    {
        id: '4',
        title: 'CSS Flexbox in 20 Minutes',
        description: 'Master CSS Flexbox layout quickly.',
        thumbnail: 'https://img.youtube.com/vi/JJSoEo8JSnc/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=JJSoEo8JSnc',
    },
    {
        id: '5',
        title: 'MongoDB Tutorial for Beginners',
        description: 'Introduction to MongoDB and NoSQL database.',
        thumbnail: 'https://img.youtube.com/vi/4Z9KEBexzcM/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=4Z9KEBexzcM',
    },
    {
        id: '6',
        title: 'TypeScript in 100 Seconds',
        description: 'A quick intro to TypeScript for JavaScript devs.',
        thumbnail: 'https://img.youtube.com/vi/zQnBQ4tB3ZA/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=zQnBQ4tB3ZA',
    },
    {
        id: '7',
        title: 'Tailwind CSS Crash Course',
        description: 'Build beautiful websites fast with Tailwind CSS.',
        thumbnail: 'https://img.youtube.com/vi/dFgzHOX84xQ/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=dFgzHOX84xQ',
    },
];

const WatchLater = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideoToPlay = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">📺 Watch Later</h1>

            {/* Display selected video */}
            {selectedVideo && (
                <div className="mb-6 max-w-4xl mx-auto">
                    <h2 className="text-xl font-semibold mb-2 text-center">{selectedVideo.title}</h2>
                    <iframe
                        width="100%"
                        height="400"
                        src={selectedVideo.videoUrl.replace("watch?v=", "embed/")}
                        title={selectedVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full rounded-xl shadow-md"
                    ></iframe>
                </div>
            )}

            {/* Display all available videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videoData.map((video) => (
                    <div key={video.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="rounded mb-3 w-full h-40 object-cover cursor-pointer"
                            onClick={() => selectVideoToPlay(video)}
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
                        <p className="text-sm text-gray-500">{video.description}</p>
                        <button
                            onClick={() => selectVideoToPlay(video)}
                            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm"
                        >
                            ▶️ Play
                        </button>
                    </div>
                ))}
            </div>

            {videoData.length === 0 && (
                <p className="text-center text-gray-500 mt-10 text-lg">No videos available.</p>
            )}
        </div>
    );
};

export default WatchLater;
