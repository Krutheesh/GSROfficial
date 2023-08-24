import React from "react";
import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";

import Reviews from "../Reviews/Reviews";

import AboutWe from "../About/AboutWe";
import GsrVideo from "../About/gsrVideo/GsrVideo";
import Services from "../services/Services";
import Company from "../companies/Company";
import Whatsapp from "../whatsapp/Whatsapp";
const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <GsrVideo />
      <AboutWe />
      <Services />

      <Company />
      <Reviews></Reviews>
      <Contact></Contact>
      <Whatsapp />
    </div>
  );
};

export default Home;
