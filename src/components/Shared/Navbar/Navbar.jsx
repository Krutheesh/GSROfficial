import React, {  useState } from "react";
import {RxHamburgerMenu} from 'react-icons/rx'
import { Link } from "react-scroll";
import GSR from '../../../images/logos/GSR.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SERVICES", link: "services" },
    { name: "TESTIMONIALS", link: "test" },
    { name: "CONTACT", link: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[100] bg-black `}
    >
      <div className="flex items-center justify-between">
        <div className="ml-7 w-full h-[5rem] relative ">
         
            <img src={GSR} className=" w-[22%]  absolute top-1/2 transform -translate-y-1/2"/>
          
        </div>
        <div
          className={` ${
            sticky ? "md:bg-black/0 bg-black" : "bg-black"
          } text-white md:block hidden px-7  font-medium  `}
        >
          <ul className="flex items-center gap-1  text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-red-600 cursor-pointer">
                <Link to={menu?.link} activeClass="active" spy={true} smooth={true} offset={-35} duration={700} >{menu?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-800" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
       
          <RxHamburgerMenu/>
        </div>
        <div
          className={`md:hidden  text-black absolute  h-screen
      px-7  font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10  text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                
                key={i}
                className="px-6 hover:text-red-600 cursor-pointer"
              >
                <Link to={menu?.link} spy={true} smooth={true} offset={-20} duration={500} onClick={() => setOpen(false)} >{menu?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
