import React from "react";
import heroBg from "../../assets/images/heroBg.png";
import locationIcon from "../../assets/images/locationIcon.png"
export function Hero() {
  return (
    <div className="relative">
      <div className="">
        <img className="w-full block" src={heroBg} alt="img" />
      </div>
      <div className="flex flex-col gap-4 absolute pt-[284px] pr-[299px] pb-[0px] pl-[295px] top-[0px] w-full">
      <h1 className="text-[48px] font-normal text-white mx-auto">Explore the world with a smile</h1>
      <p className="text-[16px] text-white w-2xl mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>
        <div className="w-[74%] mx-auto flex p-4  justify-evenly bg-white items-center rounded-lg">
          <div className="w-[22%] flex items-center  gap-4 border-r p-3 w-[34%] ">
            <div>
                <img src={locationIcon} alt="" />
            </div>
            <div >City or Destination</div>
          </div>
          <div className="p-3 w-[20%] border-r p-3">Date of stay</div>
          <div className="">Person</div>
          <button className="bg-green-500 text-white p-2 rounded w-[25%]">Find trip now</button>

        </div>
      </div>
    </div>
  );
}

export default Hero;
