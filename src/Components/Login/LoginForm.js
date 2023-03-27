import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce } from 'react-reveal'
import { Link } from 'react-router-dom'

function LoginForm() {
    return (
        <Container style={{ minHeight: '82vh' }}>
            <Bounce left>

                <Row className=' m-5 justify-content-center '>
                    <Col style={{ width: '400px', height: "600px", flex: "none" }} className=' p-0 reduceL d-flex flex-column text-center align-items-center  '>
                        <h2 className='fw-bold' style={{ marginTop: "150px" }}>Sign In</h2>
                        <input type={'email'} placeholder='Email' className='my-3 inp' />
                        <input type={'password'} placeholder='Password' className='my-3 inp' />
                        <Link className='link text-dark mt-4 ' to={'/forgotpassword'}>Forgot your password?</Link>
                        <button className='text-main my-3 bt2 bg-main my-4'>SING IN</button>

                    </Col>
                    <Col style={{ width: '400px', height: "600px", flex: "none" }} className='bg-main p-0 reduceR creame  d-flex flex-column align-items-center justify-content-center '>
                        <h2 className='my-2 text-main'>Sign Up</h2>
                        <p className='my-2 text-main'>Sign up here if you don't have account.</p>
                        <Link to={'/signup'} className='link'>

                            <button className='border-main bt my-3 text-main'>SING UP</button>
                        </Link>
                    </Col>
                </Row>
                <Link to={'/admin/allusers'} className='link'>

                    <button className='  my-3'>Admin</button>
                </Link>
            </Bounce>
        </Container>
    )
}

export default LoginForm