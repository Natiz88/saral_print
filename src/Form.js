import React from "react";
import { useState } from "react";
import { ImCross } from "react-icons/im";

function Form({ toggle }) {
  const [isActive, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!isActive);
  };
  const active =
    "absolute left-0 bg-blue-600 rounded-[20px] w-1/2 h-3/4 transition-all duration-500 ease-in-out";

  return (
    <div className="w-full relative h-full z-10 text-sm sm:text-md md:text-lg lg:text-xl">
      <i className="absolute top-4 right-4 cursor-pointer" onClick={toggle}>
        <ImCross />
      </i>
      <div className="relative flex w-4/5 m-auto mt-5 bg-white justify-around items-center cursor-pointer h-[45px] border-[1px] border-solid rounded-[20px]">
        <p
          className={
            !isActive
              ? "z-10 text-white w-1/2 text-center"
              : "z-10 w-1/2 text-center"
          }
          onClick={toggleActive}
        >
          Individual Account
        </p>
        <p
          className={
            isActive
              ? "z-10 text-white w-1/2 text-center"
              : "z-10 w-1/2 text-center"
          }
          onClick={toggleActive}
        >
          Corporate Account
        </p>
        <div
          className={
            !isActive ? active : `${active} translate-x-full bg-red-400`
          }
        ></div>
      </div>
    </div>
  );
}

export default Form;
