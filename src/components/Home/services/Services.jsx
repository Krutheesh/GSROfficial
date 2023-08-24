import React from "react";
import g1 from '../../../images/servicesImg/GraphicDesign/g1.jpg'
import g2 from '../../../images/servicesImg/GraphicDesign/g2.png'
import g3 from '../../../images/servicesImg/GraphicDesign/g3.jpg'
import g4 from '../../../images/servicesImg/GraphicDesign/g4.png'

import vp1 from '../../../images/servicesImg/VideoProduction/vp1.jpg'
import vp2 from '../../../images/servicesImg/VideoProduction/vp2.jpg'
import vp3 from '../../../images/servicesImg/VideoProduction/vp3.jpg'

import sm1 from '../../../images/servicesImg/SocialMedia/sm1.jpg'
import sm2 from '../../../images/servicesImg/SocialMedia/sm2.png'

import c1 from '../../../images/servicesImg/ContentCreation/c1.jpeg'
import c2 from '../../../images/servicesImg/ContentCreation/c2.jpg'


import smm1 from '../../../images/servicesImg/SocialMediaMarketing/smm1.jpg'
import smm2 from '../../../images/servicesImg/SocialMediaMarketing/smm2.jpg'
import smm3 from '../../../images/servicesImg/SocialMediaMarketing/smm3.webp'

import d1 from '../../../images/servicesImg/DigitalMarketing/d1.jpg'
import d2 from '../../../images/servicesImg/DigitalMarketing/d2.jpg'
import d5 from '../../../images/servicesImg/DigitalMarketing/d5.jpg'
import d4 from '../../../images/servicesImg/DigitalMarketing/d4.jpg'



