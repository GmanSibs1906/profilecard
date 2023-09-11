import React from "react";
import {Link} from "react-router-dom";

function Project({ projectimage, projecttext, projectlink }) {
  return (
    <Link to={projectlink} target="_blank">
        <div className=" flex justify-start items-center w-[150px] h-[150px] rounded-[10px] relative ">
      <img src={projectimage} alt="" className=" rounded-[10px] z-20 " />
      <div className=" flex justify-center items-end w-[150px] h-[150px] absolute z-30 ">
        <button className=" border-[1px] border-[#ff0052] px-[5px] py-[2px] text-[12px] font-bold rounded-[5px] glassButton mb-[5px]  ">
          {projecttext}
        </button>
      </div>
    </div>
    </Link>
    
  );
}

export default Project;
