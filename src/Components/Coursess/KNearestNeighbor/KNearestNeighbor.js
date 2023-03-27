import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Navs from '../../NavBar/Navs'
import img1 from '../../../Images/Knn/1.png'
import img2 from '../../../Images/Knn/2.png'
import img3 from '../../../Images/Knn/3.jpg'
import img4 from '../../../Images/Knn/14.jpg'
import img5 from '../../../Images/Knn/5.jpg'
import img6 from '../../../Images/Knn/6.png'
import img7 from '../../../Images/Knn/7.png'
import img8 from '../../../Images/Knn/8.png'
import img9 from '../../../Images/Knn/9.png'
import img10 from '../../../Images/Knn/10.png'
import img11 from '../../../Images/Knn/11.png'
import gif1 from '../../../Images/Knn/1.gif'
import gif2 from '../../../Images/Knn/2.gif'
import gif3 from '../../../Images/Knn/3.gif'
import gif4 from '../../../Images/Knn/4.gif'

function KNearestNeighbor() {
    return (
        <>
            <Container className='minH fs-4 '>
                <Row className='m-3 my-4 '>
                    <h1 className='text-center fw-bold mb-4'>K-Nearest Neighbor(KNN)</h1>
                    <h4>What is the KNN Algorithm?</h4>
                    <p>K-Nearest Neighbour is one of the simplest Machine Learning algorithms based on Supervised Learning technique.
                        K-NN algorithm assumes the similarity between the new case/data and available cases and put the new case into the category that is most similar to the available categories.
                        K-NN algorithm stores all the available data and classifies a new data point based on the similarity. This means when new data appears then it can be easily classified into a well suite category by using K- NN algorithm.
                        K-NN algorithm can be used for Regression as well as for Classification but mostly it is used for the Classification problems.
                        K-NN is a non-parametric algorithm, which means it does not make any assumption on underlying data.
                        It is also called a lazy learner algorithm because it does not learn from the training set immediately instead it stores the dataset and at the time of classification, it performs an action on the dataset.
                        KNN algorithm at the training phase just stores the dataset and when it gets new data, then it classifies that data into a category that is much similar to the new data.
                        Illustration of the KNN: We have a photograph of an animal that seems like a cow a dog, but we don’t know whether it’s a cow or a dog. We can employ the KNN approach for this recognition because it is dependent on a measure of similarity. Our KNN system will find the correlation between the new data point and the dogs and cows photos, and categorise it as either a cow or a dog depending on its most similar traits.</p>
                    <img src={img1} className=' w-50 mx-auto' />
                    <p>The pervious picture shows in a simple way how the nearest neighbor classifier works. The puzzle piece is unknown. To find out which animal it might be we have to find the neighbors. If k=1, the only neighbor is a cat and we assume in this case that the puzzle piece should be a cat as well. If k=4, the nearest neighbors contain one chicken and three cats. In this case again, it will be save to assume that our object in question should be a cat.</p>
                    <p>Example: Suppose, we have an image of a creature that looks similar to cat and dog, but we want to know either it is a cat or dog. So for this identification, we can use the KNN algorithm, as it works on a similarity measure. Our KNN model will find the similar features of the new data set to the cats and dogs images and based on the most similar features it will put it in either cat or dog category</p>
                    <div className='d-flex'>
                        <img src={img2} className='  mx-auto' style={{ width: '100%', height: '200px' }} />
                    </div>
                    <div className='d-flex'>
                        <img src={img3} className=' w-25 mx-auto' />
                        <img src={img4} className=' w-25 mx-auto' />
                        <img src={img5} className=' w-25 mx-auto' />
                    </div>
                </Row>
                <Row className='m-3 my-4 '>
                    <h4>How the approach of KNN functions?</h4>
                    <h4>The following procedure can be employed to demonstrate how K-NN appears to work:</h4>
                    <p>o	Step-1: Select the number K of the neighbors</p>
                    <p>o	Step-2: Calculate the Euclidean distance of K number of neighbors</p>
                    <p>o	Step-3: Take the K nearest neighbors as per the calculated Euclidean distance.</p>
                    <p>o	Step-4: Among these k neighbors, count the number of the data points in each category.</p>
                    <p>o	Step-5: Assign the new data points to that category for which the number of the neighbor is maximum.</p>
                    <p>o	Step-6: Our model is ready.</p>
                    <div className='d-flex'>
                        <img src={img7} className=' w-25 mx-auto' />
                        <img src={img8} className=' w-25 mx-auto' />
                    </div>
                </Row>
                <Row className='m-3 my-4'>
                    <h4>Suppose we have a new data point and we need to put it in the required category. Consider the below image:</h4>
                    <img src={gif1} className=' w-75 mx-auto' />
                    <p>next, we will calculate the Euclidean distance between the data points. The Euclidean distance is the distance between two points, which we have already studied in geometry. It can be calculated as:</p>
                    <img src={gif2} className=' w-75 mx-auto' />
                    <p>o	By calculating the Euclidean distance we got the nearest neighbors, as three nearest neighbors in category A and two nearest neighbors in category B. Consider the below image:</p>
                    <h1>How to select the value of K in the K-NN Algorithm?</h1>
                    <p>o	There is no particular way to determine the best value for "K", so we need to try some values to find the best out of them. The most preferred value for K is 5.<br />
                        o	A very low value for K such as K=1 or K=2, can be noisy and lead to the effects of outliers in the model.<br />
                        o	Large values for K are good, but it may find some difficulties.</p>
                    <h2 className='fw-bold'>Example: k=5</h2>
                    <img src={gif3} className=' w-75 mx-auto' />
                    <h2>Values of the K in KNN</h2>
                    <p>•	To perform classification, the K-nearest neighbour or K-NN procedure generates the imagined boundaries.<br />
                        •	When fresh pieces of information are received, the algorithm will attempt to estimate them as precisely as possible to the line of boundary.<br />
                        •	As a reason, a Higher k values suggest smoother separating curves, leading in simpler models.<br />
                        •	Smaller k values, on the other extreme, seem to overfit the information, leading in complex systems.</p>
                    <img src={gif4} className=' w-75 mx-auto' />
                    <h1 className='fw-bold'>Advantages of KNN Algorithm:</h1>
                    <p>o	It is simple to implement.<br />
                        o	It is robust to the noisy training data<br />
                        o	It can be more effective if the training data is large.</p>
                    <h1 className='fw-bold'>Disadvantages of KNN Algorithm:</h1>
                    <p>o	Always needs to determine the value of K which may be complex some time.<br />
                        o	The computation cost is high because of calculating the distance between the data points for all the training samples.</p>
                    <h1 className='fw-bold'>Features of the KNN Methodology</h1>
                    <p>Following are the detailed features that makes the KNN algorithm unique from the rest:</p>
                    <p>1.	KNN is a Supervised Learning model that forecasts the results of pieces of data employing a known set of inputs that is labelled.<br />
                        2.	It is among the most elementary ML techniques, and it can be utilized to tackle a broad variety of issues.<br />
                        3.	It is mainly dependent on feature similarities. KNN evaluates a data point’s similarity to that of its neighbour and assigns to the most homogeneous sample.<br />
                        4.	KNN is the non parametic algorithm, which indicates it makes no judgments about the set of data, unlike many procedures. This makes this methodology more productive because it can tackle real databases.<br />
                        5.	KNN is a lazy approach, which implies that rather than studying a discriminative functionality from the training examples, it memorises it.<br />
                        6.	Both regression and classification issues can be resolved with this KNN system.</p>


                </Row>


            </Container>
        </>
    )
}

export default KNearestNeighbor