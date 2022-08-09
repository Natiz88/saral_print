import "./App.css";
import Navbar from "./Navbar/Navbar";
import Slider from "./Carousel/Carousel";
import { useState } from "react";
import Modals from "./Modal";
import Description from "./Description/Description";
import HotDeals from "./HotDeals/HotDeals";

function App() {
  const [isModalActive, setModalActive] = useState(false);
  const toggleModal = () => {
    setModalActive(!isModalActive);
  };

  return (
    <>
      <Navbar toggle={toggleModal} />
      {/* <Slider />
      <Modals isActive={isModalActive} toggle={toggleModal} />
      <Description />
      <HotDeals /> */}
    </>
  );
}

export default App;
