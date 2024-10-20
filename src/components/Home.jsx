import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import axios from "../utils/axios";
import Loader from "../utils/Loader";
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

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/movie/week");

      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()]; //also can use Math.floor()
      setWallpaper(randomData);

      console.log(randomData); //Done
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
      // If scrolling down
      setShowTopNav(false);
    } else {
      // If scrolling up
      setShowTopNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallpaper();
  }, [categories]);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        {/* Conditionally render TopNav based on scroll direction */}
        {showTopNav && <TopNav />}

        {/* Other components */}
        <Header wallpaperData={wallpaper} />
        <Horizontalcards 
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
