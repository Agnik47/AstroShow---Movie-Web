import React, { useEffect, useState } from "react";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../utils/Loader";

const Movies = () => {
  document.title = "AstroShow - Movies";
  const navigate = useNavigate();

  // State for handling the selected option for both dropdowns
  const [categories, setCategories] = useState("top_rated");
  const [movie, setMovie] = useState([]);
  const [hasMore, setHasMore] = useState(true); // For Tracking More Data
  const [page, setPage] = useState(1);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

   // Show the scroll up button when scrolled down a certain amount
   const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };

  // Fetch Movie data
  const getMovie = async () => {
    try {
      const url = `/movie/${categories}?page=${page}`;
      const { data } = await axios.get(url);

      if (data && data.results && data.results.length > 0) {
        // Append new data and keep old data
        setMovie((prevData) => [...prevData, ...data.results]);
        setPage(page + 1); // Increment page for next fetch
      } else {    
        setHasMore(false); // No more data to load
      }
    } catch (error) {
      console.error("Error fetching Movie data:", error);
    }
  };

  const refreshHandler = async () => {
    setMovie([]); // Reset Movie data
    setPage(1); // Reset page number
    setHasMore(true); 
    await getMovie(); 
  };

  useEffect(() => {
    refreshHandler(); // Refresh when category changes
  }, [categories]);

  return categories && movie ? (
    <div className="Popular-Page w-full min-h-screen">
      {/* Scroll Up Button */}
      {showScrollUp && (
        <div
          className="fixed z-50 bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-400 shadow-lg rounded-full cursor-pointer left-1/2 transform -translate-x-1/2 top-[85%] py-2 px-4 flex items-center gap-2 transition-transform duration-300 hover:scale-105 opacity-90 hover:opacity-100 animate-fadeIn"
          onClick={scrollToTop} // Scroll to top on click
        >
          <p className="text-white text-sm mr-2">Scroll Up</p>
          <i className="ri-arrow-up-line text-white text-2xl"></i>
          </div>
        )}

      <div className="Upper Side flex flex-col md:flex-row justify-between  items-center px-5 py-3 md:px-10">
        <h1 className="text-2xl font-bold flex items-center mb-3 md:mb-0 text-white">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white text-2xl cursor-pointer hover:text-[#6556CD] transition-all duration-300 mr-2"
          ></i>{" "}
          Movies 
        </h1>

        <div className="flex items-center w-80%">
          <TopNav SuggestionClass="left-[1%]" fullScreenClass="hidden" className="hidden md:block  w-[55vw] top-6"/>

          {/* Dropdown for category */}
          <Dropdown
            options={["popular", "top_rated", "upcoming" ,"now_playing"]}
            selectedOption={categories}
            onOptionChange={setCategories} // Update selected category
          />
        </div>
      </div>

      {/* The rest of the content */}
      <InfiniteScroll
        dataLength={movie.length} // Current data length
        next={getMovie} // Function to load more data
        hasMore={hasMore} // Whether more data is available
        loader={<h4>Loading...</h4>}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader /> // Show loader while fetching data
  );
};

export default Movies;
