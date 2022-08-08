import React from "react";
import StepsCoponent from "./StepsComponent";
import Logo1 from "./Images/1.1.svg";
import Logo2 from "./Images/1.1.svg";
import Logo3 from "./Images/1.1.svg";
import Logo4 from "./Images/1.1.svg";

function Steps() {
  const Items = [
    {
      logo: Logo1,
      step: "Step 1",
      header: "Create Account",
      para: "Create Your Account and Verify",
    },
    {
      logo: Logo2,
      step: "Step 2",
      header: "Place Your Order",
      para: "Define Your item and upload design",
    },
    {
      logo: Logo3,
      step: "Step 3",
      header: "Online Payment",
      para: "Pay online within a minute from any banking integration method",
    },
    {
      logo: Logo4,
      step: "Step 4",
      header: "Delivery",
      para: "Confirm your location and order details",
    },
  ];
  return (
    <div className="w-11/12 m-auto flex flex-col sm:flex-row items-center justify-between my-[30px]">
      {Items.map((item) => {
        return (
          <StepsCoponent
            img={item.logo}
            step={item.step}
            header={item.header}
            para={item.para}
          />
        );
      })}
    </div>
  );
}

export default Steps;
