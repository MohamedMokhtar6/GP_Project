import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "../../Images/contact.png";

function ContactUs() {
  return (
    <>
      <Container className="my-4 ">
        <Row className="p-5">
          <Col sm="6">
            <h2 className="fw-bolder fs-1 mb-2">Get in touch with us </h2>
            <p className="fs-5 mb-2">
              We are happy to contact you with any problem or comment
            </p>
            <img width={"500"} className="my-2" src={img} alt="Image" />
          </Col>
          <Col sm="6" className="d-flex align-items-center flex-column">
            <input
              type="text"
              placeholder="Your Name"
              className="d-block my-2 w-75 p-2 "
              style={{ borderRadius: "10px", backgroundColor: "#efefef" }}
            />
            <input
              type="email"
              placeholder="Email"
              className="d-block my-2 t w-75 p-2 "
              style={{ borderRadius: "10px", backgroundColor: "#efefef" }}
            />
            <input
              type="text"
              placeholder="Subject"
              className="d-block my-2  w-75 p-2 "
              style={{ borderRadius: "10px", backgroundColor: "#efefef" }}
            />
            <textarea
              placeholder="Write Your Message"
              rows={"10"}
              style={{
                resize: "none",
                borderRadius: "10px",
                backgroundColor: "#efefef",
              }}
              className="d-block my-2  w-75 p-2 "
            />
            <button
              className="text-white my-1 bt2  "
              style={{ backgroundColor: "#14122a" }}
            >
              Send Message
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUs;
