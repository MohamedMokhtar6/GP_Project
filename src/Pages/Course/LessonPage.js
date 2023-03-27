import React from 'react'
import { Container } from 'react-bootstrap'
import Navs from '../../Components/NavBar/Navs'

function LessonPage() {
    var img
    return (
        <>
            <Navs />
            <Container className='text-center my-5 minH'>
                <h1>What is a neural network?</h1>

            </Container>
        </>
    )
}

export default LessonPage