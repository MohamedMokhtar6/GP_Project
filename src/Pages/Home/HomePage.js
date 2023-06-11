import React from "react";
import Navs from "../../Components/NavBar/Navs";
import Landing from "../../Components/util/Landing";
import ContactUs from "../../Components/util/ContactUs";
import CourseCard from "../../Components/LearningPath/CourseCards";

function HomePage() {
  return (
    <>
      <Navs />
      <Landing />
      <CourseCard />
      <ContactUs />
    </>
  );
}

export default HomePage;
