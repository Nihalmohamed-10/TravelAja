import React from "react";
import travPointImg1 from "../../assets/images/travPointImg1.png";
import travPointImg2 from "../../assets/images/travPointImg2.png";
import travPointImg3 from "../../assets/images/travPointImg3.png";

function TravelersPoint() {
  return (
    <div className="flex flex-col gap-70 mt-50 justify-evenly items-center lg:flex-row  lg:mt-20 ">
      <div className="relative ">
        <div className="w-[160px] absolute left-[-162px] top-[-80px] sm:left-[-207px] sm:w-[190px] lg:w-[222px] lg:left-[-48px] lg:top-[-184px] ">
          <img src={travPointImg3} alt="traveler point" />
        </div>
        <div className="absolute  w-[110px] left-[-8px] sm:w-[136px] sm:left-[-24px] sm:top-[10px] lg:w-[158px] lg:left-[166px] lg:top-[-77px] ">
          <img src={travPointImg2} alt="traveler point" />
        </div>
        <div className="absolute w-[100px] left-[64px] top-[-63px] sm:width-[118px] sm:left-[66px] sm:top-[-29px]  lg:w-[138px] lg:left-[270px] lg:top-[-156px] ">
          <img src={travPointImg1} alt="traveler point" />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[100%] p-5 md:w-[50%] md:gap-0px lg:w-[34%] xl:w-[40%] ">
        <p className="text-[16px] font-bold text-[#295943]">Travelers Point</p>
        <h2 className="text-[27px] font-bold">
          We help to find your dream place
        </h2>
        <p className="text-[16px] w-[83%] text-[#3D3E48] xl:w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          <div className="text-center xl:text-left">
            <h2 className="text-[27px] font-bold text-[#295943]">100+</h2>
            <p className="text-[16px] text-[#3D3E48]">Holiday Package</p>
          </div>
          <div className="text-center xl:text-left">
            <h2 className="text-[27px] font-bold text-[#295943]">172</h2>
            <p className="text-[16px] text-[#3D3E48]">Hotels</p>
          </div>
          <div className="text-center xl:text-left">
            <h2 className="text-[27px] font-bold text-[#295943]">68</h2>
            <p className="text-[16px] text-[#3D3E48]">Elite Transportation</p>
          </div>
          <div className="text-center xl:text-left">
            <h2 className="text-[27px] font-bold text-[#295943]">32M+</h2>
            <p className="text-[16px] text-[#3D3E48]">
              we help to find your dream place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelersPoint;
