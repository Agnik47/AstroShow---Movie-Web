import React from "react";
import { useNavigate } from "react-router-dom";


const Mylist = () => {
    const navigate = useNavigate();
  return (
    <div className="text-center  flex justify-center items-center text-white ml-[29%]">
      <h1 className="text-6xl"> I will make it Verry Soon.....</h1> <br />
      <button onClick={()=>navigate(-1)} className=" bg-[#6556CD] hover:bg-[#5043A9] text-xl text-white font-bold py-2 px-4 rounded-full">
        Back
      </button>
    </div>
  );
};

export default Mylist;
