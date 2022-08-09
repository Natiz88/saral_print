import React from "react";
import { useState } from "react";
import logo from "./../Images/logo-text.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Links from "./Links/Links";

function Navbar({ toggle }) {
  const [isToggleActive, setToggleActive] = useState(false);
  const toggleBurger = () => {
    setToggleActive(!isToggleActive);
  };
  return (
    <>
      <nav className="flex flex-col items-center sm:flex-row sm:justify-between relative w-full h-[100px] sm:h-[60px] bg-white text-sm sm:text-md md:text-lg lg:text-xl">
        <div className=""></div>
        <div className="w-11/12 flex justify-between items-center sm:w-1/5 h-1/2 sm:h-full">
          <img
            src={logo}
            alt="logo"
            className="w-2/5 sm:w-full h-full focus:outline-none"
          />
          <i class="sm:hidden cursor-pointer" onClick={toggleBurger}>
            {!isToggleActive ? (
              <GiHamburgerMenu className="text-[25px]" />
            ) : (
              <ImCross />
            )}
          </i>
        </div>
        <div className="flex items-center justify-between h-1/2 sm:h-full w-11/12 sm:w-3/4 ">
          <div className="flex items-center w-4/6 h-3/6 sm:h-3/5 relative">
            <input
              type="text"
              className="h-full w-full pl-3 relative rounded-[10px] bg-slate-200 focus:outline-none"
              placeholder="search a product..."
            />
            <i className="absolute right-2 text-[15px] sm:text-[20px] cursor-pointer">
              <AiOutlineSearch />
            </i>
          </div>
          <button
            className="w-2/5 ml-1 h-3/5 rounded-[5px] sm:w-1/3 sm:ml-4 sm:h-4/6 bg-sky-600 text-white mr-100px sm:block"
            onClick={toggle}
          >
            Login or create account
          </button>
        </div>
      </nav>
      <Links />
    </>
  );
}

export default Navbar;
