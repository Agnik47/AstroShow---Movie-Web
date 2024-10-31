import React from 'react'
import { useNavigate } from 'react-router-dom'
import CommingSoon from '../accets/CommingSoon.gif'
const Mylist = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-screen bg-red-100'>
      <img className=" absolute top-0  w-full h-screen " src={CommingSoon} alt="Coming Soon"  />
      <button onClick={()=>navigate(-1)} className=" absolute right-[14vw] top-[12vw]  w-[5vw] h-[3vw] rounded-sm">
        
      </button>
    </div>
  )
}

export default Mylist