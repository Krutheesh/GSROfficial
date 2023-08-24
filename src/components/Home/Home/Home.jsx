import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import RecentWorks from '../RecentWork/RecentWorks';
import Reviews from '../Reviews/Reviews';
// import Service from '../Service/Service';
// import About from '../About/About';
import AboutWe from '../About/AboutWe';
import GsrVideo from '../About/gsrVideo/GsrVideo';
import SinglePage from '../SinglePage/SinglePage';
import Company from '../companies/Company';
import Whatsapp from '../whatsapp/Whatsapp';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Client></Client> */}
            
            {/* <About/> */}
            <Company/>
            <GsrVideo/>
            <AboutWe/>
            <SinglePage/>
            {/* <Service></Service> */}
            <RecentWorks></RecentWorks>
            <Reviews></Reviews>
            <Contact></Contact>
            <Whatsapp/>
        </div>
    );
};

export default Home;