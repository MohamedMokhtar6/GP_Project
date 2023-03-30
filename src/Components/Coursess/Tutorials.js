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

function Tutorials() {
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
  console.log(items);
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
    </div>
  );
}

export default Tutorials;
