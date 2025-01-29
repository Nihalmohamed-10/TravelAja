import React from "react";
import { destination } from "../../data.js";

function Destination() {
  return (
    <div className="mx-auto mt-32 max-w-7xl">
      <div className="text-center">
        <p className="text-[16px] font-bold text-[#295943]">top destination</p>
        <h2 className="text-[27px] font-bold">Discover your love</h2>
      </div>

      <div className="grid grid-cols-3 justify-items-center gap-y-6 gap-x-6">
        {destination.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-6 border border-gray-300 shadow-lg rounded-lg space-y-4"
          >
            <div className="w-full">
              <img
                src={item.img}
                alt="img"
                className="w-full h-auto rounded-md"
              />
            </div>

            <p className="text-[19px] font-bold text-gray-800">
              {item.location}
            </p>

            <div className="flex justify-between items-center">
              <p className="text-[#295943] text-[16px] font-bold">{item.rp}</p>
              <div className="flex items-center gap-2">
                <img src={item.gps} alt="gps icon" className="w-5 h-5" />
                <p className="text-gray-600">{item.days}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
