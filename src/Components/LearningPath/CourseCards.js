import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import decision_tree from "../../Images/decision_tree.png";
import SVM from "../../Images/SVM.jpg";
import random from "../../Images/random_forest.png";
import logistic from "../../Images/logistic2.png";
import { Link } from "react-router-dom";
function CourseCard() {
  return (
    <>
      <Container className="my-5 py-3">
        <Row className="my-5 py-3">
          <h1 className="fw-bold fs-3 mb-4">Students are viewing</h1>
          <Col lg="4">
            <Link to={"/"}>
              <Card style={{ width: "18rem", minHeight: "250px" }}>
                <Card.Img variant="top" src={random} />
                <Card.Body>
                  <span className="text-black-50">Jan 17, 2022</span>
                  <Card.Title>Random Forest</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg="4">
            <Link to={"/courses/14"}>
              <Card style={{ width: "18rem", minHeight: "250px" }}>
                <Card.Img variant="top" src={decision_tree} />
                <Card.Body>
                  <span className="text-black-50">Aug 17, 2019</span>
                  <Card.Title>Decission Tree</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg="4">
            <Link to={"/"}>
              <Card style={{ width: "18rem", minHeight: "250px" }}>
                <Card.Img variant="top" src={SVM} />
                <Card.Body>
                  <span className="text-black-50">Aug 30, 2021</span>
                  <Card.Title>Support Victor Machine</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

        <Row className="my-5 py-3">
          <h1 className="fw-bold fs-3 mb-4">Recommended for you</h1>
          <Col lg="4">
            <Link to={"/"}>
              <Card style={{ width: "18rem", minHeight: "250px" }}>
                <Card.Img variant="top" src={logistic} />
                <Card.Body>
                  <span className="text-black-50">Jan 17, 2022</span>
                  <Card.Title>Logistic Regression</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg="4">
            <Link to={"/"}>
              <Card style={{ width: "18rem", minHeight: "250px" }}>
                <Card.Img variant="top" src={decision_tree} />
                <Card.Body>
                  <span className="text-black-50">Aug 17, 2019</span>
                  <Card.Title>Decission Tree</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg="4">
            <Link to={"/"}>
              <Card style={{ width: "18rem", minHeight: "250px" }}>
                <Card.Img variant="top" src={SVM} />
                <Card.Body>
                  <span className="text-black-50">Aug 30, 2021</span>
                  <Card.Title>Support Victor Machine</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CourseCard;
