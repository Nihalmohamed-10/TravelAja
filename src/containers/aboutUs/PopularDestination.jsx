import React from "react";
import GreenIcons from "./GreenIcons";
import greenIcn1 from "../../assets/images/greenIcn1.png";
import greenIcn2 from "../../assets/images/greenIcn2.png";
import greenIcn3 from "../../assets/images/greenIcn3.png";

function PopularDestination() {
  return (
    <div className="mt-20 flex flex-col gap-20 pb-20 w-full">
      <div>
        <div className="text-center">
          <h2 className="text-[22px] font-bold xl:text-[27px] font-bold">Why Choose Us</h2>
          <p className="text-[14px] font-light xl:text-[16px]">
            These popular destinations have a lot to offer
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-evenly md:flex-row md:flex-wrap xl:gap-1 ">
        <GreenIcons
          img={greenIcn1}
          heading={"Best price guarantee"}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        />
        <GreenIcons
          img={greenIcn2}
          heading={"Easy Booking"}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        />
        <GreenIcons
          img={greenIcn3}
          heading={"Customer Service 24h"}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        />
      </div>
    </div>
  );
}

export default PopularDestination;
