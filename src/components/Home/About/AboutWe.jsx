import React from "react";
import { Slide } from "react-awesome-reveal"
function AboutWe() {
  return (
    
<div className="py-[4rem] bg-[#e6e6e6]" id="about" >
<Slide>
      <div className="flex justify-center items center ">
        <div className="lg:w-[50%] md:w-[50%] w-[70%] text-center">
        <h2 className="text-[2rem] md:[2.5rem] lg:[3rem] text-red-600 font-bold ">Who we are</h2>
        <div>
          <span className="w-[1rem] h-1 px-2 inline-block bg-black"></span>
        </div>
        <p className="py-[2rem]">
          GSR Media is your partner in the digital realm, merging creativity
          with technology to provide businesses with solutions that lead to
          growth and unparalleled visibility
        </p>
        </div>
      </div>
      </Slide>
      <Slide>

      <div className="flex justify-center items center ">
        <div className="lg:w-[50%] md:w-[50%] w-[70%] text-center">
        <h2 className="text-[2rem] md:[2.5rem] lg:[3rem] text-red-600 font-bold ">Welcome to the GSR Media</h2>
        <div>
          <span className="w-[1rem] h-1 px-2 inline-block bg-black"></span>
        </div>
        <p className="py-[2rem]">
        GSR Media is a pioneering digital solutions provider committed to
          driving business growth and enhancing brand visibility. With a unique
          blend of creativity, technological prowess, and industry know-how, we
          ensure that your brand shines brighter in the digital realm.
        </p>
        </div>
      </div>

      </Slide>
    </div>


    
    
  );
}

export default AboutWe;
