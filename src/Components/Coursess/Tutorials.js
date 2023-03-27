import React from 'react';
import './Tutorials.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardOfCourse from './CardOfCourse';
import Navs from '../NavBar/Navs';



function Tutorials() {
  return (
    <div>
      <Navs />
      <Box className="head">
        <Typography variant='h2'>Your Gate To Enter Machine Learning World</Typography>
      </Box>
      <Grid container columnSpacing={1} rowSpacing={1} className="containerGrid   ">
        {/* <CardOfCourse CourseName="Neural Network" CourseDuration="2" CourseLessons="7" CourseLink='./neuralNetwork' /> */}
        <CardOfCourse CourseName="Decision Tree" CourseDuration="5" CourseLessons="40" CourseLink='./decisionTree' />
        <CardOfCourse CourseName="SVM" CourseDuration="2.5" CourseLessons="32" CourseLink='./svm' />
        <CardOfCourse CourseName="K Nearest Neighbor" CourseDuration="3" CourseLessons="35" CourseLink='./kNearestNeighbor' />
        {/* <CardOfCourse CourseName="Multi Class Classification" CourseDuration="1" CourseLessons="15" CourseLink='./multiClassClassification' /> */}
      </Grid>
    </div>
  )
}

export default Tutorials