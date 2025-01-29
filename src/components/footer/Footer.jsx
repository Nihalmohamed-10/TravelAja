import React from "react";
import mainLogo from "../../assets/images/mainLogo.png";
import fooricon1 from "../../assets/images/footicon1.png";
import fooricon2 from "../../assets/images/footicon2.png";
import fooricon3 from "../../assets/images/footicon3.png";
import fooricon4 from "../../assets/images/footicon4.png";
import fooricon5 from "../../assets/images/footicon5.png";
function Footer() {
  return (
<div className="bg-[#295943] flex justify-evenly pt-[41px] pr-[50px] pb-[41px] pl-[50px]">

      <div className="flex flex-col gap-3">
        <div>
          <img src={mainLogo} alt="img" />
        </div>
        <p className="text-[16px] w-[281px] text-[#FFFFFF]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel
        </p>
        <p className="text-[19px] font-bold text-[#FFFFFF]">Ikuti Kami</p>
        <div className="flex justify-between w-[202px]">
            <div>
                <img src={fooricon1} alt="" />
            </div>
            <div>
                <img src={fooricon2} alt="" />
            </div>
            <div>
                <img src={fooricon3} alt="" />
            </div>
            <div>
                <img src={fooricon4} alt="" />
            </div>
            <div>
                <img src={fooricon5} alt="" />
            </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 text-[#FFFFFF]">
        <p className="text-[19px] font-bold">Link</p>
        <a className="font-light" href="">Dicover</a>
        <a className="font-light" href="">Special Deal</a>
        <a className="font-light" href="">Services</a>
        <a className="font-light" href="">Community</a>
        <a className="font-light" href="">About Us</a>
      </div>
      <div className=" flex flex-col gap-4 text-[#FFFFFF]">
        <p className="text-[19px] font-bold">Services</p>
        <a className="font-light" href="">About Us</a>
        <a className="font-light" href="">Blog & Articles</a>
        <a className="font-light" href="">Term & Condition</a>
        <a className="font-light" href="">Privacy Policy</a>
        <a className="font-light" href="">Contact Us</a>
      </div>
      <div className=" flex flex-col gap-4 text-[#FFFFFF]">
        <p className="text-[19px] font-bold">Contact</p>
        <a className="font-light" href="">Address: Jl.Codelaras No.205A</a>
        <a className="font-light" href="">Kediri, Pare AG17</a>
        <a className="font-light" href="">Phone: 123 456 7890</a>
        <a className="font-light" href="">Email: myagungperdana@gmail.com</a>
        <a className="font-light" href="">Maps: Kediri, East java</a>
      </div>
    </div>
  );
}

export default Footer;
