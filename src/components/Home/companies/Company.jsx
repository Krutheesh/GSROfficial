import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from 'react-awesome-reveal';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import c1 from '../../../images/OurClients/c1.png'
import c2 from '../../../images/OurClients/c2.jpg'
import c3 from '../../../images/OurClients/c3.png'
import c4 from '../../../images/OurClients/c4.png'

import c5 from '../../../images/OurClients/c5.jpg'
import c6 from '../../../images/OurClients/c6.png'
import c8 from '../../../images/OurClients/c8.jpg'
import c9 from '../../../images/OurClients/c9.png'
import c10 from '../../../images/OurClients/c10.png'
import c7 from '../../../images/OurClients/c7.jfif'
import c11 from '../../../images/OurClients/c11.jfif'

const images = [c1,c2,c4,c5,c6,c8,c9,c10]

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Company() {
  return (
    <div className='my-[2rem]'>
      <Slide>
      <div className='text-[2rem] font-bold text-center py-[0.5rem] '>
        <h2>Our <span className=' text-red-600 '>Clients</span></h2>
       </div>
      </Slide>
       
      <Swiper
        spaceBetween={25}
        // centeredSlides={true}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          images.map((im) => (
            
           

              <SwiperSlide key={im} className='w-60 h-60 md:w-50 md:h-40 overflow-hidden m-2'>
             
               <img src={im} className='w-full h-full md:p-5 object-contain' />
            
              </SwiperSlide>
            
          ))
        }
        
        
      </Swiper>
      
    
    </div>
  )
}

export default Company
