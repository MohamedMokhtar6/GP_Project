import './CourseCard.css';
function CourseCard (props) {
    return(
        <div className="CourseCard">
            <img src={props.photo} alt={props.alt}/>
            <a href="#" target="_blank"><h3>{props.name}</h3></a>       
        </div>
    )
}

export default CourseCard