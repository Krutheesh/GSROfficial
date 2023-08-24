import React from "react";
import "./Banner.css";
import digi from "./video/digital.mp4"
import { Link } from "react-scroll";
import { Slide } from "react-awesome-reveal"
const Banner = () => {
  return (
    <div className="bg-[#1a1a1a]" id='home'>
      
        <Slide>
        <div className="flex pt-[5rem] px-[3rem] justify-center items-center h-[100vh] text-white ">
        
        <div className="lg:w-[40%] md:w-[70%] ">
        <p className="text-center">ELEVATE YOUR BRAND'S VOICE</p>
          <h1 className=" text-center text-[2rem] md:text-[3.5rem]  font-bold">
            Introducing Our Creative Agency.
        </h1>
          
          <div className="text-center">
          <Link to="contact" activeClass="active" spy={true} smooth={true} offset={-35} duration={700}>
          <button className="mt-8  rounded px-[2rem] py-3 bg-red-600  text-white text-lg font-bold">
            Our Services
          </button>
          
          </Link>
          </div>
        </div>
      
      </div>
        </Slide>
      
    </div>
  );
};

export default Banner;
