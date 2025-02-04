import React from "react";
import heroBg from "../../assets/images/heroBg.png";
import locationIcon from "../../assets/images/locationIcon.png";
import BasicDatePicker from './BasicDatePicker'

function Hero() {
  return (
    <div className="relative">
      <div className="h-[500px] sm:h-[600px] lg:h-[780px] ">
        <img
          className="h-[500px] sm:h-[600px] lg:h-[780px]  w-full block"
          src={heroBg}
          alt="img"
        />
      </div>
      <div className="text-[20px] w-full flex flex-col gap-5 absolute pt-[284px]  pb-[0px]  bottom-[11px] lg:bottom-[225px]">
        <h1 className="text-[22px] text-center text-[white] w-[full] font-normal  mx-auto sm:text-[25px] lg:text-[47px]">
          Explore the world with a smile
        </h1>
        <p className="text-[11px] w-[70%] text-[white]  mx-auto text-center sm:text-[14px] lg:w-[50%] lg:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>
        <div className="w-[50%] pb-5 flex flex-col  mx-auto items-center  justify-evenly bg-white  rounded-lg lg:flex-row lg:p-2 lg:w-[70%] lg:justify-between xl:w-[60%]">
          <div className=" flex items-center justify-evenly    p-2 w-[100%] lg:w-[40%] sm:w-[100%]  lg:border-r">
            <div className="w-[18%]">
              <img src={locationIcon} alt="" />
            </div>
            
            <div className="text-[13px] lg:text-[16px] sm:text-[14px]">
                <input className=" p-2 w-[100%] placeholder-black" type="text" placeholder="City or Destination" />
            </div>
          </div>
          <div className="p-2 text-[11px] sm:text-[14px] lg:border-r lg:text-[16px] lg:w-[30%] sm:text-center lg:p-1">
            <BasicDatePicker
            />
          </div>
         
          <div className=" p-2 text-[13px] sm:text-[14px] lg:text-[16px]">
            <input className="text-center p-2 w-[100%] placeholder-black"type="number" placeholder="Person" />
          </div>
          <button className="cursor-pointer sm:text-[14px] bg-green-500 text-white p-2 rounded text-[11px] lg:text-[16px] lg:w-[190px] ">
            Find trip now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
