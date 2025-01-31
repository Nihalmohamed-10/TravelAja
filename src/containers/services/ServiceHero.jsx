import React from 'react';
import ServicesHero from '../../assets/images/ServicesHero.png'; 

function ServiceHero() {
  return (
    <div className=' relative'>
        <div className='w-[100%]'>
            <img className='w-[100%] h-[184px]' src={ServicesHero} alt="Service Hero" />
        </div>
        <h2 className='text-[22px] font-bold text-[#FFFFFF] absolute left-[50px] bottom-[42px] xl:text-[30px]'>Services</h2> 
    </div>
  );
}

export default ServiceHero;
