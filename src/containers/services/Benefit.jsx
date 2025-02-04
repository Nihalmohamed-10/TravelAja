import React from "react";
import { benefit } from "../../data";

function Benefit() {
  return (
    <div className=" mt-20 flex flex-col items-center pb-20">
      <div className="text-center">
        <p className="">BENEFITS</p>
        <h2 className="text-[27px] font-bold">OUR SERVICE</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:mt-10 xl:grid-cols-3 xl:w-[90%]">

        {benefit.map((item, index) => (
          <div className="flex gap-4 w-[80%] mx-auto xl:w-full" key={index}>
            <div className="w-[48px] h-[64px]">
              <img className="w-[100%] block" src={item.img} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[27px] font-bold">{item.head}</h3>
              <p className="max-w-[308px] text-[16px] font-light xl:text-lg leading-loose">
                {item.content}
              </p>
              <button className="font-bold cursor-pointer bg-[#43B97F] w-[119px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-xl text-[white]">
              Read More
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefit;
