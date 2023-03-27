import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Navs from '../../NavBar/Navs'
import img1 from '../../../Images/Svm/1.png'
import img2 from '../../../Images/Svm/2.png'
import img3 from '../../../Images/Svm/3.png'
import img4 from '../../../Images/Svm/4.png'
import img5 from '../../../Images/Svm/5.png'
import img6 from '../../../Images/Svm/6.png'
import img7 from '../../../Images/Svm/7.png'
import img8 from '../../../Images/Svm/8.png'
import img9 from '../../../Images/Svm/9.png'

function SvmPage() {
    return (
        <>
            <Container className='minH fs-4 '>
                <Row className='m-3 my-4'>
                    <h2>Support Vector Machine</h2>
                    <p>Support Vector Machine (SVM) is a supervised machine
                        learning algorithm that can be employed for both classification
                        and regression purposes as support vector classification (SVC)
                        and support vector regression (SVR).
                         They are more commonly used in classification problems.</p>
                </Row>
                <Row className='m-3'>
                    <h4>SVM Intuition</h4>
                    <p>Consider some usual points on a 2 dimensional space with two columns x1
                        & x2. How can we derive a line that will separate these two different points
                        and classify them separately?</p>
                    <img src={img1} className=' w-50 mx-auto' />
                    <p> Well there can be numerous ways of drawing lines in between that will
                        achieve the same result as shown.</p>
                    <img src={img2} className=' w-50 mx-auto' />
                    <p> SVM are about finding the best decision boundary that will help us to
                        separate out space into classes. The required line is searched through
                        Maximum Margin.</p>
                    <img src={img3} className=' w-50 mx-auto' />
                    <p>  Maximum Margin means that the distance between the line and each of
                        these points (touching Red and Green point) is equidistant. The boundary
                        points are know as Support Vectors.</p>
                    <img src={img4} className=' w-50 mx-auto' />
                    <p> Now we have got the line in middle which is called the maximum margin
                        Hyperplane or the maximum margin classifier. In 2D space its just like a
                        classifier like a line but in multidimensional space its a Hyperplane.</p>
                    <img src={img5} className=' w-50 mx-auto' />
                    <p> So the boundary touching to Green one is called the Positive Hyperlane
                        and the boundary touching to Red is called the Negative Hperplane.</p>
                    <img src={img6} className=' w-50 mx-auto' />
                </Row>
                <Row className='m-3 '>
                    <h4>Why SVM is difference?</h4>
                    <p>Predominantly a Machine Algorithm try to learn from apples that are very
                        like apples and same for orange. So it would know what an apple and what
                        an orange is and that’s how most of the Machine Learning algorithms work
                        and based on that it will be able to make some predictions.</p>
                    <img src={img7} className=' w-50 mx-auto' />
                    <p>In SVM, it's slight different. E.g in apple category it tries to find out an apple
                        which more looks like an orange and in orange category it tries to find out
                        an orange which more looks like an apple. Those two things becomes
                        'Support Vectors' which are close to the 'Maximum Margin'.</p>
                    <img src={img8} className=' w-50 mx-auto' />
                </Row>
                <Row className='m-3 '>
                    <h4>Support Vector Machine</h4>
                    <img src={img9} className=' w-75 mx-auto' />
                    <p className='text-center'>That means, every datapoint x must have a distance to the hyperplane larger than the margin</p>

                </Row>

            </Container>
        </>
    )
}

export default SvmPage