import React from 'react'

function GreenIcons({img,heading,content}) {
  return (
    <div className='flex flex-col gap-4 items-center text-center w-[80%] mx-auto lg:w-[25%] '>
        <div>
            <img src={img} alt="img" />
        </div>
        <p className='text-[22px]'>
            {heading}
        </p>
        <p className='text-[14px] w-[300px] font-extralight lg:w-full'>
            {content}
        </p>
    </div>
  )
}

export default GreenIcons