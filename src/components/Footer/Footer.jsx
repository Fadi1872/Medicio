import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-sec-blue py-5">
      <Container>
        <Row className="g-4">
          <Col lg={4} xs={12} className="text-md-start text-center">
            <h3 className="mb-5">Medicio</h3>
            <p>Adam street 25845, Los Angelos, LA 45226</p>
            <p className="mb-0">
              <span className="fw-bold">Phone: </span>+1 5684 458 456
            </p>
            <p>
              <span className="fw-bold">Email: </span>fadinoumih@gmail.com
            </p>
            <div className="d-flex align-items-center justify-content-md-start justify-content-center gap-3 flexwarp-warp">
              <div className="footer-icon_wrapper rounded-circle border border-dark">
                <RiTwitterXFill />
              </div>
              <div className="footer-icon_wrapper rounded-circle border border-dark">
                <FaFacebook />
              </div>
              <div className="footer-icon_wrapper rounded-circle border border-dark">
                <FaInstagram />
              </div>
              <div className="footer-icon_wrapper rounded-circle border border-dark">
                <FaLinkedin />
              </div>
            </div>
          </Col>
          <Col lg md={6} xs={12} className="text-md-start text-center">
            <h5 className="mb-3">Usful Links</h5>
            <p className="mb-2">Home</p>
            <p className="mb-2">About us</p>
            <p className="mb-2">Services</p>
            <p className="mb-2">Terms of services</p>
            <p className="mb-2">Private policy</p>
          </Col>
          <Col lg md={6} xs={12} className="text-md-start text-center">
            <h5 className="mb-3">Our Services</h5>
            <p className="mb-2">Web design</p>
            <p className="mb-2">Web development</p>
            <p className="mb-2">Product management</p>
            <p className="mb-2">Marketing</p>
            <p className="mb-2">Graphic design</p>
          </Col>
          <Col lg md={6} xs={12} className="text-md-start text-center">
            <h5 className="mb-3">Hic Solutions</h5>
            <p className="mb-2">adipisicing</p>
            <p className="mb-2">amet consectetur</p>
            <p className="mb-2">Voluptate</p>
            <p className="mb-2">officia</p>
            <p className="mb-2">dolor sit</p>
          </Col>
          <Col lg md={6} xs={12} className="text-md-start text-center">
            <h5 className="mb-3">Nubbis Illutmn</h5>
            <p className="mb-2">fugit facere</p>
            <p className="mb-2">iure nihil</p>
            <p className="mb-2">laborum</p>
            <p className="mb-2">perferendis</p>
            <p className="mb-2">Similique totam</p>
          </Col>
        </Row>
        <div className="bg-dark my-5 opacity-50" style={{ height: 1 }}></div>
        <p className="mb-2 text-center">
          Copyright <span className="fw-bold">Medicio</span> All rights reserved
        </p>
        <p className="mb-0 text-center">
          designed by <span className="text-blue">Fadi Noumih</span>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
