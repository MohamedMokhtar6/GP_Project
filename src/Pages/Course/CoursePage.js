import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Courselesson from '../../Components/Coursess/Courselesson';
import Navs from '../../Components/NavBar/Navs'

function CoursePage() {
    const parm = useParams();
    console.log(parm.id)
    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <Navs />
            <Container style={{ minHeight: "89vh" }} className=' mt-4  text-center'>
                <h1>Neural Network</h1>
                <Courselesson />

            </Container>
        </div>
    )
}

export default CoursePage