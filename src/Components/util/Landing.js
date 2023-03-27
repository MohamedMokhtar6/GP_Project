import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <Row className='land d-flex text-center justify-content-center position-relative m-0 align-items-center'>
            <Col>

                <div className='text-white  my-4 fw-bold  '>
                    <h3 className='fw-bold'>Welcome to our website</h3>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est excepturi dolores illum soluta dolorem asperiores quia adipisci deleniti vero. Labore laboriosam</p> */}
                </div>
                <Link to={'/signup'} className='link'>

                    <Button className="text-main border-main bg-transparent">Join Us Now</Button>
                </Link>
            </Col>
        </Row>
    )
}

export default Landing