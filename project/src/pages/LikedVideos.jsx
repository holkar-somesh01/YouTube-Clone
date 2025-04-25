import React, { useState } from "react";

const LikedVideos = () => {
    const [likedVideos, setLikedVideos] = useState([
        {
            id: "dQw4w9WgXcQ",
            title: "Rick Astley - Never Gonna Give You Up",
            channel: "RickAstleyVEVO",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        },
        {
            id: "3JZ_D3ELwOQ",
            title: "Imagine Dragons - Believer",
            channel: "ImagineDragons",
            thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
        },
        {
            id: "fRh_vgS2dFE",
            title: "Justin Bieber - Sorry",
            channel: "JustinBieberVEVO",
            thumbnail: "https://img.youtube.com/vi/fRh_vgS2dFE/hqdefault.jpg",
        },
        {
            id: "ktvTqknDobU",
            title: "Imagine Dragons - Radioactive",
            channel: "ImagineDragons",
            thumbnail: "https://img.youtube.com/vi/ktvTqknDobU/hqdefault.jpg",
        },
        {
            id: "RgKAFK5djSk",
            title: "Wiz Khalifa - See You Again ft. Charlie Puth",
            channel: "Wiz Khalifa",
            thumbnail: "https://img.youtube.com/vi/RgKAFK5djSk/hqdefault.jpg",
        },
        {
            id: "hT_nvWreIhg",
            title: "OneRepublic - Counting Stars",
            channel: "OneRepublicVEVO",
            thumbnail: "https://img.youtube.com/vi/hT_nvWreIhg/hqdefault.jpg",
        },
        {
            id: "OPf0YbXqDm0",
            title: "Mark Ronson - Uptown Funk ft. Bruno Mars",
            channel: "MarkRonsonVEVO",
            thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg",
        },
        {
            id: "2Vv-BfVoq4g",
            title: "Ed Sheeran - Perfect",
            channel: "Ed Sheeran",
            thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
        },
        {
            id: "pRpeEdMmmQ0",
            title: "Shakira - Waka Waka (This Time for Africa)",
            channel: "shakiraVEVO",
            thumbnail: "https://img.youtube.com/vi/pRpeEdMmmQ0/hqdefault.jpg",
        },
        {
            id: "uelHwf8o7_U",
            title: "Eminem - Love The Way You Lie ft. Rihanna",
            channel: "EminemVEVO",
            thumbnail: "https://img.youtube.com/vi/uelHwf8o7_U/hqdefault.jpg",
        },
    ]);


    const [selectedVideo, setSelectedVideo] = useState(null)

    const handleRemove = (id) => {
        setLikedVideos(prev => prev.filter(video => video.id !== id));
        if (selectedVideo === id) setSelectedVideo(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Liked Videos</h1>

            {selectedVideo && (
                <div className="mb-6">
                    <iframe
                        width="100%"
                        height="400"
                        src={`https://www.youtube.com/embed/${selectedVideo}`}
                        title="YouTube video player"
                        allowFullScreen
                        className="rounded-xl shadow-lg w-full"
                    />
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {likedVideos.map(video => (
                    <div
                        key={video.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3 cursor-pointer relative"
                    >
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="rounded-lg mb-3 w-full"
                            onClick={() => setSelectedVideo(video.id)}
                        />
                        <h2 className="text-lg font-semibold text-gray-800">{video.title}</h2>
                        <p className="text-sm text-gray-500">{video.channel}</p>
                        <button
                            onClick={() => handleRemove(video.id)}
                            className="absolute bottom-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            {likedVideos.length === 0 && (
                <p className="text-center text-gray-500 mt-10 text-lg">No liked videos available.</p>
            )}
        </div>
    );
};

export default LikedVideos;
