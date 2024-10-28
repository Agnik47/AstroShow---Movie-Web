import React, { useState } from "react";
import { Link } from "react-router-dom";

// Header component that receives wallpaperData as a prop
const Header = ({ wallpaperData }) => {
  // Logs the wallpaper data for debugging purposes
  // console.log(wallpaperData);
  const [showFullOverview, setShowFullOverview] = useState(false);

  // Function to toggle between short and full overview
  const handleShowMore = () => {
    setShowFullOverview(true);
  };

  const overviewText = wallpaperData.overview || "No overview available";
  const isLongText = overviewText.length > 300;

  // Determines the background image URL based on available data (backdrop, poster, or profile path)
  const backgroundImageUrl =
    wallpaperData.backdrop_path ||
    wallpaperData.poster_path ||
    wallpaperData.profile_path;

  return (
    // Container div for the entire header with a dynamic background image and gradient overlay
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
      }}
      className="w-full h-[60vh]  relative animate-fade-in" // Tailwind for width, height, margin, and animation
    >

      {/* Content wrapper to hold the text and buttons, using flexbox for positioning */}
      <div className="w-full h-full flex flex-col justify-center items-start px-8 md:px-16">
        {/* Dynamic title, displaying title, name, or original name */}
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 mt-[10vw]">
          {wallpaperData.title ||
            wallpaperData.name ||
            wallpaperData.original_title ||
            wallpaperData.original_name}
        </h1>

        {/* Overview text of the media content */}
        <p className="text-white text-sm md:text-lg max-w-[80%] mb-6">
      {showFullOverview
        ? overviewText
        : `${overviewText.slice(0, 300)}${isLongText ? "..." : ""}`}
        
      {isLongText && !showFullOverview && (
        <span
          className="text-blue-500 hover:cursor-pointer"
          onClick={handleShowMore}
        >
          {" "}more...
        </span>
      )}
    </p>

        {/* Conditionally render release date if it's available with a speaker icon */}
        {wallpaperData.release_date && (
          <div className="flex items-center mb-4">
            <i className="ri-calendar-line mr-2 text-white text-lg"></i>
            <p className="text-white text-sm md:text-base">
              Release Date: {wallpaperData.release_date}
            </p>
          </div>
        )}

        {/* Buttons for "Watch Trailer" and "My List" actions */}
        <div className="flex gap-x-4">
          {/* Play button with an icon and hover effect */}
          <Link to={`/${wallpaperData.media_type || title}/details/${wallpaperData.id}`} className="flex items-center bg-[#6556CD] text-white rounded px-4 py-2 text-sm md:text-base hover:bg-[#5043A9] transition-all duration-300">
            <i className="ri-play-line mr-2"></i>Watch Trailer
          </Link>

          {/* My List button with an icon and hover effect */}
          <Link to={`/mylist`} className="flex items-center bg-[#6556CD] text-white rounded px-4 py-2 text-sm md:text-base hover:bg-[#5043A9] transition-all duration-300">
            <i className="ri-bookmark-line mr-2"></i>My List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;