import React from "react";
import SideNav from "../partials/SideNav";

const Loader = ({name}) => {
  const skeletonItems = Array(5).fill(0); // Assuming you have 6 skeleton cards

  return (
    <div className="flex w-[80%] min-h-screen bg-[#1F1E24] ml-[20%]">
      {/* Skeleton for SideNav */}
      <SideNav  />
      {/* Main Content Skeleton */}
      
      <div className="flex-1 flex flex-col ">
        {/* Skeleton for TopNav */}
        <div className="flex items-center justify-between p-4 bg-[#2A292F]">
          {/* Search Bar */}
          <div className="w-2/3 h-10 bg-gray-700 rounded-md animate-pulse ml-[15vw]"></div>
         
        </div>

        {/* Skeleton for Header Section */}
        <div className="p-6">
          <div className="w-full h-[43vh] bg-gray-700 rounded-md animate-pulse"></div>

        </div>

        {/* Skeleton for Card Section */}
        <div className="px-6 pb-6">
          <div className="text-2xl text-white mb-4">{name}</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skeletonItems.map((_, index) => (
              <div
                key={index}
                className="bg-[#2A292F] p-4 rounded-lg animate-pulse flex flex-col space-y-3"
              >
                <div className="w-full h-44 bg-gray-700 rounded-md"></div>
                <div className="w-3/4 h-6 bg-gray-600 rounded-md"></div>
                <div className="w-1/2 h-6 bg-gray-600 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
