import React, { useEffect, useState } from "react";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "../partials/Cards";

const Trending = () => {
  document.title = "AstroShow - Trending";
  const navigate = useNavigate();

  // State for handling the selected option for both dropdowns
  const [categories, setCategories] = useState("movie");
  const [duration, setDuration] = useState("week");
  const [trending, setTrending] = useState([]);

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
      console.log("API Request URL:", url); // Debug: Check URL
      const { data } = await axios.get(url);
      setTrending(data.results);
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };
  console.log("Categories:", categories);
  console.log("Duration:", duration);
  
  console.log("In Trending page: ",trending);
  
  useEffect(()=> {
    getTrending();
  },[categories, duration])






  return (
    <div className="Trending-Page w-full h-screen px-[2vw] overflow-y-auto">
      <div className="Upper-Side w-full flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white text-2xl cursor-pointer hover:text-[#6556CD] transition-all duration-300"
          ></i>{" "}
          Trending
        </h1>
        
        <div className="flex items-center w-80%">
          <TopNav className={"mr-[12vw]"} tClassName={"left-[21%]"} />
          
          {/* First Dropdown for category */}
          <Dropdown 
            options={["all", "movie", "tv"]} 
            selectedOption={categories}
            onOptionChange={setCategories} // Update selected category
          />

          <div className="w-[1px] h-[40px] bg-[#333333] mx-5"></div>

          {/* Second Dropdown for type */}
          <Dropdown 
            options={["day", "week"]} 
            selectedOption={duration}
            onOptionChange={setDuration} // Update selected type
          />
        </div>
      </div>

      {/* The rest of the content can go here */}
      <Cards data={trending} title={categories}/>
    </div>
  );
};

export default Trending;
