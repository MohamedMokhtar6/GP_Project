import React from "react";
import "./CardOfCourse.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import image from "../../Images/neural.png";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function CardOfCourse(props) {
  return (
    <>
      <Grid item xs={9} sm={4} md={3}>
        <Link to={props.CourseLink} className="link">
          <Card className="card click" sx={{ minWidth: 200, minHeight: 269 }}>
            <CardContent>
              <Box className="containerr">
                <Typography gutterBottom variant="h5">
                  {props.CourseName}
                </Typography>
                <img src={image} alt="img" className="imgeeeee" />
              </Box>
              <Divider />
              <List>
                <ListItem>
                  <ListItemText secondary={props.CourseDes} />
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button size="small">Start</Button>
            </CardActions>
          </Card>
        </Link>
      </Grid>
    </>
  );
}

export default CardOfCourse;
