import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navs() {
  return (
    <Navbar expand="lg" className="navBar bg-sec">
      <Container fluid>
        <Link className="link " to={"/"}>
          <Navbar.Brand className="text-main">Algorfit</Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ backgroundColor: "gold" }}
        />
        <Navbar.Collapse id="navbarScroll" className="text-center ">
          <Nav
            className="me-auto my-2 my-lg-0 hoverlink w-100 justify-content-center nav-pills "
            style={{}}
            navbarScroll
          >
            <Link to={"/"} className=" link text-main mx-2 p-1 ">
              Home
            </Link>
            <Link to={"/courses"} className="link text-main mx-2 p-1  ">
              Courses
            </Link>

            <a
              href={
                "https://mohamedmokhtar6-ml-playgrounf-streamlit-app-hg787m.streamlit.app/"
              }
              className="link text-main mx-2 p-1"
              target={"_blank"}
            >
              Playground
            </a>
            <Link to={"/computations"} className="link text-main mx-2 p-1">
              Computations
            </Link>
            <Link to={"/about"} className="link text-main mx-2 p-1">
              About Us
            </Link>
          </Nav>
          <div className="d-flex justify-content-evenly">
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Link to={"/login"} className="link">
              <Button className="text-main border-0 bg-main bt">Login</Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
