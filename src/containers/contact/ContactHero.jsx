import React from "react";
import contactImg from "../../assets/images/contactImg.jpg";

function ContactHero() {
  return (
    <div className='relative'>
            <div className='w-[100%]'>
                <img className='w-[100%] h-[300px] object-cover' src={contactImg} alt="Service Hero" />
            </div>
            <h2 className='text-[22px] font-bold text-[#FFFFFF] absolute left-[50px] bottom-[42px] xl:text-[30px]'>Contact Us</h2> 
        </div>
  );
}

export default ContactHero;
