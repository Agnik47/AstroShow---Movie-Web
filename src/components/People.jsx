import React, { useEffect, useState } from "react";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader";
import SideNav from "../partials/SideNav";

const People = () => {
  document.title = "AstroShow - People";
  const navigate = useNavigate();

  const [categories, setCategories] = useState("popular");
  const [people, setPeople] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [showScrollUp, setShowScrollUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPeople = async () => {
    try {
      const url = `/person/${categories}?page=${page}`;
      const { data } = await axios.get(url);

      if (data && data.results && data.results.length > 0) {
        setPeople((prevData) => [...prevData, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching people data:", error);
    }
  };

  const refreshHandler = async () => {
    setPeople([]);
    setPage(1);
    setHasMore(true);
    await getPeople();
  };

  useEffect(() => {
    refreshHandler();
  }, [categories]);

  return categories && people ? (

    <>
    <SideNav/>
    <div className="Popular-Page w-[80%] ml-[20%]  h-screen">
      {/* Scroll Up Button */}
      {showScrollUp && (
        <div
          className="fixed z-50 bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-400 shadow-lg rounded-full cursor-pointer left-1/2 transform -translate-x-1/2 top-[85%] py-2 px-4 flex items-center gap-2 transition-transform duration-300 hover:scale-105 opacity-90 hover:opacity-100 animate-fadeIn"
          onClick={scrollToTop}
        >
          <p className="text-white text-sm mr-2">Scroll Up</p>
          <i className="ri-arrow-up-line text-white text-2xl"></i>
        </div>
      )}

      <div className="Upper-Side w-full flex items-center justify-between px-[2vw]">
        <h1 className="text-white text-2xl font-bold">
         
          People 
        </h1>

        <div className="flex items-center w-80%">
          <TopNav SuggestionClass="left-[1.2%]" fullScreenClass="hidden" className="hidden md:block w-[52vw] top-6 right-[12vw]" />
        </div>
      </div>

      {/* Content with infinite scroll */}
      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={people} title="person" ratingClass="hidden" />
      </InfiniteScroll>
    </div>
    </>
  ) : (
    <Loader />
  );
};

export default People;
