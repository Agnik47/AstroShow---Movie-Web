import React, { useEffect, useState } from "react";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  document.title = "AstroShow - Trending";
  const navigate = useNavigate();

  // State for handling the selected option for both dropdowns
  const [categories, setCategories] = useState("movie");
  const [duration, setDuration] = useState("week");
  const [trending, setTrending] = useState([]);
  const [hasMore, setHasMore] = useState(true); //For Tracking More Data
  const [page, setPage] = useState(1);

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
      const url = `/trending/${categories}/${duration}`;
      const { data } = await axios.get(url);
      setTrending((prevData) => [...prevData, ...data.results]); // Append new data and Old data ko Bhi save karna hai  
      setHasMore(data.results.length > 0); // Check if more data is available
      setPage(page + 1);
      console.log("Page:", page);
      
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };

  // console.log("Categories:", categories);
  // console.log("Duration:", duration);

  useEffect(() => {
    getTrending(); // Fetch trending data whenever category or duration changes
  }, [categories, duration]);

  return (
    <div className="Trending-Page w-full h-screen  ">
      <div className="Upper-Side w-full flex items-center justify-between px-[2vw]">
        <h1 className="text-white text-2xl font-bold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white text-2xl cursor-pointer hover:text-[#6556CD] transition-all duration-300"
          ></i>{" "}
          Trending
        </h1>

        <div className="flex items-center w-80%">
          <TopNav className={"mr-[12vw]"} tClassName={"left-[21.1%]"} />

          {/* First Dropdown for category */}
          <Dropdown
            options={["all", "movie", "tv"]}
            selectedOption={categories}
            onOptionChange={setCategories} // Update selected category
          />

          <div className="w-[1px] h-[40px] bg-[#333333] mx-5"></div>

          {/* Second Dropdown for duration */}
          <Dropdown
            options={["day", "week"]}
            selectedOption={duration}
            onOptionChange={setDuration} // Update selected duration
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
  );
};

export default Trending;
