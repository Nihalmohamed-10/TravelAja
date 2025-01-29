import React from 'react';
import abouthero from '../../assets/images/abouthero.png'; 

function AboutHero() {
  return (
    <div className='relative'>
        <div className='w-[100%]'>
            <img className='w-[100%]' src={abouthero} alt="Service Hero" />
        </div>
        <h2 className='text-[33px] font-bold text-[#FFFFFF] absolute left-[69px] bottom-[44px]'>About Us</h2> 
    </div>
  );
}

export default AboutHero;