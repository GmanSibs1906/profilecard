import React from 'react';
import PictureCard from './cards/PictureCard';
import DetailsCard from "./cards/DetailsCard";

function Cards() {
  return (
    <div className=' bg-[#181818] flex w-full h-[100vh] justify-center items-center overflow-hidden '>
    <PictureCard />
    </div>
  )
}

export default Cards