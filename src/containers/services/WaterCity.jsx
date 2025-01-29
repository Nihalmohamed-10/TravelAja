import React from "react";
import { watercity } from "../../data";
import { waterDreams } from "../../data";
function WaterCity() {
  return (
    <div className="mt-20 pb-20">
      <div className="flex p-10 justify-evenly ">
        {watercity.map((item, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <div className="w-[44px]">
              <img src={item.img} alt="img" />
            </div>
            <p className="text-[19px] text-[#3D3E48] font-bold">{item.head}</p>
            <p className="text-[16px] font-light w-[280px]">{item.content}</p>
            <button className="bg-[#43B97F] w-[119px] pt-[5px] pr-[15px] pb-[5px] pl-[15px] rounded-xl text-[white]">
              {item.btnContent}
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-evenly">
        {waterDreams.map((item, index) => (
          <div className="flex flex-col gap-3" key={index}>
            <div className="relative">
              <div>
                <img src={item.img} alt="img" />
              </div>
              <div className="text-[white] flex flex-col gap-4 absolute top-[20px] left-[25px]">
                <h2 className="text-[23px] font-bold w-[225px]">{item.head}</h2>
                <p className="text-[16px] font-bold">{item.date}</p>
                <p className="text-[16px] w-[356px] font-light">
                  {item.content}
                </p>
                <button className="hover:bg-[green] w-[119px] pt-[5px] pr-[15px] pb-[5px] pl-[15px] border border-green-300 rounded-lg">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaterCity;
