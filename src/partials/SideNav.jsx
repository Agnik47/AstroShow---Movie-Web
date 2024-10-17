import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] h-full border-r-4 border-[#363636] p-10">
      <h1 className="text-white text-2xl font-bold">
        <i class=" text-[#6556CD] ri-tv-fill mr-2 text-3xl"></i>
        <span className="text-2xl">AstroShow</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold mt-10 mb-5 ">New Feeds</h1>

        <Link
          to="/"
          className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg  mr-2"
        >
          <i class="ri-fire-line mr-2"></i>Trending
        </Link>
        <Link
          to="/"
          className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg mt-2 mr-2"
        >
          <i class="ri-movie-2-line mr-2"></i>Movies
        </Link>
        <Link
          to="/"
          className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg mt-2 mr-2"
        >
          <i class="ri-tv-line mr-2"></i>TV Shows
        </Link>
        <Link
          to="/"
          className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg mt-2 mr-2"
        >
          <i class="ri-movie-2-line mr-2"></i>Anime
        </Link>
        <Link
          to="/"
          className="hover:bg-[#6556CD] hover:text-white p-5 duration-300 rounded-lg mt-2 mr-2"
        >
          <i class="ri-bookmark-line mr-2"></i>My List
        </Link>
      </nav>
      <hr className=" border-zinc-500 mt-4" />
      <h1 className="text-white text-xl font-semibold mt-4 mb-5 ">
        Website Information
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <Link
          to="/"
          className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-lg mt-2 mr-2"
        >
          <i class="ri-information-line mr-2"></i>About
        </Link>
        <Link
          to="/"
          className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-lg mt-2 mr-2"
        >
          <i class="ri-mail-line mr-2"></i>Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
