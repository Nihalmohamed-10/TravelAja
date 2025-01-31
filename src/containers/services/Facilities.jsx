import React from "react";
import facilityImg1 from "../../assets/images/facilityImg1.png";
import facilityImg2 from "../../assets/images/facilityImg2.png";
import facilityImg3 from "../../assets/images/facilityImg3.png";
import facilityImg4 from "../../assets/images/facilityImg4.png";
import facilityBg from "../../assets/images/facilityBg.png";

function Facilities() {
  return (
    <div className="relative text-[white]">
      <div className=" w-[100%] h-[650px] md:h-[500px]">
        <img className="w-[100%] block h-[100%] object-cover " src={facilityBg} alt="Img1" />
      </div>
      <div className="absolute p-5 left-[0%] flex flex-col gap-5 justify-evenly items-center pb-20 top-[0px] md:flex-row md:mt-20 xl:w-full">
        <div>
          <img src="" alt="" />
        </div>
        <div className="flex flex-col gap-5 md:w-[50%]">
          <h1 className="text-[22px] font-bold">facilities</h1>
          <p className=" max-w-[580px] text-[14px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor purus non eni
          </p>
          <button className="w-[127px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] bg-[#43B97F] rounded-lg text-[white]">
            Read More
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 text-center md:w-[50%]">
          <div className="flex flex-col items-center p-5 bg-white rounded-xl xl:w-[80%]">
            <div>
              <img src={facilityImg1} alt="" />
            </div>
            <h2 className="text-[20px] text-black font-bold">Baby</h2>
            <p className="text-[14px] text-[#3D3E48]">FREE BUGGY</p>
          </div>
          <div className="flex flex-col items-center p-5 bg-white rounded-xl xl:w-[80%]">
            <div>
              <img src={facilityImg2} alt="" />
            </div>
            <h2 className="text-[20px] text-black font-bold">Drinks</h2>
            <p className="text-[14px] text-[#3D3E48]">INCLUDED</p>
          </div>
          <div className="flex flex-col items-center p-5 bg-white rounded-xl xl:w-[80%]">
            <div>
              <img src={facilityImg3} alt="" />
            </div>
            <h2 className="text-[20px] text-black font-bold">Camp</h2>
            <p className="text-[14px] text-[#3D3E48]">INCLUDED</p>
          </div>
          <div className="flex flex-col items-center p-5 bg-white rounded-xl xl:w-[80%]">
            <div>
              <img src={facilityImg4} alt="" />
            </div>
            <h2 className="text-[20px] text-black font-bold">World</h2>
            <p className="text-[14px] text-[#3D3E48]">CUSTOM TOURS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
