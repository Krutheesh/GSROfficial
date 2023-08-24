import React from 'react'
import whatsapp from '../../../images/logos/whatsapp.svg'
function Whatsapp() {
  return (
    <div className='fixed md:right-10 bottom-20 right-7 z-[999]  '>
      <a href="http://wa.me/919652653782" target='_blank'>
   <div className='text-green-600 font-semibold pb-[1rem] text-[0.6rem] text-center animate-ping '  style={{ animationDuration: '1.3s' }}>Contact</div>
      <img src={whatsapp}
       alt="Whatsapp" className='md:w-[4ren] md:h-[4rem] h-[3rem] w-[3rem]  animate-bounce ' />
      </a>
      
    </div>
  )
}

export default Whatsapp
