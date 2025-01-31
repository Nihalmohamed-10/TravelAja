import React from 'react';
import abouthero from '../../assets/images/abouthero.png'; 

function AboutHero() {
  return (
    <div className='relative'>
            <div className='w-[100%] '>
                <img className='w-[100%] h-[184px]' src={abouthero} alt="Service Hero" />
            </div>
            <h2 className='text-[22px] font-bold text-[#FFFFFF] absolute left-[50px] bottom-[42px] xl:text-[30px]'>About Us</h2> 
        </div>
  );
}

export default AboutHero;