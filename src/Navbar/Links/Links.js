import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./LinkItems.js";
import { IoMdArrowDropdown } from "react-icons/io";

const Links = ({ isToggleActive }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  console.log("toggle", heading, subHeading);

  return (
    <>
      {isToggleActive && (
        <div className="h-3/5 flex text-gray-800 relative top:0 shadow-lg pb-20 sm:pb-0 text-sm flex-col w-full items-left transition duration-1000 ease-out sm:pl-0 sm:h-[30px] sm:flex-row sm:items-center sm:justify-around">
          {links.map((link) => (
            <div>
              <div className="px-1 text-left md:cursor-pointer group z-100 border-t-2 pl-7 border-gray-100 rounded-sm">
                <p
                  className="py-2 flex cursor-pointer justify-between items-center md:pr-0 pr-5 group"
                  onClick={() => {
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("");
                    setSubHeading("");
                  }}
                >
                  {link.name}
                  <IoMdArrowDropdown />
                </p>
                {link.subMenu && (
                  <div className="">
                    <div className="absolute top-4 hidden group-hover:md:block hover:md:block">
                      <div className="py-3">
                        <div
                          className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white border-t-2 border-l-2 border-gray-400 rotate-45"
                        ></div>
                      </div>
                      <div className=" border-solid border-gray-400 border-2 bg-white z-100 pl-3 flex flex-col items-center">
                        {link.sublinks.map((mysublinks) => (
                          <div>
                            <p className="text-lg font-[14px] text-gray-400 hover:text-black">
                              {mysublinks.Head}
                            </p>
                            {mysublinks.sublink.map((slink) => (
                              <p className="text-sm text-gray-600 my-2.5">
                                {slink.name}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Mobile menus */}
              <div
                className={`
            ${heading === link.name ? "md:hidden " : "hidden"}
          `}
              >
                {/* sublinks */}
                {link.sublinks.map((slinks) => (
                  <div>
                    <div className="">
                      <p
                        onClick={() =>
                          subHeading !== slinks.Head
                            ? setSubHeading(slinks.Head)
                            : setSubHeading("")
                        }
                        className="py-2 pl-2 cursor-pointer w-10/12 hover:bg-gray-100 hover:text-red-600 m-auto border-2 border-gray-100 justify-between font-normal flex items-center md:pr-0 pr-5"
                      >
                        {slinks.Head}
                        <IoMdArrowDropdown />
                      </p>
                      <div
                        className={`${
                          subHeading === slinks.Head ? "md:hidden" : "hidden"
                        }`}
                      >
                        {slinks.sublink.map((slink) => (
                          <p className="py-2 pl-16 w-4/5 m-auto border-2 border-gray-100 cursor-pointer hover:bg-gray-100 hover:text-red-600">
                            {slink.link}
                            {slink.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Links;
