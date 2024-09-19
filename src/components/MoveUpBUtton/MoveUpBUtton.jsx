import React from "react";
import { FaArrowUp } from "react-icons/fa";

const MoveUpBUtton = () => {
  return (
    <a
      className="position-fixed bg-blue rounded-3 text-white d-flex align-items-center justify-content-center"
      style={{ width: 50, height: 50, right: 20, bottom: 20 }}
      href="#"
    >
      <FaArrowUp className="fs-4" />
    </a>
  );
};

export default MoveUpBUtton;
