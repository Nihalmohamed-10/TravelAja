import React from 'react'

function GreenIcons({img,heading,content}) {
  return (
    <div className='flex flex-col gap-4 items-center text-center'>
        <div>
            <img src={img} alt="img" />
        </div>
        <p className='text-[23px]'>
            {heading}
        </p>
        <p className='text-[16px] w-[380px]'>
            {content}
        </p>
    </div>
  )
}

export default GreenIcons