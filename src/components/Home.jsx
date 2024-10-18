import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import axios from "../utils/axios";
import Loader from "../utils/Loader";
import SideNav from "../partials/SideNav";
import TopNav from "../partials/TopNav";

const Home = () => {
  document.title = "AstroShow";

  const [wallpaper, setWallpaper] = useState(null);

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

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full ">
        <TopNav />
        <Header wallpaperData={wallpaper} />
      </div>
    </>
  ) : (
    <Loader />
  );
}; 

export default Home;
