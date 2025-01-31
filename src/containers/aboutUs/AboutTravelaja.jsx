import React from "react";
import aboutTravel from "../../assets/images/aboutTravel.png";

function AboutTravelaja() {
  return (
    <div className="flex flex-wrap gap-8 justify-evenly items-center pb-20">
      <div className="flex flex-col gap-3 max-w-[60%] lg:max-w-[47%]">
        <h2 className="text-[27px] font-bold">About Travelaja.com</h2>
        <p className="text-[16px]  font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum
          et in feugiat. Platea in diam, est congue. Posuere sapien morbi augue
          ultrices. Et facilisi orci sollicitudin placerat lacus lacus nibh.
          Egestas semper massa viverra massa proin in morbi placerat. Pharetra
          nec, est non integer nisi, ut faucibus. Non, in nam sollicitudin vitae
          volutpat ac molestie. Turpis pellentesque sit pellentesque id cras
          lobortis tortor, blandit.
        </p>
        <p className="text-[16px]  font-extralight">
          Id ac non, semper turpis maecenas. Convallis tempor fringilla quisque
          arcu, dictum. Vitae cursus vel netus tincidunt vitae. Malesuada velit,
          at mattis adipiscing quisque tristique id magna. Blandit porta sit nam
          magna sit. Turpis vestibulum facilisis placerat habitant gravida eget.
          Lacus pretium, arcu non adipiscing sed faucibus semper eget tempor.
        </p>
      </div>
      <div className="max-w-[354px]">
        <img src={aboutTravel} alt="img" />
      </div>
    </div>
  );
}

export default AboutTravelaja;
