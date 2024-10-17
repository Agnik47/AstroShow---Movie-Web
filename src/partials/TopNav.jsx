import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [queery, setQueery] = useState("");

  console.log(queery);

  return (
    <div className="TopNav bar fixed top-0 left-[20%] w-[80%] bg-transparent border-[#363636] h-[10vh] flex justify-center items-center px-10 z-10">
      <div className="InnerInput flex items-center w-[60%] gap-x-4 ">
        <i className="ri-search-line text-white text-2xl"></i>
        <input
          type="text"
          value={queery}
          onChange={(e) => setQueery(e.target.value)}
          placeholder="Search Movies..."
          className="border-none bg-transparent outline-none text-white p-4 flex-grow mx-4 rounded-lg"
        />
        {queery.length > 0 && (
          <i className="ri-filter-3-line text-white text-2xl cursor-pointer"></i>
        )}
        <i className="Mic ri-mic-line text-white text-2xl cursor-pointer"></i>
        <button className="bg-[#6556CD] text-white rounded px-4 py-2 hover:bg-[#5043A9] transition-all duration-300">
          <i className="ri-search-line"></i>
        </button>
      </div>

      {/* Suggestion Box */}
      {queery.length > 0 && (
        <div className="absolute top-[110%] left-[20%] w-[60%] bg-zinc-800 overflow-auto rounded-lg max-h-[50vh]">
          <Link className="flex items-center gap-x-4 p-4 hover:bg-zinc-700 hover:text-lg transition-all duration-300 border-b-2 border-zinc-700">
            <img src="" alt="" className="w-12 h-12" />
            <span className="text-white">{queery}</span>
          </Link>
        </div>
      )}

      <hr className="absolute bottom-0 left-0 w-full border-zinc-700 border-b-4" />
    </div>
  );
};

export default TopNav;
