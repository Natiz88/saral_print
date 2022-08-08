import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";

function Links({ isActive, setActive }) {
  const links = [
    "Business Card",
    "Stationery",
    "Marketing Tools",
    "Business Essentials",
    "Events",
    "Signage",
    "Gifts & Promotion",
    "Flex",
    "Apparels",
    "Digital Print",
  ];
  const link =
    "absolute sm:block top-[100px] z-10 bg-black sm:bg-white h-full w-full sm:h-[40px] sm:static border-dotted border border-slate-400 text:xs sm:text-xs md:text-sm lg-text-md ";
  return (
    <div
      className={
        isActive ? link : `${link} hidden sm:block sm:w-full sm:h-[40px]`
      }
    >
      <ol className="flex items-center justify-around sm:justify-around flex-col sm:flex-row w-full h-full">
        {links.map((link) => {
          return (
            <>
              <li className="flex items-center content-between cursor-pointer text-white sm:text-blue-800">
                {link}
                <i className="ml-[5px]">
                  <IoIosArrowDropdown />
                </i>
              </li>
            </>
          );
        })}
      </ol>
    </div>
  );
}

export default Links;
