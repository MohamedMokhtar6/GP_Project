import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Landing() {
  const [user, setUser] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token") != null) setUser(true);
  }, []);

  return (
    <>
      <Row className="land d-flex text-center justify-content-center m-0 align-items-center bg-white">
        <Col>
          <div className="text-dark my-4 fw-bold  ">
            <h1 className="fw-bold fs-1 mb-5">Welcome to Algorfit Academy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              excepturi dolores illum soluta dolorem asperiores quia adipisci
              deleniti vero. Labore laboriosam Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Est excepturi dolores illum soluta
              dolorem asperiores quia adipisci deleniti vero. Labore laboriosam
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
      </Row>
    </>
  );
}

export default Landing;
