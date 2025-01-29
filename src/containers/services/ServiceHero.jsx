import React from 'react';
import serviceHero from '../../assets/images/serviceHero.png'; 

function ServiceHero() {
  return (
    <div className='relative'>
        <div className='w-[100%]'>
            <img className='w-[100%]' src={serviceHero} alt="Service Hero" />
        </div>
        <h2 className='text-[33px] font-bold text-[#FFFFFF] absolute left-[69px] bottom-[44px]'>Services</h2> 
    </div>
  );
}

export default ServiceHero;
