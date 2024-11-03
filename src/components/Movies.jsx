import React, { useEffect, useState, useRef } from "react";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader";

const Movies = () => {
  document.title = "AstroShow - Movies";
  const navigate = useNavigate();

  const [categories, setCategories] = useState("top_rated");
  const [movie, setMovie] = useState([]);
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

  const getMovie = async () => {
    try {
      const url = `/movie/${categories}?page=${page}`;
      const { data } = await axios.get(url);

      if (data.results.length > 0) {
        setMovie((prevData) => [...prevData, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching Movie data:", error);
    }
  };

  const refreshHandler = async () => {
    setMovie([]);
    setPage(1);
    setHasMore(true);
    await getMovie();
  };

  useEffect(() => {
    refreshHandler();
  }, [categories]);

  return categories && movie ? (
    <div
      className="Popular-Page w-full min-h-screen overflow-y-auto relativen"
      ref={scrollRef}
      onScroll={handleScroll}
    >
      {showScrollUp && (
        <div
          className="fixed z-50 bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-400 shadow-lg rounded-full cursor-pointer left-1/2 transform -translate-x-1/2 top-[85%] py-2 px-4 flex items-center gap-2 transition-transform duration-300 hover:scale-105 opacity-90 hover:opacity-100 animate-fadeIn"
          onClick={scrollToTop}
        >
          <p className="text-white text-sm mr-2">Scroll Up</p>
          <i className="ri-arrow-up-line text-white text-2xl"></i>
        </div>
      )}

      <div className="Upper Side flex flex-col md:flex-row justify-between items-center px-5 py-3 md:px-10">
        <h1 className="text-2xl font-bold flex items-center mb-3 md:mb-0 text-white">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white text-2xl cursor-pointer hover:text-[#6556CD] transition-all duration-300 mr-2"
          ></i>
          Movies
        </h1>

        <div className="flex items-center w-80%">
          <TopNav
            SuggestionClass="left-[1%]"
            fullScreenClass="hidden"
            className="hidden md:block  w-[57vw] top-6 absolute "
          />
          <Dropdown
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            selectedOption={categories}
            onOptionChange={setCategories}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={<h4 className="text-2xl text-white mt-2 ">Loading...</h4>}
        scrollableTarget="Popular-Page"
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Movies;
