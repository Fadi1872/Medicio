import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import FullScreenCarousal from "../FullScreenCarousal/FullScreenCarousal";
import { slides } from "../../data/slides";
import { services } from "../../data/services";
import ServiceCardSimple from "../ServiceCardSimple/ServiceCardSimple";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <FullScreenCarousal slides={slides} />
      </div>
      <Container className="my-5 py-5">
        <Row className="g-4">
          {services.slice(0, 4).map((element, index) => (
            <Col key={index} className="h-100" lg md={6} sm={12}>
              <ServiceCardSimple
                icon={element.icon}
                title={element.title}
                description={element.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Hero;
