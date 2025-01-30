import React from "react";
import heroBg from "../../assets/images/heroBg.png";
import locationIcon from "../../assets/images/locationIcon.png";

export function Hero() {
  return (
    <div className="relative">
      <img
        className="w-full block"
        src={heroBg}
        alt="Hero Background"
        loading="lazy"
      />

      <div className="absolute top-0 w-full flex flex-col gap-4 pt-[284px] px-[295px] text-center">
        <h1 className="text-[48px] font-normal text-white mx-auto">
          Explore the world with a smile
        </h1>
        <p className="text-[16px] text-white max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo.
        </p>

        <div className="w-[74%] mx-auto flex flex-wrap md:flex-nowrap p-4 justify-evenly bg-white items-center rounded-lg shadow-lg">
          <div className="flex items-center gap-4 border-r p-3 w-[30%]">
            <img src={locationIcon} alt="Location Icon" loading="lazy" />
            <span>City or Destination</span>
          </div>

          <div className="p-3 border-r w-[25%] text-center">Date of stay</div>

          <div className="p-3 w-[20%] text-center">Person</div>

          <button className="bg-green-500 text-white p-2 rounded w-[25%] hover:bg-green-600 transition">
            Find trip now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
