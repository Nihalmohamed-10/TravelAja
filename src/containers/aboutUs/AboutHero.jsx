import React from 'react';
import aboutImg from '../../assets/images/aboutImg.jpg'; 

function AboutHero() {
  return (
    <div className='relative'>
            <div className='w-[100%] '>
                <img className='w-[100%] h-[300px] object-cover' src={aboutImg} alt="Service Hero" />
            </div>
            <h2 className='text-[22px] font-bold text-[#FFFFFF] absolute left-[50px] bottom-[42px] xl:text-[30px]'>About Us</h2> 
        </div>
  );
}

export default AboutHero;