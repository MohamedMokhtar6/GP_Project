import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminSidBar() {
  return (
    <>
      <Row
        className="my-1  p-0 text-center mx-0 bg-sec"
        style={{ minHeight: "77vh" }}
      >
        <Col className="d-flex flex-column  align-items-center">
          <Link
            to={"/admin/allusers"}
            className="fit my-3 bord hov link text-main "
          >
            All Users
          </Link>
          <Link
            to={"/admin/alltutorials"}
            className="fit my-3 bord hov link text-main"
          >
            All Tutorials
          </Link>
          <Link
            to={"/admin/allcompetitions"}
            className="fit my-3 bord hov link text-main"
          >
            All Competitions
          </Link>
          <Link
            to={"/admin/alllearningpathes"}
            className="fit my-3 bord hov link text-main"
          >
            All Learning Path's
          </Link>
          <Link
            to={"/admin/allquizzes"}
            className="fit my-3 bord hov link text-main"
          >
            All Quizzes
          </Link>
          <Link
            to={"/admin/createuser"}
            className="fit my-3 bord hov link text-main"
          >
            Create User
          </Link>
          <Link
            to={"/admin/createtutorial"}
            className="fit my-3 bord hov link text-main"
          >
            Create Tutorial
          </Link>
          <Link
            to={"/admin/createcompetition"}
            className="fit my-3 bord hov link text-main"
          >
            Create Competition
          </Link>
          <Link
            to={"/admin/createlearningpath"}
            className="fit my-3 bord hov link text-main"
          >
            Create Learning Path
          </Link>
          <Link
            to={"/admin/createquiz"}
            className="fit my-3 bord hov link text-main"
          >
            Create Quiz
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default AdminSidBar;
