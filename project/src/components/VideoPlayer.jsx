import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ url }) {
  return (
    <div className="aspect-video">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        playing
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
            },
          },
        }}
      />
    </div>
  );
}

export default VideoPlayer