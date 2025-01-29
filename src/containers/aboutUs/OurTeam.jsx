import React from "react";
import { ourTeam } from "../../data";
import grayImg1 from "../../assets/images/grayImg1.png"
import grayImg2 from "../../assets/images/grayImg2.png"
import grayImg3 from "../../assets/images/grayImg3.png"
import grayImg4 from "../../assets/images/grayImg4.png"

function OurTeam() {
  return (
    <div className="mx-auto flex flex-col gap-4 pb-20 max-w-[1280px]">
      <h3 className="text-[27px] font-bold text-left">Our Teams</h3>
      <p className="text-[16px] font-extralight text-left">Lorem ipsum dolor sit amet</p>

      <div className="flex justify-between ">
        {ourTeam.map((item, index) => (
          <div key={index} className="flex flex-col gap-3 text-left">  
            <div>
              <img src={item.img} alt="img" className="" />
            </div>
            <h3 className="text-[19px] font-light text-left">{item.head}</h3> 
            <p className="text-[16px] font-extralight text-left">{item.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-40 flex justify-around pb-20">
        <div>
            <img src={grayImg1} alt="img" />
        </div>
        <div>
            <img src={grayImg2} alt="img" />
        </div>
        <div>
            <img src={grayImg3} alt="img" />
        </div>
        <div>
            <img src={grayImg4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
