import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { testomonials } from "../../data/testomonials";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import { Col, Row } from "react-bootstrap";

const CardsCaarosal = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="py-5"
    >
      {testomonials.map((element, index) => (
        <Carousel.Item key={index}>
          <Row>
            {element.map((card, id) => (
              <Col
                key={id}
                className={
                  id == 1
                    ? "d-none d-md-block"
                    : id == 2
                    ? "d-none d-lg-block"
                    : ""
                }
              >
                <TestimonialsCard
                  name={card.name}
                  img={card.img}
                  job={card.job}
                  text={card.text}
                />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CardsCaarosal;
