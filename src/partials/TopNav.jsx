import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect"; // Import the Typewriter component from the library
import axios from "../utils/axios";
import noImage from "../accets/no-image.jpg"; // Ensure correct path to no-image

const TopNav = () => {
  const [queery, setQueery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const GetSearch = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${queery}&include_adult=false&language=en-US&page=1`);
      console.log(data);
      setSearchResults(data.results);
    } catch (error) {
       console.log("Erroro aya hai 404: ",error);
    }
  };

  useEffect(() => {
    if (queery.length > 0) {
      GetSearch();
    }
  }, [queery]);

  return (
    <div className="TopNav bar fixed top-0 left-[20%] w-[80%] bg-transparent border-[#363636] h-[10vh] flex justify-center items-center px-10 z-10">
      <div className="InnerInput flex items-center w-[60%] gap-x-4 relative">
        <i className="ri-search-line text-white text-2xl"></i>
        <input
          type="text"
          value={queery}
          onChange={(e) => setQueery(e.target.value)}
          placeholder={queery.length === 0 ? "" : ""}
          className="border-none bg-transparent outline-none text-white p-4 flex-grow mx-4 rounded-lg"
        />

        {/* Static "Search" with Dynamic Words */}
        {queery.length === 0 && (
          <div className="absolute left-[11%] text-white text-lg flex">
            <span className="mr-2">Search</span>
            <Typewriter
              options={{
                strings: ["Movies...", "TV Shows...", "Anime...", "Documentaries...", "Short Films...", "Cartoons..."],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 70,
              }}
            />
          </div>
        )}

        {/* cursor pointer remove search inputs */}
        {queery.length > 0 && (
          <i
            onClick={() => setQueery("")}
            className="ri-close-line text-white text-2xl cursor-pointer"
          ></i>
        )}

        {/* Mic icon */}
        <i className="Mic ri-mic-line text-white text-2xl cursor-pointer"></i>

        {/* Search Button */}
        <button className="bg-[#6556CD] text-white rounded px-4 py-2 hover:bg-[#5043A9] transition-all duration-300">
          <i className="ri-search-line"></i>
        </button>
      </div>

      {/* Suggestion Box  */}
      {queery.length > 0 && (
        <div className="absolute top-[110%] left-[20%] w-[60%] bg-zinc-800 overflow-auto rounded-lg max-h-[50vh]">
          {searchResults.map((movie, index) => (
            <Link
              key={index}
              className="flex items-center gap-x-4 p-4 hover:bg-zinc-700 hover:text-lg transition-all duration-300 border-b-2 border-zinc-700"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                    : movie.profile_path
                    ? `https://image.tmdb.org/t/p/w500${movie.profile_path}`
                    : noImage
                }
                alt={movie.name || movie.original_title || movie.original_name}
                className="w-12 h-12 rounded-lg object-cover "
              />
              <span className="text-white">
                {movie.name || movie.original_title || movie.original_name}
              </span>
            </Link>
          ))}
        </div>
      )}

      <hr className="absolute bottom-0 left-0 w-full border-zinc-700 border-b-4" />
    </div>
  );
};

export default TopNav;
