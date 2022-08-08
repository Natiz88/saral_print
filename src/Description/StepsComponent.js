import React from "react";

function StepsCoponent({ img, step, header, para }) {
  return (
    <div className="w-4/5 mt-[20px] sm:mt-0 sm:w-1/4 h-full flex items-center text-center">
      <div className="h-full w-2/5 my-auto">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="w-1/2 h-full flex flex-col items-center">
        <h1 className="text-red-600 text-2xl font-bold">{step}</h1>
        <h3 className="text-blue-600 text-1xl font-semibold">{header}</h3>
        <p className="text-xs font-light">{para}</p>
      </div>
    </div>
  );
}

export default StepsCoponent;
