import React from "react";
import { testimonial } from "../../data";
function Testimonial() {
  return (
    <div className="mx-auto mt-10 max-w-7xl pb-20 lg:mt-20">
      <div className="text-center">
        <p className="text-[16px] font-bold text-[#295943]">Testimonial</p>
        <h2 className="text-[27px] font-bold">What they say about us</h2>
      </div>
      <div className=" grid grid-cols-1 justify-items-center gap-y-6 gap-x-6 mt-10 lg:grid-cols-2 lg:mt-10 xl:grid-cols-3 xl:w-[90%] mx-auto">
        {testimonial.map((item, index) => (
          <div
            className="p-4 hover:bg-[#43B97F] hover:text-[white]  "
            key={index}
          >
            <div className="flex items-center w-[264px] justify-start gap-5">
              <div>
                <img src={item.img} alt="img" />
              </div>
              <p className="text-[23px] font-bold">{item.name}</p>
            </div>
            <p className="mt-10 text-[16px] w-[300px]">{item.words}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
