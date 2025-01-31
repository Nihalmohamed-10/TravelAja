import React from "react";
import contacthero from "../../assets/images/contacthero.png";

function ContactHero() {
  return (
    <div className='relative'>
            <div className='w-[100%]'>
                <img className='w-[100%] h-[184px]' src={contacthero} alt="Service Hero" />
            </div>
            <h2 className='text-[22px] font-bold text-[#FFFFFF] absolute left-[50px] bottom-[42px] xl:text-[30px]'>Contact Us</h2> 
        </div>
  );
}

export default ContactHero;
