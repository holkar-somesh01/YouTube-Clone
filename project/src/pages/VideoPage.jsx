
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaThumbsUp, FaShare, FaSave } from 'react-icons/fa';
import VideoPlayer from '../components/VideoPlayer';
import { formatDistanceToNow } from 'date-fns';


export const dummyVideos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'React JS Crash Course 2024',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'An all-in-one React JS crash course for 2024. Perfect for beginners and intermediates.',
    created_at: '2024-01-01T10:00:00Z',
    views_count: 1250000,
    likes_count: 52000,
    subscriber_count: '320K',
    profiles: {
      username: 'Traversy Media',
      avatar_url: 'https://i.pravatar.cc/150?img=1',
    },
  },
  {
    id: 'Ke90Tje7VS0',
    title: 'React Tutorial for Beginners',
    video_url: 'https://www.youtube.com/embed/Ke90Tje7VS0',
    description: 'A complete React tutorial by Mosh for absolute beginners.',
    created_at: '2023-04-15T12:00:00Z',
    views_count: 2500000,
    likes_count: 71000,
    subscriber_count: '800K',
    profiles: {
      username: 'Programming with Mosh',
      avatar_url: 'https://i.pravatar.cc/150?img=2',
    },
  },
  {
    id: 'sbXl-9bGeBo',
    title: 'Tailwind CSS in 1 Hour',
    video_url: 'https://www.youtube.com/embed/sbXl-9bGeBo',
    description: 'Learn how to style your apps beautifully with Tailwind CSS.',
    created_at: '2023-08-10T09:00:00Z',
    views_count: 870000,
    likes_count: 35000,
    subscriber_count: '620K',
    profiles: {
      username: 'The Net Ninja',
      avatar_url: 'https://i.pravatar.cc/150?img=3',
    },
  },
  {
    id: 'Oe421EPjeBE',
    title: 'JavaScript Tutorial - Full Course',
    video_url: 'https://www.youtube.com/embed/Oe421EPjeBE',
    description: 'Full JavaScript course from basics to advanced topics.',
    created_at: '2022-02-20T14:00:00Z',
    views_count: 5600000,
    likes_count: 134000,
    subscriber_count: '1.3M',
    profiles: {
      username: 'freeCodeCamp.org',
      avatar_url: 'https://i.pravatar.cc/150?img=4',
    },
  },
  {
    id: 'YkOSUVzOAA4',
    title: 'Node.js Crash Course',
    video_url: 'https://www.youtube.com/embed/YkOSUVzOAA4',
    description: 'A beginner-friendly crash course on Node.js.',
    created_at: '2023-10-01T15:30:00Z',
    views_count: 930000,
    likes_count: 21000,
    subscriber_count: '490K',
    profiles: {
      username: 'Traversy Media',
      avatar_url: 'https://i.pravatar.cc/150?img=1',
    },
  },
  {
    id: 'kV__iZuxDGE',
    title: 'Learn MongoDB in 50 Minutes',
    video_url: 'https://www.youtube.com/embed/kV__iZuxDGE',
    description: 'MongoDB explained in under an hour with examples.',
    created_at: '2023-06-25T11:00:00Z',
    views_count: 610000,
    likes_count: 17500,
    subscriber_count: '380K',
    profiles: {
      username: 'Web Dev Simplified',
      avatar_url: 'https://i.pravatar.cc/150?img=5',
    },
  },
];


function VideoPage() {
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
    if (userLiked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setUserLiked(!userLiked);
  };

  if (!video) {
    return <div className="p-4">Video not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VideoPlayer url={video.video_url} />

          <div className="bg-white rounded-lg p-4 mt-4">
            <h1 className="text-xl font-bold mb-2">{video.title}</h1>
            <div className="flex items-center justify-between pb-4 border-b">
              <p className="text-gray-600">
                {video.views_count} views •{' '}
                {formatDistanceToNow(new Date(video.created_at), { addSuffix: true })}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-1 ${userLiked ? 'text-blue-600' : ''}`}
                >
                  <FaThumbsUp />
                  <span>{likes}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <FaShare />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1">
                  <FaSave />
                  <span>Save</span>
                </button>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                    {video.profiles?.avatar_url && (
                      <img
                        src={video.profiles.avatar_url}
                        alt={video.profiles.username}
                        className="w-full h-full rounded-full"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{video.profiles?.username}</h3>
                    <p className="text-sm text-gray-600">{video.subscriber_count} subscribers</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-gray-700">{video.description}</p>
            </div>
          </div>

          {/* <Comments videoId={id} /> */}
        </div>

        <div className="space-y-4">
          {/* Suggested videos will go here */}
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
