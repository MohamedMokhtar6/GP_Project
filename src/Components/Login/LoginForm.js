import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bounce } from "react-reveal";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <Container style={{ minHeight: "82vh" }}>
      <Bounce left>
        <Row className=" m-5 justify-content-center text-white  ">
          <Col
            style={{ width: "400px", height: "600px", flex: "none" }}
            className=" p-0 reduceL d-flex flex-column text-center align-items-center  "
          >
            <h2 className="fw-bold" style={{ marginTop: "150px" }}>
              Sign In
            </h2>
            <input type={"email"} placeholder="Email" className="my-3 inp" />
            <input
              type={"password"}
              placeholder="Password"
              className="my-3 inp"
            />
            <Link className="link  mt-4 " to={"/forgotpassword"}>
              Forgot your password?
            </Link>
            <button
              className="text-main my-3 bt2  my-4"
              style={{ backgroundColor: "var(--thrdColor)" }}
            >
              Sign IN
            </button>
          </Col>
          <Col
            style={{
              width: "400px",
              height: "600px",
              flex: "none",
              backgroundColor: "var(--thrdColor)",
            }}
            className=" p-0 reduceR  d-flex flex-column align-items-center justify-content-center "
          >
            <h2 className="my-2 text-main">Sign Up</h2>
            <p className="my-2 text-main">
              Sign up here if you don't have account.
            </p>
            <Link to={"/signup"} className="link">
              <button
                className="text-main my-3 bt2  my-4"
                style={{ backgroundColor: "var(--thrdColor)" }}
              >
                Sign Up Now
              </button>
            </Link>
          </Col>
        </Row>
        <Link to={"/admin/allusers"} className="link">
          <button className="  my-3">Admin</button>
        </Link>
      </Bounce>
    </Container>
  );
}

export default LoginForm;