import { Slide } from "react-awesome-reveal";
function SinglePage() {
  return (
    <section className="pt-[3rem]" id='services'>
       <h2  className="text-center text-4xl font-semibold py-[2rem] ">
        
          
          <Slide >
          <p className="text-black" >
          Provide awesome <span className="text-red-600">services</span>
          </p>
          </Slide>
          
          
        
        
       </h2>
       {/* -------------------Design Services------------ */}
      <div className="flex flex-col-reverse bg-white items-center justify-between px-[2rem] md:px-[4rem] py-[4rem] md:flex md:flex-row  md:justify-between ">
        <div className=" md:w-[50%] py-2 ">
          <div className="space-y-5">
            <h3 className=" m-auto text-[2rem] text-center font-semibold text-red-600">
              <Slide>Design Services</Slide>
            </h3>
            
              <Slide>
              <p className="text-gray-600 m-auto md:w-[80%] text-center md:text-[1.2rem]">
                Crafting visuals that resonate; design that truly represents
                your brand.
                </p>
              </Slide>
            
          </div>
        </div>

        <div className="md:w-[50%] ">
          <div className="lg:w-[100%] p-2 md:hidden">
            <Slide>
            <img
              className=" object-cover h-[14rem] w-full"
              src={g3}
              alt="dfghjk"
            />
            </Slide>
            
          </div>

          <div className="md:flex hidden">
            <div className="lg:w-[50%] h-[14rem]  object-cover p-2">
              <Slide className=" object-cover w-full h-full">
                <img src={g1} className=" object-cover w-full h-full" />
              </Slide>
            </div>
            <div className="lg:w-[50%] h-[14rem] md:w-[120%] p-2">
              <Slide className="w-full h-full">
                <img src={g2} className="w-full h-full" />
              </Slide>
            </div>
          </div>

          <div className="md:flex hidden">
            <div className="lg:w-[50%] h-[14rem]  object-cover p-2">
              <Slide className=" object-cover w-full h-full">
                <img src={g3} className=" object-cover w-full h-full" />
              </Slide>
              
            </div>
            <div className="lg:w-[50%] h-[14rem] md:w-[120%] p-2">
              
              <Slide className="w-full h-full">
                <img src={g4} className="w-full h-full" />
              </Slide>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------Social Media Management----------------------------------------- */}

      <div className="flex flex-col bg-[#e6e6e6] items-center justify-between px-[2rem] md:px-[4rem] py-[4rem] md:flex md:flex-row  md:justify-between ">
      <div className="md:w-[50%] ">
          <div className="lg:w-[100%] p-2 ">
            <Slide  className=" object-cover h-[14rem] w-full">
            <img
              className=" object-cover h-[14rem] w-full"
              src={sm1}
              alt="dfghjk"
            />
            </Slide>
            
          </div>
          <div className="lg:w-[100%] p-2 hidden md:block ">
            <Slide  className=" object-cover h-[14rem] w-full">
            <img
              className=" object-cover h-[14rem] w-full"
              src={sm2}
              alt="dfghjk"
            />
            </Slide>
            
          </div>
          
        </div>
        <div className=" md:w-[50%] py-2 ">
          <div className="space-y-5">
            <h3 className=" m-auto  text-[2rem] text-center font-semibold text-red-600">
              <Slide> Social Media Management</Slide>
            </h3>
            
              <Slide>
              <p className="text-gray-600 m-auto md:w-[80%] text-center md:text-[1.2rem]">
              Turbocharge your online presence with our expert Social Media Management services. From engaging content to data-driven strategies, we've got your brand covered. Ignite growth and engagement – get started today!
              </p>
              </Slide>
              
            
          </div>
        </div>
        
        
      </div>
{/* -------------------------------------Video Production-------------------------------------------------- */}
      <div className="flex flex-col-reverse bg-white items-center justify-between px-[2rem] md:px-[4rem] py-[4rem] md:flex md:flex-row  md:justify-between ">
        <div className=" md:w-[50%] py-2 ">
          <div className="space-y-5">
            <h3 className=" m-auto  text-[2rem] text-center font-semibold text-red-600">
              <Slide> Video Production</Slide>
            </h3>
            
              <Slide>
              <p className="text-gray-600 m-auto md:w-[80%] text-center md:text-[1.2rem]">
              Story-driven videos that captivate, inspire, and convert.
              </p>
              </Slide>
              
            
          </div>
        </div>
        <div className="md:w-[50%] ">
          <div className="lg:w-[100%] p-2 ">
            <Slide  className=" object-cover h-[14rem] w-full">
            <img
              className=" object-cover h-[14rem] w-full"
              src={vp1}
              alt="dfghjk"
            />
            </Slide>
            
          </div>
          <div className="md:flex hidden">
            <div className="lg:w-[50%] h-[14rem]  object-cover p-2">
              <Slide className=" object-cover w-full h-full">
              <img src={vp2} className=" object-cover w-full h-full" />
              </Slide>
              
            </div>
            <div className="lg:w-[50%] h-[14rem] md:w-[120%] p-2">
            <Slide className=" object-cover w-full h-full">
              <img src={vp3} className=" object-cover w-full h-full" />
              </Slide>
            </div>
          </div>
        </div>
        <div></div>
      </div>
{/* --------------------------------------Social Media Marketing------------------------------------------------- */}
<div className="flex flex-col bg-[#e6e6e6] items-center justify-between px-[2rem] md:px-[4rem] py-[4rem] md:flex md:flex-row  md:justify-between ">
      <div className="md:w-[50%] ">
          <div className="lg:w-[100%] p-2 ">
            <Slide  className=" object-cover h-[14rem] w-full">
            <img
              className=" object-cover h-[14rem] w-full"
              src={c1}
              alt="dfghjk"
            />
            </Slide>
            
          </div>
          <div className="lg:w-[100%] p-2 hidden md:block ">
            <Slide  className=" object-cover h-[14rem] w-full">
            <img
              className=" object-cover h-[14rem] w-full"
              src={c2}
              alt="dfghjk"
            />
            </Slide>
            
          </div>
          
        </div>
        <div className=" md:w-[50%] py-2 ">
          <div className="space-y-5">
            <h3 className=" m-auto  text-[2rem] text-center font-semibold text-red-600">
              <Slide> Content Creation</Slide>
            </h3>
            
              <Slide>
              <p className="text-gray-600 m-auto md:w-[80%] text-center md:text-[1.2rem]">
              Content Creation is the art and science of crafting compelling narratives tailored to your audience. From engaging blog posts to eye-catching graphics, our team delivers content that resonates, informs, and drives engagement.
              </p>
              </Slide>
              
           
          </div>
        </div>
        
        
      </div>

      {/* -------------------------------Digital marketing------------------------------------------------------------- */}
      <div className="flex flex-col-reverse bg-white items-center justify-between px-[2rem] md:px-[4rem] py-[4rem] md:flex md:flex-row  md:justify-between ">
        <div className=" md:w-[50%] py-2 ">
          <div className="space-y-5">
            <h3 className=" m-auto  text-[2rem] text-center font-semibold text-red-600">
              <Slide>Digital Marketing</Slide>
            </h3>
            
              <Slide>
              <p className="text-gray-600 m-auto md:w-[80%] text-center  md:text-[1.2rem]">
              Digital Marketing encompasses a suite of online strategies and tools aimed at connecting brands with their target audience. Leveraging the vast digital landscape, from search engines to mobile apps, we help businesses achieve measurable growth and lasting online presence.
              </p>
              </Slide>

          </div>
        </div>

        <div className="md:w-[50%] ">
          <div className="lg:w-[100%] p-2 md:hidden">
            <img
              className=" object-cover h-[14rem] w-full"
              src={d1}
              alt="dfghjk"
            />
          </div>

          <div className="md:flex hidden">
            <div className="lg:w-[50%] h-[14rem]  object-cover p-2">
              <Slide className=" object-cover w-full h-full">
                <img src={d2} className=" object-cover w-full h-full" />
              </Slide>
            </div>
            <div className="lg:w-[50%] h-[14rem] md:w-[120%] p-2">
              <Slide className="w-full h-full">
                <img src={d5} className="w-full h-full" />
              </Slide>
            </div>
          </div>

          <div className="md:flex hidden">
            <div className="lg:w-[50%] h-[14rem]  object-cover p-2">
              <Slide className=" object-cover w-full h-full">
                <img src={d4} className=" object-cover w-full h-full" />
              </Slide>
              
            </div>
            <div className="lg:w-[50%] h-[14rem] md:w-[120%] p-2">
              
              <Slide className="w-full h-full">
                <img src={d1} className="w-full h-full" />
              </Slide>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------Content Creation------------------------------------------------------- */}
      <div className="flex flex-col bg-[#e6e6e6] items-center justify-between px-[2rem] md:px-[4rem] py-[4rem] md:flex md:flex-row  md:justify-between ">
      <div className="md:w-[50%] ">
          <div className="lg:w-[100%] p-2 ">
            <Slide  className=" object-cover h-[14rem] w-full">
            <img
              className=" object-cover h-[14rem] w-full"
              src={smm1}
              alt="dfghjk"
            />
            </Slide>
            
          </div>
          <div className="lg:w-[100%] p-2 hidden md:block ">
            <Slide  className=" object-cover h-[14rem] w-full">
            <img
              className=" object-cover h-[14rem] w-full"
              src={smm2}
              alt="dfghjk"
            />
            </Slide>
            
          </div>
          
        </div>
        <div className=" md:w-[50%] py-2 ">
          <div className="space-y-5">
            <h3 className=" m-auto ] text-[2rem] text-center font-semibold text-red-600">
              <Slide>Social Media Marketing </Slide>
            </h3>
            
              <Slide>
              <p className="text-gray-600 m-auto md:w-[80%] text-center md:text-[1.2rem]">
              Social Media Marketing harnesses the power of platforms like Facebook, Instagram, and Twitter to forge strong brand-audience relationships. Dive into targeted campaigns, audience engagement, and insightful analytics to elevate your brand's social footprint.
              </p>
              </Slide>
              
            
          </div>
        </div>
        
        
      </div>
      
      
      
      

      
    </section>
  );
}

export default SinglePage;
