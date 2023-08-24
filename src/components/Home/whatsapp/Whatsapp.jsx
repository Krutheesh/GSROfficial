import React from 'react'
import whatsapp from '../../../images/logos/whatsapp.svg'
function Whatsapp() {
  return (
    <div className='fixed md:right-10 bottom-20 right-7 z-[999]  '>
      <a href="http://wa.me/919652653782" target='_blank'>

      <img src={whatsapp}
       alt="Whatsapp" className='md:w-[4ren] md:h-[4rem] w-[3rem] h-[3rem] md:hover:w-[5rem] md:hover:h-[5rem] ' />
      </a>
      
    </div>
  )
}

export default Whatsapp
