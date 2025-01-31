import React, { useState } from "react";
import mainLogo from "../../assets/images/mainLogo.png";
import flag from "../../assets/images/flag.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center w-full pt-5 pr-12 pb-5 pl-12 justify-between bg-transparent absolute z-10">
      <div>
        <img src={mainLogo} alt="Main Logo" />
      </div>

      <div className="hidden lg:flex w-[44em] justify-evenly">
        <Link className="text-white hover:font-bold" to="/">
          Home
        </Link>
        <Link className="text-white hover:font-bold" to="/">
          Discover
        </Link>
        <Link className="text-white hover:font-bold" to="/services">
          Services
        </Link>
        <Link className="text-white hover:font-bold" to="/">
          News
        </Link>
        <Link className="text-white hover:font-bold" to="/about">
          About Us
        </Link>
        <Link className="text-white hover:font-bold" to="/contact">
          Contacts
        </Link>
      </div>

      <div className="hidden lg:flex items-center w-15 justify-evenly">
        <div>
          <img src={flag} alt="Flag" />
        </div>
        <div>
          <p className="text-white">ID</p>
        </div>
      </div>

      <div
        className="lg:hidden flex items-center"
        onClick={handleHamburgerClick}
      >
        <FiMenu className="text-white text-2xl cursor-pointer" />
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-[#295943] text-center w-full h-[380px] p-5">
          <Link className="block text-white hover:font-bold py-2 mb-4" to="/">
            Home
          </Link>
          <Link className="block text-white hover:font-bold py-2 mb-4" to="/">
            Discover
          </Link>
          <Link
            className="block text-white hover:font-bold py-2 mb-4"
            to="/services"
          >
            Services
          </Link>
          <Link className="block text-white hover:font-bold py-2 mb-4" to="/">
            News
          </Link>
          <Link
            className="block text-white hover:font-bold py-2 mb-4"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="block text-white hover:font-bold py-2 mb-4"
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
