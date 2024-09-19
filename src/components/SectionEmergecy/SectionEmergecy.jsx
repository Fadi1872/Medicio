import React from "react";
import { Container } from "react-bootstrap";

const SectionEmergecy = ({ title, text, button }) => {
  return (
    <div className="bg-blue py-5">
      <Container className="py-5 text-center text-white">
        <h2>{title}</h2>
        <p className="mb-4">{text}</p>
        <button className="px-4 py-2 text-white bg-transparent rounded-2 bordered_button">{button}</button>
      </Container>
    </div>
  );
};

export default SectionEmergecy;
