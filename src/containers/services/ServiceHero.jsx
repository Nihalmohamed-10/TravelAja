import React from 'react';
import ServiceHero from '../../assets/images/serviceHero.png'; 

function ServiceHero() {
  return (
    <div className='relative'>
        <div className='w-[100%] h-[284px]'>
            <img className='w-[100%] h-[184px]' src={ServiceHero} alt="Service Hero" />
        </div>
        <h2 className='text-[22px] font-bold text-[#FFFFFF] absolute left-[50px] bottom-[138px] xl:text-[30px]'>Services</h2> 
    </div>
  );
}

export default ServiceHero;
