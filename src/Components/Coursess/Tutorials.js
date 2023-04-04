import React from "react";
import "./Tutorials.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardOfCourse from "./CardOfCourse";
import Navs from "../NavBar/Navs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { gatAllCourses } from "../../Redux/Actions/courseAction";
import { Skeleton } from "@mui/material";
import { Container } from "react-bootstrap";

function Tutorials() {
  let div = document.querySelector(".html");
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
    <div>
      <Navs />
      <Box className="head">
        <Typography variant="h2">
          Your Gate To Enter Machine Learning World
        </Typography>
      </Box>

      <Grid
        container
        columnSpacing={1}
        rowSpacing={1}
        className="containerGrid   "
      >
        {items.length > 0 ? (
          items.map((item, index) => {
            return (
              <CardOfCourse
                key={index}
                CourseName={item.title}
                CourseLink={`./${item.id}`}
                CourseDes={item.description}
              />
            );
          })
        ) : (
          <Container className="d-flex justify-content-center gap-5">
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Container>
        )}
      </Grid>
    </div>
  );
}

export default Tutorials;
