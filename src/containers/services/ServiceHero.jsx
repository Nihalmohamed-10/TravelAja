import React from 'react';
// import ServicesHero from '../../assets/images/ServicesHero.png'; 
import serviceImg from "../../assets/images/serviceImg.jpg"

function ServiceHero() {
  return (
    <div className=' relative'>
        <div className='w-[100%] h-[300px]'>
            <img className='w-[100%] h-[100%] object-cover' src={serviceImg} alt="Service Hero" />
        </div>
        <h2 className='text-[22px] font-bold text-[#FFFFFF] absolute left-[50px] bottom-[42px] xl:text-[30px]'>Services</h2> 
    </div>
  );
}

export default ServiceHero;
