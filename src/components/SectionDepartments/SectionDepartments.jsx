import React, { useState } from "react";
import Title from "../Title/Title";
import { Col, Container, Row } from "react-bootstrap";
import { departments } from "../../data/departments";
import "./SectionDepartments.css";

const SectionDepartments = () => {
  const [selected, setselected] = useState(0);
  return (
    <div className="py-5">
      <Container>
        <Title
          title="Departments"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis!"
        />
        <Row className="pt-4 g-4">
          <Col lg={3} md={6}>
            {departments.map((element, index) => (
              <div
                key={index}
                className={`py-3 tab ${index == selected ? "active" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => setselected(index)}
              >
                <p className="mb-0 fw-bold">{element.title}</p>
              </div>
            ))}
          </Col>
          <Col lg={3} md={12} className="order-md-3">
            <img src={departments[selected].img} alt="labs" className="w-100" />
          </Col>
          <Col lg={6} md={6}>
            <h3 className="mb-4">{departments[selected].title}</h3>
            <p>{departments[selected].text}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionDepartments;
