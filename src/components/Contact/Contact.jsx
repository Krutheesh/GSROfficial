import React from "react";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div id="contact" className=" bg-white  py-10 ">
      <h1 className="text-4xl font-semibold text-center ">
        <Slide>
          <span className="text-red-600">Contact Us</span>
          </Slide> 
      </h1>
      <h1 className="text-4xl font-semibold t text-center text-black">
       <Slide> Stay connected with us</Slide> 
      </h1>
      <Slide>
      <div className="flex flex-col md:px-0 px-20 md:w-4/12 mx-auto mt-8">
        <input
          className="mb-4 py-4 px-4 outline-none rounded border-2"
          type="email"
          placeholder="Enter Your E-mail"
          name="email"
          id=""
        />
        <input
          className="mb-4 py-4 px-4 outline-none rounded border-2"
          type="text"
          placeholder="Subject"
          name=""
          id=""
        />
        <textarea
          className="py-4 px-4 rounded outline-none border-2"
          name="message"
          id="message"
          placeholder="Your Message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="mt-10 rounded outline-none bg-black px-8 py-4 w-36 mx-auto  text-lg font-semibold text-white">
          Submit
        </button>
      </div>
      </Slide>
      

      <div className='pt-[5rem] hidden md:block'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.487521812775!2d78.35588381083987!3d17.450812300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a7dfbc6419%3A0x881235d4e716e1c4!2sGSR%20Digital%20and%20Media%20Services%20-360%C2%B0%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1692601107817!5m2!1sen!2sin" width="100%" height="350" style={{border:0}}></iframe>
    </div>
    </div>
  );
};

export default Contact;
