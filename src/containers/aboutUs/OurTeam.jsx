import React from "react";
import { ourTeam } from "../../data";
import grayImg1 from "../../assets/images/grayImg1.png";
import grayImg2 from "../../assets/images/grayImg2.png";
import grayImg3 from "../../assets/images/grayImg3.png";
import grayImg4 from "../../assets/images/grayImg4.png";

function OurTeam() {
  return (
    <div className="mx-auto flex flex-col gap-4 pb-20 max-w-[1280px] items-center">
      <h3 className="text-[27px] font-bold text-left">Our Teams</h3>
      <p className="text-[16px] font-extralight text-left">
        Lorem ipsum dolor sit amet
      </p>

      <div className="flex flex-wrap justify-between w-[80%]  gap-9 xl:w-[90%]">
        {ourTeam.map((item, index) => (
          <div key={index} className="mx-auto flex flex-col gap-3 text-left">
            <div>
              <img src={item.img} alt="img" className="" />
            </div>
            <h3 className="text-[19px] font-light text-left">{item.head}</h3>
            <p className="text-[16px] font-extralight text-left">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-20  grid grid-cols-2 gap-3 justify-around pb-20 md:gap-20 lg:grid-cols-4 2xl:gap-30">
        <div className="w-[70%] mx-auto lg:w-[100%]">
          <img src={grayImg1} alt="img" />
        </div>
        <div className="w-[70%] mx-auto lg:w-[100%]">
          <img src={grayImg2} alt="img" />
        </div>
        <div className="w-[70%] mx-auto lg:w-[100%]">
          <img src={grayImg3} alt="img" />
        </div>
        <div className="w-[70%] mx-auto lg:w-[100%]">
          <img src={grayImg4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
