import React from 'react';
import { Link } from 'react-router-dom';
import { dummyVideos } from '../pages/VideoPage';

function Explore() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore Videos</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {dummyVideos.map((video) => (
                    <Link key={video.id} to={`/watch/${video.id}`}>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img
                                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                alt={video.title}
                                className="w-full h-56 object-cover rounded-t-xl"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-xl text-gray-900 truncate">{video.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{video.profiles.username}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {video.views_count.toLocaleString()} views
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Explore;
