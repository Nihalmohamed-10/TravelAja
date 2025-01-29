import React from "react";
import mainLogo from "../../assets/images/mainLogo.png"
import flag from "../../assets/images/flag.png"
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className=" flex items-center w-full pt-5 pr-12 pb-5 pl-12 justify-between bg-transparent absolute z-10">
      <div>
        <img src={mainLogo} alt="" />
      </div>
      <div className=" flex w-[44em] justify-evenly ">
      <Link className="text-white hover:font-bold" to="/">Home</Link> 
        <Link className="text-white hover:font-bold" to="/">Discover</Link>
        <Link className="text-white hover:font-bold" to="/services">Services</Link>
        <Link className="text-white hover:font-bold" to="/">News</Link>
        <Link className="text-white hover:font-bold" to="/about">About Us</Link>
        <Link className="text-white hover:font-bold" to="/">Contacts</Link>
      </div>
      <div className="flex items-center w-15 justify-evenly">
        <div>
          <img src={flag} alt="img" />
        </div>
        <div>
          <p className="text-white">ID</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
