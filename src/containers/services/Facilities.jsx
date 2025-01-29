import React from "react";
import facilityImg1 from "../../assets/images/facilityImg1.png";
import facilityImg2 from "../../assets/images/facilityImg2.png";
import facilityImg3 from "../../assets/images/facilityImg3.png";
import facilityImg4 from "../../assets/images/facilityImg4.png";
import facilityBg from "../../assets/images/facilityBg.png";

function Facilities() {
  return (
    <div className="relative text-[white]">
      <div className=" w-[100%]">
        <img
          className="w-[100%] block h-[550px]"
          src={facilityBg}
          alt="facilityImg1"
        />
      </div>
      <div className="absolute left-[19%] flex justify-evenly items-center pb-20 bottom-[0px] ">
        <div>
          <img src="" alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[47px] font-bold">facilities</h1>
          <p className=" max-w-[580px] text-[16px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor purus non eni
          </p>
          <button className="w-[127px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] bg-[#43B97F] rounded-lg text-[white]">
            Read More
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 text-center">
  <div className="flex flex-col items-center p-5 bg-white rounded-xl">
    <div>
      <img src={facilityImg1} alt="" />
    </div>
    <h2 className="text-[39px] text-black font-bold">Baby</h2>
    <p className="text-[16px] text-[#3D3E48]">FREE BUGGY</p>
  </div>
  <div className="flex flex-col items-center p-5 bg-white rounded-xl">
    <div>
      <img src={facilityImg2} alt="" />
    </div>
    <h2 className="text-[39px] text-black font-bold">Drinks</h2>
    <p className="text-[16px] text-[#3D3E48]">INCLUDED</p>
  </div>
  <div className="flex flex-col items-center p-5 bg-white rounded-xl">
    <div>
      <img src={facilityImg3} alt="" />
    </div>
    <h2 className="text-[39px] text-black font-bold">Camp</h2>
    <p className="text-[16px] text-[#3D3E48]">INCLUDED</p>
  </div>
  <div className="flex flex-col items-center p-5 bg-white rounded-xl">
    <div>
      <img src={facilityImg4} alt="" />
    </div>
    <h2 className="text-[39px] text-black font-bold">World</h2>
    <p className="text-[16px] text-[#3D3E48]">CUSTOM TOURS</p>
  </div>
</div>

      </div>
    </div>
  );
}

export default Facilities;
