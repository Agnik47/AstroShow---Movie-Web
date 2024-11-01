import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';

function VideoPlayer() {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytVideo = useSelector(state => state[category]?.info?.videos);

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md z-50 p-4">
      {/* Close Button */}
      <button 
        className="absolute top-72 right-6 sm:top-10 lg:right-14 text-white text-3xl md:text-4xl hover:text-purple-500 transition-colors duration-300 focus:outline-none" 
        onClick={() => navigate(-1)}
      >
        <i className="ri-close-circle-line"></i>
      </button>

      {/* Video Player */}
      <div className="w-full h-auto max-w-[95vw] md:max-w-[80vw] lg:max-w-[70vw] aspect-video">
        <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${ytVideo?.key}`}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
