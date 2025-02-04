import React from "react";
import { testimonial } from "../../data";

function Testimonial() {
  return (
    <div className="mx-auto mt-10 w-full pb-20 lg:mt-20">
      <div className="text-center">
        <p className="text-[16px] font-bold text-[#295943]">Testimonial</p>
        <h2 className="text-[27px] font-bold">What they say about us</h2>
      </div>
      <div className="text-center grid grid-cols-1 justify-items-center gap-y-6 gap-x-6 mt-10 lg:grid-cols-2 lg:mt-10 xl:grid-cols-3 xl:w-[90%] mx-auto lg:text-start">
        {testimonial.map((item, index) => (
          <div
            className="relative w-[1/3] p-2 group"
            key={index}
          >
           
            <div className="absolute inset-0 bg-[#43B97F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            
            <div className="flex items-center w-[264px] justify-start gap-5 relative z-10">
              <div>
                <img src={item.img} alt="img" />
              </div>
              <p className="mx-auto text-[23px] font-bold text-black group-hover:text-white transition-colors duration-300">{item.name}</p>
            </div>
            <p className="mt-10 text-[16px] w-[300px] xl:w-[90%] relative z-10 text-black group-hover:text-white transition-colors duration-300">
              {item.words}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;


