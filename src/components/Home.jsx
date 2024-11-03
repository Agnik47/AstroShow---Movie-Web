// Home.js
import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import axios from "../utils/axios";
import Loader from "../Loader/Loader";
import SideNav from "../partials/SideNav";
import TopNav from "../partials/TopNav";
import Horizontalcards from "../partials/Horizontalcards";

const Home = () => {
  document.title = "AstroShow - Home";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [categories, setCategories] = useState("movie");
  const [showTopNav, setShowTopNav] = useState(true); // For showing/hiding TopNav
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Set to false initially for mobile

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/movie/week");
      const randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${categories}/day`);
      setTrending(data.results);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowTopNav(false);
    } else {
      setShowTopNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallpaper();
  }, [categories]);

  return wallpaper && trending ? (
    <>
      {/* Sidebar toggle button with high z-index */}
      <button
        className="fixed top-4 left-4 z-10 text-2xl text-white bg-transparent p-2 rounded-full md:hidden"
        onClick={toggleSidebar}
      >
        <i className="ri-menu-line"></i>
      </button>

      {/* Sidebar */}
      <div className={`fixed ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <SideNav isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main content area */}
      <div className="md:ml-[20%] w-full h-full overflow-auto overflow-x-hidden">
        {showTopNav && <TopNav />}
        <Header wallpaperData={wallpaper} />
        <Horizontalcards
          cardClass="bg-[#2A292F]"
          data={trending}
          categories={categories}
          setCategories={setCategories}
        />
      </div>
    </>
  ) : (
    <Loader name={"Loading..."} />
  );
};

export default Home;
