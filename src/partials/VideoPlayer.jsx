import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
function VideoPlayer() {
  const {pathname} = useLocation();
  const catagory = pathname.includes("movie") ? "movie" : "tv";
  const ytVideo = useSelector(state => state[catagory].info.videos);
  console.log(ytVideo);
  

    const navigate = useNavigate();

  return (
    <div className='w-full h-screen absolute top-0 left-0 backdrop-blur-md flex justify-center items-center '>
        {/* <h1 className='text-white text-6xl font-bold'>Video Player Will Add Soon...</h1> */}
        <i className='ri-close-circle-line text-white text-4xl  absolute top-5 right-5 cursor-pointer hover:text-purple-500 transition-colors duration-300' onClick={() => navigate(-1)}></i>

        <ReactPlayer 
        url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
        width={1450}
        height={800}
        controls= {true}

        />
    </div>
  )
}

export default VideoPlayer