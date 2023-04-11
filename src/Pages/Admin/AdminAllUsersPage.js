import React from "react";
import { Col, Row } from "react-bootstrap";
import AdminAllUser from "../../Components/Admin/AdminAllUser";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import Navs from "../../Components/NavBar/Navs";

function AdminAllUsersPage() {
  return (
    <>
      <Navs />
      <Row className="m-0">
        <Col xs="4" sm="3" className="side-nav">
          <AdminSidBar />
        </Col>
        <Col xs="8" sm="9">
          <AdminAllUser />
        </Col>
      </Row>
    </>
  );
}

export default AdminAllUsersPage;
