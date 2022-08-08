import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "./../Images/image1.jpg";
import Image2 from "./../Images/image2.jpg";
import Image3 from "./../Images/image3.jpg";

function Slider() {
  return (
    <>
      <Carousel showThumbs={false}>
        <div>
          <img src={Image1} alt="pic1" />
        </div>
        <div>
          <img src={Image2} alt="pic2" />
        </div>
        <div>
          <img src={Image3} alt="pic3" />
        </div>
      </Carousel>
    </>
  );
}

export default Slider;
