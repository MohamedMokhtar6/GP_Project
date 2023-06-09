import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../Images/ml.jpg";

function Landing() {
  const [user, setUser] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token") != null) setUser(true);
  }, []);

  return (
    <>
      <Row className="land d-flex text-center justify-content-center m-0 align-items-center ">
        <Col sm="6">
          <div className="text-white my-4 fw-bold  ">
            <h1 className="fw-bold fs-1 mb-5">Welcome to Algorfit Academy</h1>
            <p>
              Our website is an unconventional educational website that relies
              on the practical application of what is learned, which helps in
              understanding scientific material quickly and effectively.
            </p>
          </div>
          {user ? null : (
            <Link to={"/signup"} className="link">
              <button
                className="text-main my-3 bt2  my-4"
                style={{ backgroundColor: "var(--thrdColor)", zIndex: "100" }}
              >
                Join Us Now For Free
              </button>
            </Link>
          )}
        </Col>
        <Col sm="6"></Col>
      </Row>
    </>
  );
}

export default Landing;
