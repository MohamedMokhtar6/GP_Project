import CourseCard from "./CourseCard";
import Photo from "../../Images/SVM.jpg";
import Photo2 from "../../Images/KNN.png";
import "./RandomCourses.css";

function RandomCourses () {
    return(
        <div className="Parent">
            <h1 className="title">Random Courses</h1>
            <CourseCard photo={Photo} className="Card" name="SVM"></CourseCard>
            <CourseCard photo={Photo2} className="Card" name="K-Nearest"></CourseCard>
            <CourseCard photo={Photo} className="Card" name="Neural"></CourseCard>
            <CourseCard photo={Photo} className="Card" name="Neural"></CourseCard>
        </div>

    )
}

export default RandomCourses