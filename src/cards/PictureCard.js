import React from 'react';
import Gman from "../images/gman.jpg";

function PictureCard() {
  return (
    <div className=' card w-[700px] h-[467px] flex justify-center items-center  rounded-[10px] overflow-hidden relative'>
    <img src={Gman} alt="" className=' absolute z-30 w-[689px] contain rounded-[10px] ' />
    <div className=" glass flex-col bottom-[4px] absolute z-40 w-[689px] contain rounded-[10px]">
    <h3 className=' text-[30px] font-bold '>Gladman Sibanda</h3>
    <p>Frontend Developer</p>
    </div>
    </div>
  )
}

export default PictureCard