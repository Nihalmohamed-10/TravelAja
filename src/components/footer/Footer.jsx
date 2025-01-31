import React from "react";
import mainLogo from "../../assets/images/mainLogo.png";
import footicon1 from "../../assets/images/footIcon1.png";
import footicon2 from "../../assets/images/footIcon2.png";
import footicon3 from "../../assets/images/footIcon3.png";
import footicon4 from "../../assets/images/footIcon4.png";
import footicon5 from "../../assets/images/footIcon5.png";
function Footer() {
  return (
<div className="bg-[#295943] flex flex-wrap gap-5 items-center justify-evenly pt-[41px] pr-[50px] pb-[41px] pl-[50px]">

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
                <img src={footicon1} alt="" />
            </div>
            <div>
                <img src={footicon2} alt="" />
            </div>
            <div>
                <img src={footicon3} alt="" />
            </div>
            <div>
                <img src={footicon4} alt="" />
            </div>
            <div>
                <img src={footicon5} alt="" />
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
