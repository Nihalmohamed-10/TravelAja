import React from "react";
import { watercity } from "../../data";
import { waterDreams } from "../../data";
function WaterCity() {
  return (
    <div className=" pb-20 mt-20">
      <div className="grid grid-cols-1 gap-8 p-10 justify-evenly sm:grid-cols-2 xl:grid-cols-4">
        {watercity.map((item, index) => (
          <div className="text-center flex flex-col gap-4 md:mx-auto xl:text-start" key={index}>
            <div className="mx-auto  w-[44px] xl:mx-0">
              <img src={item.img} alt="img" />
            </div>
            <p className="text-[19px] text-[#3D3E48] font-bold">{item.head}</p>
            <p className=" mx-auto text-lg leading-relaxed text-[16px] font-light w-[280px]">{item.content}</p>
            <button className="mx-auto cursor-pointer fond-bold bg-[#43B97F] w-[119px] pt-[5px] pr-[15px] pb-[5px] pl-[15px] rounded-xl text-[white] xl:mx-0">
              {item.btnContent}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-20 grid grid-cols-1 gap-y-[40px] justify-evenly lg:grid-cols-2 xl:grid-cols-3 gap-3 xl:pl-[40px] xl:pr-[40px] ">
      {waterDreams.map((item, index) => (
          <div className="mx-auto flex flex-col sm:mx-auto xl:w-[96%]" key={index}>
            <div className="relative w-[80%] mx-auto sm:w-[100%]">
              <div className="h-[244px]  xl:w-[1/3] xl:h-[270px]">
                <img className="h-[100%] xl:w-full " src={item.img} alt="img" />
              </div>
              <div className="text-[white] flex flex-col gap-4 absolute top-[20px] left-[25px] xl:p-[16px]">
                <h2 className="text-[20px] font-bold w-[225px]">{item.head}</h2>
                <p className="text-[14px] w-[200px] font-bold">{item.date}</p>
                <p className="text-[14px] w-[250px] font-light xl:w-full xl:text-base/6">
                  {item.content}
                </p>
                <button className="cursor-pointer hover:bg-[green] w-[119px] pt-[5px] pr-[15px] pb-[5px] pl-[15px] border border-green-300 rounded-lg">
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
