import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBarCustom.css"

const NavBarCustom = ({ img, buttonText }) => {
  const [fixed, setFixed] = useState("");

  const setNavToFixed = () => {
    let topOffset = window.scrollY;
    if (topOffset > 36) setFixed("top");
    else setFixed("");
  };

  useEffect(() => {
    setNavToFixed();
    document.addEventListener("scroll", setNavToFixed);

    return () => document.removeEventListener("scroll", setNavToFixed);
  }, []);
  return (
    <div className="position-relative">
      <Navbar
        expand="lg"
        fixed={fixed}
        className={`bg-body-tertiary ${fixed? "": "position-absolute top-0 w-100 z-500"}`}
      >
        <Container>
          <Navbar.Brand href="#">
            <img src={img} className="logo_img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              //   style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="text-blue">
                Home
              </Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action2">Services</Nav.Link>
              <Nav.Link href="#action2">Departments</Nav.Link>
              <Nav.Link href="#action2">Doctors</Nav.Link>
              <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <button className="btn-blue rounded-2 ms-lg-3 px-3 py-2">
              {buttonText}
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarCustom;
