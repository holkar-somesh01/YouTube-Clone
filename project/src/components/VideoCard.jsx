import React from 'react';

function VideoCard({ video }) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            <div className="p-3">
                <h3 className="font-semibold text-sm">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.channel}</p>
                <p className="text-gray-500 text-xs">{video.views} views • {video.timestamp}</p>
            </div>
        </div>
    );
}

export default VideoCard;
