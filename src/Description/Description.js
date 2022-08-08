import React from "react";
import Steps from "./Steps";

function Description() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide mt-[10px]">
          How <span className="text-red-600">Saral</span>{" "}
          <span className="text-blue-600">Print</span> Works ?
        </h1>
        <p className="text-center text-xs sm:text-sm md:text-base">
          Be a part of saral print in 4 simple steps
        </p>
        <p className="text-center text-xs sm:text-sm md:text-base">
          Let's get started
        </p>
      </div>
      <Steps />
    </div>
  );
}

export default Description;
