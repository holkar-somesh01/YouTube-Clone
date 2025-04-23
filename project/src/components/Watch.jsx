import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { FaThumbsUp, FaShare, FaSave } from 'react-icons/fa';
import { dummyVideos } from '../pages/VideoPage';

function Watch() {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [likes, setLikes] = useState(0);
    const [userLiked, setUserLiked] = useState(false);

    useEffect(() => {
        const found = dummyVideos.find((v) => v.id === id);
        setVideo(found);
        setLikes(found?.likes_count || 0);
    }, [id]);

    const handleLike = () => {
        setLikes(userLiked ? likes - 1 : likes + 1);
        setUserLiked(!userLiked);
    };

    if (!video) return <div className="p-4">Video not found</div>;

    return (
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src={video.video_url}
                        title={video.title}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="bg-white p-4 rounded-lg mt-4 shadow">
                    <h1 className="text-xl font-semibold mb-2">{video.title}</h1>
                    <div className="flex justify-between text-gray-600 text-sm border-b pb-2">
                        <span>{video.views_count.toLocaleString()} views • {formatDistanceToNow(new Date(video.created_at), { addSuffix: true })}</span>
                        <div className="flex gap-4">
                            <button onClick={handleLike} className={`flex items-center gap-1 ${userLiked ? 'text-blue-500' : ''}`}>
                                <FaThumbsUp /> {likes}
                            </button>
                            <button className="flex items-center gap-1"><FaShare /> Share</button>
                            <button className="flex items-center gap-1"><FaSave /> Save</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                            <img src={video.profiles.avatar_url} alt="avatar" className="w-10 h-10 rounded-full" />
                            <div>
                                <h3 className="font-medium">{video.profiles.username}</h3>
                                <p className="text-sm text-gray-500">{video.subscriber_count} subscribers</p>
                            </div>
                        </div>
                        <button className="bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-700">Subscribe</button>
                    </div>

                    <p className="mt-4 text-gray-700">{video.description}</p>
                </div>
            </div>

            <div className="space-y-4">
                {dummyVideos.filter(v => v.id !== id).map(suggestion => (
                    <a href={`/watch/${suggestion.id}`} key={suggestion.id} className="flex gap-4 hover:bg-gray-100 p-2 rounded">
                        <img src={`https://img.youtube.com/vi/${suggestion.id}/mqdefault.jpg`} alt="thumbnail" className="w-40 rounded" />
                        <div>
                            <h4 className="font-medium line-clamp-2">{suggestion.title}</h4>
                            <p className="text-sm text-gray-500">{suggestion.profiles.username}</p>
                            <p className="text-sm text-gray-500">{suggestion.views_count.toLocaleString()} views</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Watch;
