import React from 'react';
import { Link } from 'react-router-dom';

const dummyHistory = [
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
            avatar_url: 'https://yt3.ggpht.com/ytc/AMLnZu_UpHiI3uW2smxWxSyFCuQUbiTfZ0NzC1eL0A=s88-c-k-c0x00ffffff-no-rj',
        },
        watchedAt: '2024-04-20T12:00:00Z',
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
            avatar_url: 'https://yt3.ggpht.com/ytc/AMLnZu_MoshAvatar=s88-c-k-c0x00ffffff-no-rj',
        },
        watchedAt: '2024-04-18T14:00:00Z',
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
            avatar_url: 'https://yt3.googleusercontent.com/ytc/AMLnZu8NinjaAvatar=s88-c-k-c0x00ffffff-no-rj',
        },
        watchedAt: '2024-04-19T08:30:00Z',
    },
    {
        id: 'zJSY8tbf_ys',
        title: 'JavaScript Full Course (2024)',
        video_url: 'https://www.youtube.com/embed/zJSY8tbf_ys',
        description: 'Everything you need to learn JavaScript in one video!',
        created_at: '2024-02-01T11:00:00Z',
        views_count: 3400000,
        likes_count: 98000,
        subscriber_count: '1.1M',
        profiles: {
            username: 'freeCodeCamp.org',
            avatar_url: 'https://yt3.ggpht.com/ytc/AMLnZu_FCCAvatar=s88-c-k-c0x00ffffff-no-rj',
        },
        watchedAt: '2024-04-17T10:00:00Z',
    },
    {
        id: 'RVhgb6yfq4E',
        title: 'BB Ki Vines - Papa Makhichoos',
        video_url: 'https://www.youtube.com/embed/RVhgb6yfq4E',
        description: 'Hilarious episode featuring BB’s iconic characters.',
        created_at: '2022-07-10T15:00:00Z',
        views_count: 18000000,
        likes_count: 960000,
        subscriber_count: '26M',
        profiles: {
            username: 'BB Ki Vines',
            avatar_url: 'https://yt3.ggpht.com/ytc/AMLnZu8BBAvatar=s88-c-k-c0x00ffffff-no-rj',
        },
        watchedAt: '2024-04-16T17:45:00Z',
    },
];

function History() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Watch History</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {dummyHistory.map((video) => (
                    <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <iframe
                            src={video.video_url}
                            title={video.title}
                            className="w-full h-56"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{video.title}</h2>
                            <p className="text-gray-600 text-sm">{video.description}</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                                    <img
                                        src={video.profiles.avatar_url}
                                        alt={video.profiles.username}
                                        className="w-full h-full rounded-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium">{video.profiles.username}</h3>
                                    <p className="text-sm text-gray-600">{video.subscriber_count} subscribers</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                                Watched on {new Date(video.watchedAt).toLocaleString()}
                            </p>
                        </div>
                        <Link
                            to={`/watch/${video.id}`}
                            className="block text-center py-2 bg-blue-600 text-white rounded-b-lg hover:bg-blue-700"
                        >
                            Rewatch
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default History;
