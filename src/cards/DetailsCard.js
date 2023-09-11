import React from "react";
import Gman from "../images/square.jpg";
import { Link } from "react-router-dom";
import Project from "./Project";
import game from "../images/game.jpg";
import bot from "../images/bot.jpg";
import cart from "../images/cart.jpg";
import calculator from "../images/calculate.jpg";

function DetailsCard() {
  return (
    <div className=" card w-[700px] h-[467px] flex justify-center items-center  rounded-[10px] overflow-hidden relative">
      <div className=" glass w-[689px] h-[456px] absolute z-30 rounded-[10px] flex flex-col ">
        {/* Image and details */}
        <div className=" mt-[30px] ml-[30px] flex ">
          <img
            src={Gman}
            alt=""
            className="  w-[140px] oject-contain rounded-[50%] border-[1px] border-[#ff0052] "
          />
          <div className=" flex-col items-center ml-[30px] max-w-[400px] ">
            <h1 className=" text-[30px] font-bold ">Gladman Sibanda</h1>
            <p className=" mt-[0px] text-slate-700 ">Frontend Developer</p>
            <p className=" text-[12px] mt-[5px] ">
              Passionate frontend developer with experience in Html, Css,
              Bootstrap, Tailwind Css, Javascript, React JS and Next JS
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex w-full justify-center">
        <div className=" w-[200px] flex justify-evenly ">
          <Link to="https://portfolio-fa997.web.app/" target="_blank" className=" bg-gradient-to-r from-[#ff0052] to-orange-500 px-[5px] py-[2px] rounded-[10px] text-white font-bold ">
            <button>
              Portfolio
            </button>
          </Link>
          <Link to="https://www.linkedin.com/in/gladman-sibanda-188a31272/" target="_blank" className=" bg-gradient-to-r from-[#ff0052] to-orange-500 px-[5px] py-[2px] rounded-[10px] text-white font-bold ">
            <button>
              LinkedIn
            </button>
          </Link>
        </div>
        </div>

        <div className=" flex w-full justify-center mt-[20px] ">
          <h3 className=" text-[14px] font-extralight underline ">A few projects</h3>
        </div>

        {/* Projects */}
        <div className=" flex w-full h-full items-center justify-between mt-[20px] ">
          <Project projectimage={game} projecttext="Play Game" projectlink="https://sparkling-lollipop-51e33e.netlify.app/" />
          <Project projectimage={bot} projecttext="Use Bot" projectlink="https://64e6e02d27e0cb3c7e370004--gregarious-meringue-d11912.netlify.app/" />
          <Project projectimage={cart} projecttext="View Cart" projectlink="https://cute-shortbread-92bad8.netlify.app/" />
          <Project projectimage={calculator} projecttext="Calculator" projectlink="https://clinquant-kangaroo-7fba76.netlify.app/" />
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
