import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import img from "../../Images/comp.jpg";

function CompetitionCard(props) {
  return (
    <>
      <Card
        variant="outlined"
        sx={{ width: 320 }}
        className="m-2 text-center fit"
      >
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          {props.title}
        </Typography>
        <Typography level="body2">
          {props.startDate} <span className="fw-bold ">To</span>{" "}
          {props.endtDate}
        </Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
        ></IconButton>
        {/* <AspectRatio className="text-danger">{props.description}</AspectRatio> */}
        <div>
          <img src={img} />
          <p>{props.description}</p>
        </div>
        <Box sx={{ display: "flex" }}>
          <div className="mx-auto">
            <Typography level="body3" className="">
              Total prize:
            </Typography>
            <Typography fontSize="lg" fontWeight="lg">
              ${props.prize}
            </Typography>
          </div>
        </Box>
      </Card>
    </>
  );
}

export default CompetitionCard;
