import React from "react";
import Modal from "react-modal";
import "./index.css";
import Form from "./Form";
Modal.setAppElement("#root");

function Modals({ isActive, toggle }) {
  const style = {
    content: {
      height: "450px",
      width: "80%",
      margin: "auto",
      borderRadius: "20px",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  };
  return (
    <Modal
      isOpen={isActive}
      className="absolute m-auto w-11/12 h-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl bg-white sm:w-2/5 z-100 rounded-[20px]"
    >
      <Form toggle={toggle} />
    </Modal>
  );
}

export default Modals;
