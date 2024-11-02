import React from 'react'

const P_DeatilsLoader = () => {
    return  (
        <div className=" px-5 md:px-10 lg:px-20 w-full min-h-[240vh] lg:min-h-[140vh] bg-[#1F1E24] text-white">
          {/* Navigation Skeleton */}
          <div className="h-[10vh] flex items-center gap-5 md:gap-10 text-xl text-zinc-100 mb-5">
            <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
            <div className="w-40 h-6 bg-gray-800 rounded"></div>
          </div>
    
          <div className="flex flex-col lg:flex-row lg:gap-10 bg-[#1f1e2420] animate-pulse">
            {/* Left Sidebar Skeleton */}
            <div className="lg:w-1/4 mb-10 lg:mb-0">
              {/* Profile Image */}
              <div className="w-[20vw] h-[65vh] bg-gray-800 rounded-md"></div>
              <hr className="mt-5 border-none h-[1px] bg-zinc-500" />
    
              {/* Social Links */}
              <div className="flex gap-3 mt-5">
                <div className="w-10 h-10 bg-gray-800 rounded-full" ></div>
                <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
              </div>
    
              {/* Person Info */}
              <div className="text-white mt-5 space-y-3">
                <div className="h-6 w-1/2 bg-gray-800 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-800 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-800 rounded"></div>
                <div className="h-4 w-1/3 bg-gray-800 rounded"></div>
              </div>
            </div>
    
            {/* Main Content Skeleton */}
            <div className="lg:w-3/4 text-white">
              {/* Name */}
              <div className="h-10 w-1/2 bg-gray-800 rounded mb-5 " ></div>
    
              {/* Biography */}
              <div className="mb-5">
                <div className="h-6 w-1/4 bg-gray-800 rounded mb-3"></div>
                <div className="h-[20vh] w-full bg-gray-700 rounded"></div>
              </div>
    
              {/* Known For Section */}
              <div className="h-6 w-1/4 bg-gray-800 rounded mb-5"></div>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-56 h-[30vh] bg-gray-700 rounded-md"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    
   
  
}

export default P_DeatilsLoader