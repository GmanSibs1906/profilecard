import React from 'react';
import PictureCard from './cards/PictureCard';
import DetailsCard from "./cards/DetailsCard";
import arrow from "./images/arrow.png";

function Cards() {
  return (
    <div className=' relative bg-[#181818] flex w-full h-[100vh] justify-center items-center overflow-hidden '>
      {/* HOVER TEXT */}
      <div className=' absolute flex right-[100px] top-[20px] '>
      <img src={arrow} alt="" className=' mt-[20px] mr-[-20px] ' />
      <div className=' relative w-[50px] h-[50px] rounded-[50%] bg-[#ff0052] '>
        <h3 className=' text-white font-bold text-[45px] flex flex-col '>
          <span className=' mt-[-10px] ml-[7px] '>Hover</span>
          <span className=' text-[20px] font-light mt-[-19px] ml-[80px] text-[#ff0052] ' >over</span>
          <span className=' text-[20px] mt-[-10px] ml-[84px] '>ME</span>
        </h3>
      </div>
    </div>



    <div className="flex items-center justify-center h-screen relative">
      {/* PICTURE CARD */}
      <div className="relative group">
        <div className=" transition-opacity duration-300 group-hover:opacity-0">
        <PictureCard className=" z-50 hover:hidden "/>
        </div>
        {/* DETAILS CARD */}
        <div className="absolute inset-0  opacity-0 group-hover:opacity-100">
        <DetailsCard className=" absolute hidden mt-[-600px] "/>
        </div>
      </div>
    </div>
   
    </div>
  )
}

export default Cards