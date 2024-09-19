import { Col, Container, Row } from "react-bootstrap";
import "./SectionVideo.css";
import { FaPlay } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";

const SectionVideo = ({ videoImage }) => {
  return (
    <Row className="my-5 g-3">
      <Col className="position-relative" lg={6} sm={12}>
        <img
          src={videoImage}
          alt="video"
          className="h-100 w-100 object-fit-cover"
        />
        <div className="position-absolute top-50 start-50 translate-middle bg-blue rounded-circle d-flex justify-content-center align-items-center play_button">
          <FaPlay className="fs-4 text-white" />
        </div>
      </Col>
      <Col lg={6} sm={12}>
        <h2>
          Lorem ipsum dolor sit consectetur adipisicing elit. Similique,
          architecto?
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          beatae delectus, odio fuga nihil maxime placeat magnam minima a
          accusamus!
        </p>
        <Container fluid>
          <Row>
            <Col xs={1}>
              <IoCheckmarkDone className="text-blue me-2 fs-4" />
            </Col>
            <Col xs={11}>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati.
              </p>
            </Col>
            <Col xs={1}>
              <IoCheckmarkDone className="text-blue me-2 fs-4" />
            </Col>
            <Col xs={11}>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati.
              </p>
            </Col>
            <Col xs={1}>
              <IoCheckmarkDone className="text-blue me-2 fs-4" />
            </Col>
            <Col xs={11}>
              <p className="mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                unde reiciendis, tempore optio itaque consectetur rem harum
                impedit ab doloribus.
              </p>
            </Col>
          </Row>
        </Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          impedit laborum officiis vel dolorem, voluptas dolores totam ad qui
          non! Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </Col>
    </Row>
  );
};

export default SectionVideo;
