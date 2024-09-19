import React from "react";
import Title from "../Title/Title";
import { Col, Container, Row } from "react-bootstrap";
import SectionVideo from "../SectionVideo/SectionVideo";
import img from "./../../assets/about.jpg";
import { information } from "../../data/information";
import ServiceCardHorizental from "../ServiceCardHorizental/ServiceCardHorizental";
import SectionInformation from "../SectionInformation/SectionInformation";

const SectionAbout = () => {
  return (
    <div className="py-5">
      <Container>
        <Title
          title="About us"
          subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi facere nisi omnis?"
        />
        <SectionVideo videoImage={img} />
        <Row className="g-3 my-5">
          {information.map((element, index) => (
            <Col key={index} lg md={6}>
              <ServiceCardHorizental icon={element.icon} title={element.title} number={element.number} />
            </Col>
          ))}
        </Row>
        <SectionInformation />
      </Container>
    </div>
  );
};

export default SectionAbout;
