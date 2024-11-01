import React, { useEffect, useState } from "react";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../utils/Loader";

const Trending = () => {
  document.title = "AstroShow - Trending";
  const navigate = useNavigate();

  // State for handling the selected option for both dropdowns
  const [categories, setCategories] = useState("movie");
  const [duration, setDuration] = useState("week");
  const [trending, setTrending] = useState([]);
  const [hasMore, setHasMore] = useState(true); //For Tracking More Data
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


  // Function to convert category to API-friendly value
  const convertToApiCategory = (selectedFilter) => {
    switch (selectedFilter) {
      case "TV Shows":
        return "tv";
      case "Movies":
        return "movie";
      default:
        return "all";
    }
  };

 
  

  const getTrending = async () => {
    try {
      const url = `/trending/${categories}/${duration}?page=${page}`;
      const { data } = await axios.get(url);

      if (data.results.length > 0) {
        setTrending((prevData) => [...prevData, ...data.results]); // Append new data and Old data ko Bhi save karna hai
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };

  // console.log("Categories:", categories);
  // console.log("Duration:", duration);

  const refreshHandler = async () => {
    if (trending.length === 0) {
      setTrending([]);
      setPage(1);
      setHasMore(true);
      await getTrending();
    } else {
      setTrending([]);
      setPage(1);
      //Set
    }
  };


  useEffect(() => {
    refreshHandler();
    getTrending();
  }, [categories, duration]);

  return categories && trending ? (
    <div className="Trending-Page w-full h-screen  " id="Trending-Page">
      
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


      <div className="Upper Side flex flex-col md:flex-row justify-between items-center px-5 py-3 md:px-10">
        <h1 className="text-2xl font-bold flex items-center mb-3 md:mb-0 text-white">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white cursor-pointer hover:text-[#6556CD] transition-colors mr-2"
          ></i>
          Trending
        </h1>

        <div className="flex items-center space-x-4">
          <TopNav SuggestionClass="left-[1%]" fullScreenClass="hidden" className="hidden md:block  w-[40vw] top-6 " />
          <Dropdown
            options={["all", "movie", "tv"]}
            selectedOption={categories}
            onOptionChange={setCategories}
          />
          <Dropdown
            options={["day", "week"]}
            selectedOption={duration}
            onOptionChange={setDuration}
          />
        </div>
      </div>

      {/* The rest of the content */}
      <InfiniteScroll
        dataLength={trending.length} // Current data length
        next={getTrending} // Function to load more data
        hasMore={hasMore} // Whether more data is available
        loader={<h4>Loading...</h4>}
      >
        <Cards data={trending} title={categories} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
