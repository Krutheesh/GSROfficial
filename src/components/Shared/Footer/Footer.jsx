import React from "react";
import GSR from '../../../images/logos/GSR.png'
import { Link } from "react-scroll";
import { Slide } from "react-awesome-reveal";
const Footer = () => {
  return (
    <div>
      <footer className="footer py-[3rem] flex flex-col md:px-[4rem]   md:flex-row justify-between items-center text-center bg-[#1a1a1a]">
        <Slide>
        <div className="md:pl-20 pl-4 w-[35%}">
          
          <div className=" w-full h-[5rem] relative ">
           
           <img src={GSR} className=" w-[90%]  absolute top-1/2 transform -translate-y-1/2"/>
         
             </div>
            <p className="text-white">Elevate your brand</p>
          </div>
        </Slide>
        
        <div className="w-[40%] md:w-[25%]">
          <Slide>
          <span className="uppercase text-lg text-red-600 font-semibold">
            Get To Know Us
          </span>
          <p className="text-md text-white hover:text-red-400 cursor-pointer">
            <Link to="about" activeClass="active" spy={true} smooth={true} offset={-35} duration={700}> Abouts Us</Link>
          </p>
          <p className="text-md text-white hover:text-red-400 cursor-pointer">
            <Link to="services" activeClass="active" spy={true} smooth={true} offset={-35} duration={700}> Our services</Link>
          </p>
          </Slide>
        </div>
        <div className="w-[40%]  md:w-[20%]">
          <Slide>
          <span className="uppercase text-lg text-red-600 font-semibold">
            Contact Us
          </span>
          <p className="text-md text-white">
info@gsrmedia.in</p>
          <p className="text-md text-white">+91 9652653782</p>
          </Slide>
          
          
        </div>
       
      </footer>
    </div>
  );
};

export default Footer;
