import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Popular from "./components/Popular";
import People from "./components/People";
import Mylist from "./components/Mylist";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24]  flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/people" element={<People />} />
        <Route path="/mylist" element={<Mylist />} />
      </Routes>
    </div>
  );
};

export default App;
