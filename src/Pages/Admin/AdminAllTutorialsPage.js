import { Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import CardOfCourse from "../../Components/Coursess/CardOfCourse";
import Tutorials from "../../Components/Coursess/Tutorials";
import Navs from "../../Components/NavBar/Navs";
import { gatAllCourses } from "../../Redux/Actions/courseAction";
function AdminAllTutorialsPage() {
  const courses = useSelector((state) => state.Courses.Courses);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gatAllCourses());
  }, []);
  let items = [];
  if (courses.responseObject) {
    items = courses.responseObject;
  } else {
    items = [];
  }
  return (
    <>
      <Navs />
      <Row className="m-0">
        <Col sm="3">
          <AdminSidBar />
        </Col>
        <Col xs="8" sm="9">
          <Grid
            container
            columnSpacing={1}
            rowSpacing={1}
            className="containerGrid   "
          >
            {items ? (
              items.map((item, index) => {
                return (
                  <CardOfCourse
                    key={index}
                    CourseName={item.title}
                    CourseLink={`./${item.title}`}
                    CourseDes={item.description}
                  />
                );
              })
            ) : (
              <h1>No Course Found</h1>
            )}
          </Grid>
        </Col>
      </Row>
    </>
  );
}

export default AdminAllTutorialsPage;
