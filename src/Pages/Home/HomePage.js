import React from 'react'
import Navs from '../../Components/NavBar/Navs'
import Landing from '../../Components/util/Landing'
import LearnPathContainer from '../../Components/LearningPath/LearnPathContainer'


function HomePage() {
    return (
        <>
            <Navs />
            <Landing />
            {/* <CourseContainer />
            <LearnPathContainer /> */}
        </>
    )
}

export default HomePage