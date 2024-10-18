import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import axios from "../utils/axios";
import Loader from "../utils/Loader";
import SideNav from "../partials/SideNav";
import TopNav from "../partials/TopNav";
import Horizontalcards from "../partials/Horizontalcards";

const Home = () => {
  document.title = "AstroShow";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");

      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()]; //aslo can use Math.floor()
      setWallpaper(randomData);

      console.log(randomData); //Done
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      setTrending(data.results);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    !trending && getTrending();
  }, []);

  

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto  overflow-x-hidden">
        <TopNav />
        <Header wallpaperData={wallpaper}/>
        <Horizontalcards data={trending} />
        <Horizontalcards data={trending} />
        <Horizontalcards data={trending} />
        <Horizontalcards data={trending} />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
