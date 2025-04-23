import React, { useState } from 'react';

// Updated videoData with real URLs and thumbnails
const videoData = [
    {
        id: '1',
        title: 'JavaScript for Beginners',
        description: 'Learn the basics of JavaScript programming.',
        thumbnail: 'https://example.com/thumbnail1.jpg', // You can replace this with a real URL
        videoUrl: 'https://www.youtube.com/watch?v=abcd1234',
    },
    {
        id: '2',
        title: 'ReactJS Crash Course',
        description: 'An introduction to building apps with React.',
        thumbnail: 'https://example.com/thumbnail2.jpg', // You can replace this with a real URL
        videoUrl: 'https://www.youtube.com/watch?v=efgh5678',
    },
    {
        id: '3',
        title: 'Understanding Node.js',
        description: 'Dive deep into Node.js and server-side programming.',
        thumbnail: 'https://example.com/thumbnail3.jpg', // You can replace this with a real URL
        videoUrl: 'https://www.youtube.com/watch?v=ijkl91011',
    },
    {
        id: '4',
        title: 'CSS Flexbox Explained',
        description: 'Master CSS Flexbox with this detailed tutorial.',
        thumbnail: 'https://example.com/thumbnail4.jpg', // You can replace this with a real URL
        videoUrl: 'https://www.youtube.com/watch?v=lmnq1234',
    },
    {
        id: '5',
        title: 'Introduction to MongoDB',
        description: 'Learn how to use MongoDB for NoSQL databases.',
        thumbnail: 'https://example.com/thumbnail5.jpg', // You can replace this with a real URL
        videoUrl: 'https://www.youtube.com/watch?v=pqrs5678',
    },
    // Add more videos as needed...
];

const WatchLater = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Function to select a video to play
    const selectVideoToPlay = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div>
            {/* <h1>Watch Later</h1> */}

            {/* Display selected video */}
            {selectedVideo && (
                <div className="selected-video">
                    <h2>{selectedVideo.title}</h2>
                    <iframe
                        width="560"
                        height="315"
                        src={selectedVideo.videoUrl.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")}
                        title={selectedVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Display all available videos */}
            {videoData.length === 0 ? (
                <p>No videos available.</p>
            ) : (
                <div className="video-list">
                    {videoData.map((video) => (
                        <div key={video.id} className="video-card">
                            <img src={video.thumbnail} alt={video.title} width="200" height="120" />
                            <h3>{video.title}</h3>
                            <p>{video.description}</p>
                            <button onClick={() => selectVideoToPlay(video)}>Play</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WatchLater;
