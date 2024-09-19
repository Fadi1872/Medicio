import "./SectionContact.css";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";

const SectionContact = () => {
  return (
    <div className="py-5">
      <Container>
        <Title
          title="Contact"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, amet?"
        />
      </Container>
      <iframe
        className="w-100"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.8827803802!2d-118.74138195907396!3d34.02003924141445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1726758611207!5m2!1sen!2s"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Container className="py-5">
        <Row className="g-3">
          <Col lg xs={12}>
            <Row className="g-3 h-100">
              <Col lg={12}>
                <div className="custom_shadow d-flex flex-column align-items-center p-4 h-100">
                  <div className="d-flex justify-content-center align-items-center mb-3 contact_icon">
                    <IoLocationOutline className="text-blue fs-2" />
                  </div>
                  <p className="mb-0 fw-bold">Address</p>
                  <p className="mb-0">
                    Adam street 25845, Los Angelos, LA 45226
                  </p>
                </div>
              </Col>
              <Col md xs={12}>
                <div className="custom_shadow d-flex flex-column align-items-center p-4">
                  <div className="d-flex justify-content-center align-items-center mb-3 contact_icon">
                    <FiPhone className="text-blue fs-2" />
                  </div>
                  <p className="mb-0 fw-bold">Call us</p>
                  <p className="mb-0">
                    +1 2545 547 456
                  </p>
                </div>
              </Col>
              <Col md xs={12}>
                <div className="custom_shadow d-flex flex-column align-items-center p-4">
                  <div className="d-flex justify-content-center align-items-center mb-3 contact_icon">
                    <FiMail  className="text-blue fs-2" />
                  </div>
                  <p className="mb-0 fw-bold">Email us</p>
                  <p className="mb-0">
                    fadinoumih@gmail.com
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg xs={12}>
            <div className="custom_shadow bg-white p-4">
              <form>
                <Container fluid>
                  <Row className="g-3">
                    <Col xs={6}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-100 p-2 border border-light-subtle"
                      />
                    </Col>
                    <Col xs={6}>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-100 p-2 border border-light-subtle"
                      />
                    </Col>
                    <Col xs={12}>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-100 p-2 border border-light-subtle"
                      />
                    </Col>
                    <Col xs={12}>
                      <textarea
                        rows={4}
                        placeholder="Your Email"
                        className="w-100 p-2 border border-light-subtle"
                      ></textarea>
                    </Col>
                  </Row>
                </Container>
                <div className="text-center">
                  <button className="btn-blue rounded-2 ms-lg-3 px-3 py-2 mt-4">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionContact;
