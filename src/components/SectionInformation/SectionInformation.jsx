import "./SectionInformation.css";
import { Col, Row } from "react-bootstrap";
import Title from "../Title/Title";
import { additionalInformation } from "../../data/information";
import ServiceCardHorizental from "../ServiceCardHorizental/ServiceCardHorizental";
import img from "./../../assets/features.jpg";

const SectionInformation = () => {
  return (
    <Row className="g-5">
      <Col lg xs={12}>
        <img
          src={img}
          alt="lab"
          className="w-100 h-100 object-fit-cover back_img"
        />
      </Col>
      <Col lg xs={12}>
        <Title
          title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi excepturi rem ad, vel quibusdam tenetur molestiae incidunt voluptatem tempore mollitia blanditiis officiis doloremque quia iure!"
          alignStart
        />
        {additionalInformation.map((element, index) => (
          <ServiceCardHorizental
            key={index}
            title={element.title}
            number={element.number}
            icon={element.icon}
            info
          />
        ))}
      </Col>
    </Row>
  );
};

export default SectionInformation;
