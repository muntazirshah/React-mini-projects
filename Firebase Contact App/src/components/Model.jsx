import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'



const Model = ({Onclose,isOpen,children }) => {
  return createPortal (
    <>
    {isOpen && (
    <div  className=' grid place-items-center backdrop-blur h-screen w-screen absolute top-0 z-40' >
    <div className='z-50 relative min-h-[200px] min-w-[80%] m-auto bg-white p-4'>
    <div className='flex justify-end '>
     <AiOutlineClose onClick={Onclose} className='text-2xl self-end cursor-pointer' />
     </div> 
     
          {children}
        
     </div>
     </div>
    )}
    </>
  ,document.getElementById("model-root"))
}

export default Model