import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LessonCard from './LessonCard'

function Courselesson(props) {
    return (
        <Row>
            <Col>
                <h5 className='d-flex fw-bold mx-4'>Course Lessons</h5>
                <LessonCard num='01' name='What is a neural network?' />
                <LessonCard num='02' name='Why are neural networks important?' />
                <LessonCard num='03' name='What are neural networks used for?' />
                <LessonCard num='04' name='How do neural networks work?' />
                <LessonCard num='05' name='What are the types of neural networks?' />
                <LessonCard num='06' name='How to train neural networks?' />
                <LessonCard num='07' name='What is deep learning in the context of neural networks?' />

            </Col>
        </Row>

    )
}

export default Courselesson