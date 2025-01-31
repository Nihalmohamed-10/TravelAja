import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 

import flag from "../../assets/images/flag.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const isHomePage = location.pathname === "/";


  const hamburgerColor = isHomePage ? "bg-white" : "bg-black"; 
  const linkColor = isMenuOpen ? "text-white" : isHomePage ? "text-white" : "text-black";  
  const idColor = isHomePage ? "text-white" : "text-black";  
  const mainClr = isHomePage? "text-white" : "text-black"

  return (
    <div
      className="flex items-center w-full pt-5 pr-12 pb-5 pl-12 justify-between bg-transparent"
      style={isHomePage ? { zIndex: 10, position: "absolute" } : {}}
    >
      <div>
        
        <h3 className={`${mainClr} text-[30px] text-[white]`}>travelaja</h3>
        
      </div>

      <div className="hidden lg:flex w-[44em] justify-evenly">
        <Link className={`${linkColor} hover:font-bold`} to="/">
          Home
        </Link>
        <Link className={`${linkColor} hover:font-bold`} to="/">
          Discover
        </Link>
        <Link className={`${linkColor} hover:font-bold`} to="/services">
          Services
        </Link>
        <Link className={`${linkColor} hover:font-bold`} to="/">
          News
        </Link>
        <Link className={`${linkColor} hover:font-bold`} to="/about">
          About Us
        </Link>
        <Link className={`${linkColor} hover:font-bold`} to="/contact">
          Contacts
        </Link>
      </div>

      <div className="hidden lg:flex items-center w-15 justify-evenly">
        <div>
          <img src={flag} alt="Flag" />
        </div>
        <div>
          <p className={`${idColor}`}>ID</p> 
        </div>
      </div>

      <div
        className={`lg:hidden flex flex-col justify-between items-center w-6 h-6 cursor-pointer z-20`}
        onClick={handleHamburgerClick}
      >
        
        <div
          className={`w-full h-1 ${hamburgerColor} mb-1`} 
        ></div>
        <div
          className={`w-full h-1 ${hamburgerColor} mb-1`} 
        ></div>
        <div
          className={`w-full h-1 ${hamburgerColor}`} 
        ></div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-[#295943] text-center w-full h-[380px] p-5 z-30">
          <Link className={`${linkColor} block hover:font-bold py-2 mb-4`} to="/">
            Home
          </Link>
          <Link className={`${linkColor} block hover:font-bold py-2 mb-4`} to="/">
            Discover
          </Link>
          <Link
            className={`${linkColor} block hover:font-bold py-2 mb-4`}
            to="/services"
          >
            Services
          </Link>
          <Link className={`${linkColor} block hover:font-bold py-2 mb-4`} to="/">
            News
          </Link>
          <Link
            className={`${linkColor} block hover:font-bold py-2 mb-4`}
            to="/about"
          >
            About Us
          </Link>
          <Link
            className={`${linkColor} block hover:font-bold py-2 mb-4`}
            to="/contact"
          >
            Contacts
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
