import React from "react";
import travPointImg1 from "../../assets/images/travPointImg1.png";
import travPointImg2 from "../../assets/images/travPointImg2.png";
import travPointImg3 from "../../assets/images/travPointImg3.png";

function TravelersPoint() {
  return (
    <div className="flex mt-30 justify-evenly relative">
      <div className="w-[45%]">
          <div className="absolute left-[140px]">
            <img src={travPointImg3} alt="traveler point" />
          </div>
          <div className="absolute left-[405px] bottom-[-30px]">
            <img src={travPointImg2} alt="traveler point" />
          </div>
          <div className="absolute bottom-[99px] left-[537px]">
            <img src={travPointImg1} alt="traveler point" />
          </div>
      </div>
      <div className="flex flex-col gap-4 w-[37%] p-5">
        <p className="text-[16px] font-bold text-[#295943]">Travelers Point</p>
        <h2 className="text-[27px] font-bold">
          We help to find your dream place
        </h2>
        <p className="text-[16px] w-[83%] text-[#3D3E48]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi
        </p>
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-[27px] font-bold text-[#295943]">100+</h2>
            <p className="text-[16px] text-[#3D3E48]">Holiday Package</p>
          </div>
          <div>
            <h2 className="text-[27px] font-bold text-[#295943]">172</h2>
            <p className="text-[16px] text-[#3D3E48]">Hotels</p>
          </div>
          <div>
            <h2 className="text-[27px] font-bold text-[#295943]">68</h2>
            <p className="text-[16px] text-[#3D3E48]">Elite Transportation</p>
          </div>
          <div>
            <h2 className="text-[27px] font-bold text-[#295943]">32M+</h2>
            <p className="text-[16px] text-[#3D3E48]">
              we help to find your dream place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelersPoint;
