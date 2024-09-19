import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";

const SectionAppointment = () => {
  return (
    <div className="py-5 bg-sec-blue">
      <Container>
        <Title
          title="Make an Appontment"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eius!"
        />
        <form className="mt-5">
          <Container fluid>
            <Row className="g-4">
              <Col lg={4} md={6} xs={12}>
                <input type="text" className="w-100 px-3 py-2 border border-light-subtle" placeholder="your name" />
              </Col>
              <Col lg={4} md={6} xs={12}>
                <input type="email" className="w-100 px-3 py-2 border border-light-subtle" placeholder="your email" />
              </Col>
              <Col lg={4} md={6} xs={12}>
                <input type="number" className="w-100 px-3 py-2 border border-light-subtle" placeholder="your number" />
              </Col>
              <Col lg={4} md={6} xs={12}>
                <input type="date" className="w-100 px-3 py-2 border border-light-subtle" />
              </Col>
              <Col lg={4} md={6} xs={12}>
                <select name="" id="" className="w-100 px-3 py-2 border border-light-subtle">
                  <option value="" disabled selected>slelect department</option>
                  <option value="">from the other</option>
                  <option value="">side</option>
                </select>
              </Col>
              <Col lg={4} md={6} xs={12}>
                <select name="" id="" className="w-100 px-3 py-2 border border-light-subtle">
                <option value="" disabled selected>slelect doctor</option>
                  <option value="">from the other</option>
                  <option value="">side</option>
                </select>
              </Col>
              <Col lg={12}>
                <textarea name="" id="" className="w-100 px-3 py-2 border border-light-subtle" rows={4} placeholder="message (optional)"></textarea>
              </Col>
            </Row>
          </Container>
          <div className="text-center mt-4">
            <button className="btn-blue rounded-2 ms-lg-3 px-3 py-2" type="submit">
              Make an Appontment
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default SectionAppointment;
