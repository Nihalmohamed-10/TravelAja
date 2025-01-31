import React from "react";
import heroBg from "../../assets/images/heroBg.png";
import locationIcon from "../../assets/images/locationIcon.png";

 function Hero() {
  return (
    <div className="relative">
      <div className="h-[400px] lg:h-auto lg:w-[100%]">
        <img
          className="h-[400px] lg:h-auto w-full block"
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
        <div className="w-[50%] pb-5 flex flex-col  mx-auto items-center  justify-evenly bg-white  rounded-lg lg:flex-row lg:p-5 lg:w-[70%] lg:justify-between xl:w-[60%]">
          <div className=" flex items-center justify-evenly    p-2 w-[100%] lg:w-[37%] sm:w-[55%]  lg:border-r">
            <div>
              <img src={locationIcon} alt="" />
            </div>
            <div className="text-[11px] lg:text-[16px] sm:text-[14px]">
              City or Destination
            </div>
          </div>
          <div className="p-2 text-[11px] sm:text-[14px] lg:border-r lg:text-[16px] lg:w-[20%] sm:w-[33%]">
            Date of stay
          </div>
          <div className="p-2 text-[11px] sm:text-[14px] lg:text-[16px]">
            Person
          </div>
          <button className="sm:text-[14px] bg-green-500 text-white p-2 rounded text-[11px] lg:text-[16px] ">
            Find trip now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
