import React, { useEffect, useState } from "react";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../utils/Loader";

const People = () => {
  document.title = "AstroShow - People";
  const navigate = useNavigate();

  // State for handling the selected option for both dropdowns
  const [categories, setCategories] = useState("popular");
  const [people, setPeople] = useState([]);
  const [hasMore, setHasMore] = useState(true); // For Tracking More Data
  const [page, setPage] = useState(1);
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fetch people data
  const getPeople = async () => {
    try {
      const url = `/person/${categories}?page=${page}`;
      const { data } = await axios.get(url);

      if (data && data.results && data.results.length > 0) {
        // Append new data and keep old data
        setPeople((prevData) => [...prevData, ...data.results]);
        setPage(page + 1); // Increment page for next fetch
      } else {    
        setHasMore(false); // No more data to load
      }
    } catch (error) {
      console.error("Error fetching people data:", error);
    }
  };

  const refreshHandler = async () => {
    setPeople([]); // Reset people data
    setPage(1); // Reset page number
    setHasMore(true); // Allow loading more data
    await getPeople(); // Fetch data again
  };

  useEffect(() => {
    refreshHandler(); // Refresh when category changes
  }, [categories]);

  // Show scroll-up button when scrolled down
  const handleScroll = (e) => {
    setShowScrollUp(e.target.documentElement.scrollTop > 300);
  };

  return categories && people ? (
    <div className="Popular-Page w-full h-screen" onScroll={handleScroll}>
      
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

      <div className="Upper-Side w-full flex items-center justify-between px-[2vw]">
        <h1 className="text-white text-2xl font-bold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white text-2xl cursor-pointer hover:text-[#6556CD] transition-all duration-300"
          ></i>{" "}
          People 
        </h1>

        <div className="flex items-center w-80%">
          <TopNav SuggestionClass="left-[1%]" fullScreenClass="hidden" className="hidden md:block w-[60vw] top-6" />
          {/* Dropdown for category */}
          <Dropdown
            options={["popular", "top_rated", "trending"]}
            selectedOption={categories}
            onOptionChange={setCategories} // Update selected category
          />
        </div>
      </div>

      {/* Content with infinite scroll */}
      <InfiniteScroll
        dataLength={people.length} // Current data length
        next={getPeople} // Function to load more data
        hasMore={hasMore} // Whether more data is available
        loader={<h4>Loading...</h4>}
      >
        <Cards data={people} title="person" ratingClass="hidden" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader /> // Show loader while fetching data
  );
};

export default People;
