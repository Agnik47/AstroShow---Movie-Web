import React, { useEffect, useState, useRef } from "react";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader";
import SideNav from "../partials/SideNav";
import SideLoader from "../Loader/SideLoader";

const TvShows = () => {
  document.title = "AstroShow - TV Shows";
  const navigate = useNavigate();

  const [categories, setCategories] = useState("top_rated");
  const [tv, setTV] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [showScrollUp, setShowScrollUp] = useState(false);

  const scrollRef = useRef(null);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current.scrollTop > 300) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };

  const getTV = async () => {
    try {
      const url = `/tv/${categories}?page=${page}`;
      const { data } = await axios.get(url);

      if (data && data.results && data.results.length > 0) {
        setTV((prevData) => [...prevData, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching tv data:", error);
    }
  };

  const refreshHandler = async () => {
    setTV([]);
    setPage(1);
    setHasMore(true);
    await getTV();
  };

  useEffect(() => {
    refreshHandler();
  }, [categories]);

  return categories && tv ? (
    <>
    <SideNav/>
    <div
      className="Popular-Page w-[80%] ml-[20%]  h-screen overflow-y-auto"
      ref={scrollRef}
      onScroll={handleScroll}
    >
      {showScrollUp && (
        <div
          className="fixed z-50 bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-400 shadow-lg rounded-full cursor-pointer  transform -translate-x-1/2 top-[85%] left-[60%] py-2 px-4 flex items-center gap-2 transition-transform duration-300 hover:scale-105 opacity-90 hover:opacity-100 animate-fadeIn"
          onClick={scrollToTop}
        >
          <p className="text-white text-sm mr-2">Scroll Up</p>
          <i className="ri-arrow-up-line text-white text-2xl"></i>
        </div>
      )}

      <div className="Upper Side flex flex-col md:flex-row justify-between items-center px-5 py-3 md:px-10">
        <h1 className="text-2xl font-bold flex items-center mb-3 md:mb-0 text-white">
          
          Tv Shows
        </h1>

        <div className="flex items-center w-80%">
        <TopNav
              SuggestionClass="left-[1%]"
              fullScreenClass="hidden"
              className="hidden md:block  w-4vw mr-[15vw] top-6 t"
            />
          <Dropdown
            options={["popular", "top_rated", "on_the_air", "airing_today"]}
            selectedOption={categories}
            onOptionChange={setCategories}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={getTV}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget="Popular-Page"
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
    </>
  ) : (
    <SideLoader loaderTitle="Tv Show" />
  );
};

export default TvShows;
