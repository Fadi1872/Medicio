import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";
import { services } from "../../data/services";

const SectionService = () => {
  return (
    <div className="py-5">
      <Container>
        <Title
          title="Services"
          subTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloribus."
        />
        <Row className="g-5 mt-4">
          {services.map((element, index) => (
            <Col key={index} lg={4} md={6}>
              <div
                className="custom_shadow rounded-circle fs-3 d-flex align-items-center justify-content-center text-blue mx-auto mb-3"
                style={{ width: 70, height: 70 }}
              >
                {element.icon}
              </div>
              <Title title={element.title} subTitle={element.description} small />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SectionService;
