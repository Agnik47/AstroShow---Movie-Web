import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Popular from "./components/Popular";
import People from "./components/People";
import Mylist from "./components/Mylist";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";
import VideoPlayer from "./partials/VideoPlayer";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24]  flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movie" element={<Movies />} />

        <Route path="/movie/details/:id" element={<MovieDetails />} >
          <Route path="trailer" element={<VideoPlayer />} />
        </Route>

        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<TvDetails />} > 
           <Route path="trailer" element={<VideoPlayer />} />
        </Route>

        <Route path="/people" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />  


        <Route path="/mylist" element={<Mylist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
};

export default App;
