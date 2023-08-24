import React from 'react'
import gsrVideo from './gsr.mp4'
function GsrVideo() {
  return (
    <div className=' top-10'>
      <div>
        <video controls muted loop  className='w-full object-fill lg:object-cover  top-0 bottom-0 left-0 right-0 lg:h-[90vh] '>
          <source src={gsrVideo} className=''/>
        </video>
      </div>
      
    </div>
  )
}

export default GsrVideo
