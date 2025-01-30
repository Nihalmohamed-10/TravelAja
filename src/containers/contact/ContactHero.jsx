import React from 'react';
import contacthero from '../../assets/images/contacthero.png'; 

function ContactHero() {
  return (
    <div className='relative'>
        <div className='w-[100%]'>
            <img className='w-[100%]' src={contacthero} alt="Service Hero" />
        </div>
        <h2 className='text-[33px] font-bold text-[#FFFFFF] absolute left-[69px] bottom-[44px]'>About Us</h2> 
    </div>
  );
}

export default ContactHero;