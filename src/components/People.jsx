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


  return categories && people ? (
    <div className="Popular-Page w-full h-screen">
      <div className="SCROLL-UP fixed z-50  bg-zinc-700 hover:bg-zinc-600 transition-all duration-300  rounded-full cursor-pointer left-1/2  top-[89%] py-2 px-3 flex justify-center items-center">
        <p className="text-white text-sm">Scroll Up</p>
        <i className="ri-arrow-up-line text-white text-2xl cursor-pointer hover:text-[#6556CD] transition-all duration-300"></i>
      </div>
      <div className="Upper-Side w-full flex items-center justify-between px-[2vw]">
        <h1 className="text-white text-2xl font-bold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white text-2xl cursor-pointer hover:text-[#6556CD] transition-all duration-300"
          ></i>{" "}
           People 
        </h1>

        <div className="flex items-center w-80%">
          <TopNav className={"mr-[12vw]"} tClassName={"left-[23%] "} />

          {/* Dropdown for category */}
       
        </div>
      </div>

      {/* The rest of the content */}
      <InfiniteScroll
        dataLength={people.length} // Current data length
        next={getPeople} // Function to load more data
        hasMore={hasMore} // Whether more data is available
        loader={<h4>Loading...</h4>}
      >
        <Cards data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader /> // Show loader while fetching data
  );
}

export default People