import React from 'react'
import SideNav from '../partials/SideNav'

const SideLoader = ({loaderTitle}) => {
  return (
    <>
    <SideNav/>
    <div className=' w-[80%] min-h-screen bg-[#1F1E24] ml-[20%] '>
        {/* Skeleton for TopNav */}
        <div className="flex items-center w-full justify-between h-[10vh] px-6 bg-[#2A292F]">
            <p className='text-2xl font-bold flex items-center mb-3 md:mb-0 text-white'>{loaderTitle}</p>
          {/* Search Bar */}
          <div className="w-[25vw] h-10 bg-gray-700 rounded-md animate-pulse ml-[14vw] mr-[4vw]"></div>

          <div className='bg-gray-700 w-[10vw] h-10 rounded-md animate-pulse '></div>
          <div className='bg-gray-700 w-[10vw] h-10 rounded-md animate-pulse '></div>
         
        </div>


        {/*Skeleton for Cards component*/}

        <div className='w-full h-full bg-[#1F1E24] grid mt-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10'>
            {[...Array(8)].map((_,i) => {
                return  <div key={i} className='w-[18vw] h-[26vw] bg-[#2A292F] animate-pulse rounded-md'></div>
            })}
        </div>
    </div>
    </>
  )
}

export default SideLoader