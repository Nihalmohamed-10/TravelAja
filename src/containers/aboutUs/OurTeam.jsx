import React from "react";
import { ourTeam } from "../../data";
import grayImg1 from "../../assets/images/grayImg1.png";
import grayImg2 from "../../assets/images/grayImg2.png";
import grayimg3 from "../../assets/images/grayimg3.png";
import grayImg4 from "../../assets/images/grayImg4.png";

function OurTeam() {
  return (
    <div className="mx-auto flex flex-col gap-4 pb-20 w-[100%] items-center ">
      <h3 className="text-[27px] font-bold text-left">Our Teams</h3>
      <p className="text-[16px] font-extralight text-left">
        Lorem ipsum dolor sit amet
      </p>

      <div className="flex flex-wrap justify-between w-[80%]  gap-9 lg:w-[90%] lg:mt-10">
        {ourTeam.map((item, index) => (
          <div key={index} className="mx-auto flex flex-col gap-3 text-left">
            <div>
              <img src={item.img} alt="img" className="" />
            </div>
            <h3 className="mx-auto text-[19px] font-light text-left xl:mx-0">{item.head}</h3>
            <p className="mx-auto text-[16px] font-extralight text-left xl:mx-0">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-20  grid grid-cols-2 gap-3 justify-around pb-20 md:gap-20 lg:grid-cols-4 2xl:gap-30 xl:justify-evenly xl:w-[80%]">
        <div className="w-[70%] mx-auto lg:w-[100%] xl:w-[50%]">
          <img src={grayImg1} alt="img" />
        </div>
        <div className="w-[70%] mx-auto lg:w-[100%]  xl:w-[50%]">
          <img src={grayImg2} alt="img" />
        </div>
        <div className="w-[70%] mx-auto lg:w-[100%]  xl:w-[50%]">
          <img src={grayimg3} alt="img" />
        </div>
        <div className="w-[70%] mx-auto lg:w-[100%]  xl:w-[50%]">
          <img src={grayImg4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
