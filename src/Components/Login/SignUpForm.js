import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Bounce } from 'react-reveal'


function SignUpForm() {
    return (
        <Container style={{ minHeight: '82vh' }}>
            <Bounce right >


                <Row className=' m-5 justify-content-center '>
                    <Col style={{ width: '400px', height: "600px", flex: "none" }} className='bg-main p-0 reduceL creame  d-flex flex-column align-items-center justify-content-center '>
                        <h2 className='my-2 text-main'>Sign In</h2>
                        <p className='my-2 text-main'>Sign in here if you  have account.</p>
                        <Link to={'/login'} className='link'>

                            <button className='text-main border-main bt my-3'>SING IN</button>
                        </Link>
                    </Col>
                    <Col style={{ width: '400px', height: "600px", flex: "none" }} className=' p-0 reduceR d-flex flex-column text-center align-items-center  '>
                        <h2 className='fw-bold' style={{ marginTop: "50px" }}>Sign Up</h2>
                        <input type={'text'} placeholder='First Name' className='my-3 inp' />
                        <input type={'text'} placeholder='Last Name' className='my-3 inp' />
                        <input type={'email'} placeholder='Email' className='my-3 inp' />
                        <input type={'text'} placeholder='User Name' className='my-3 inp' />
                        <input type={'text'} placeholder='Phone' className='my-3 inp' />
                        <input type={'password'} placeholder='Password' className='my-3 inp' />
                        <button className='text-main my-3 bt2 bg-main my-4'>SING UP</button>

                    </Col>
                </Row>
            </Bounce>
        </Container>
    )
}

export default SignUpForm