import React from 'react';

const MovieLoader = () => {
  return (
    <div className="w-full min-h-[100vh]  text-white flex flex-col items-center bg-gray-900 animate-pulse">
      {/* Navigation Skeleton */}
      <nav className="w-full flex items-center gap-5 p-5 md:p-10">
        <div className="w-8 h-8 bg-gray-700 rounded"></div>
        <div className="w-8 h-8 bg-gray-700 rounded"></div>
        <div className="w-16 h-8 bg-gray-700 rounded"></div>
      </nav>

      {/* Main Content Skeleton */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-6xl px-5 md:px-10 py-5">
        {/* Poster Skeleton */}
        <div className="h-80 w-60 bg-gray-700 rounded-lg"></div>

        <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-2/3">
          {/* Title Skeleton */}
          <div className="h-8 bg-gray-700 rounded w-3/4"></div>

          {/* Rating and Details Skeleton */}
          <div className="flex justify-center md:justify-start items-center gap-4 mt-3">
            <div className="h-6 w-12 bg-gray-700 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-700 rounded"></div>
            <div className="h-6 w-32 bg-gray-700 rounded"></div>
          </div>

          {/* Tagline Skeleton */}
          <div className="h-6 bg-gray-700 rounded w-1/2 mt-3"></div>

          {/* Overview Skeleton */}
          <div className="h-6 bg-gray-700 rounded w-2/3 mt-5"></div>
          <div className="h-6 bg-gray-700 rounded w-full"></div>
          <div className="h-6 bg-gray-700 rounded w-5/6"></div>
        </div>
      </div>

      {/* Platforms Section Skeleton */}
      <div className="w-full max-w-6xl px-5 md:px-10 my-10">
        <div className="h-8 bg-gray-700 rounded w-1/4 mb-5"></div>
        <div className="flex gap-5">
          <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
          <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
          <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
        </div>
      </div>

      {/* Recommendations Section Skeleton */}
      {/* <div className="w-full max-w-6xl px-5 md:px-10 mt-10">
        <div className="h-8 bg-gray-700 rounded w-1/3 mb-5"></div>
        <div className="flex gap-4 overflow-hidden">
          <div className="h-52 w-36 bg-gray-700 rounded"></div>
          <div className="h-52 w-36 bg-gray-700 rounded"></div>
          <div className="h-52 w-36 bg-gray-700 rounded"></div>
          <div className="h-52 w-36 bg-gray-700 rounded"></div>
        </div>
      </div> */}


    </div>
  );
};

export default MovieLoader;
