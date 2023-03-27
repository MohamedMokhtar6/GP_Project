import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Navs from '../../NavBar/Navs'
import img1 from '../../../Images/DecisionTree/1.png'
import img2 from '../../../Images/DecisionTree/2.png'
import img3 from '../../../Images/DecisionTree/3.png'
import img4 from '../../../Images/DecisionTree/4.png'
import img5 from '../../../Images/DecisionTree/5.png'
import img6 from '../../../Images/DecisionTree/6.png'
import img7 from '../../../Images/DecisionTree/7.png'
import img8 from '../../../Images/DecisionTree/8.png'
import img9 from '../../../Images/DecisionTree/9.png'
import img10 from '../../../Images/DecisionTree/10.png'
import img11 from '../../../Images/DecisionTree/11.png'

function DecisionTree() {
    return (
        <>
            <Container className='minH fs-4 '>
                <Row className='m-3 my-4'>
                    <h2>Decision Tree</h2>
                    <p>Decision Tree is the most powerful and popular tool for classification and prediction. A Decision tree is a
                        flowchart-like tree structure, where each internal node denotes a test on an attribute, each branch
                        represents an outcome of the test, and each leaf node (terminal node) holds a class label.
                        A decision tree for the concept Play Tennis</p>
                    <img src={img1} className=' w-50 mx-auto' />
                    <p>Construction of Decision Tree: A tree can be “learned” by splitting the source set into subsets based on
                        an attribute value test. This process is repeated on each derived subset in a recursive manner called
                        recursive partitioning. The recursion is completed when the subset at a node all has the same value of
                        the target variable, or when splitting no longer adds value to the predictions. The construction of a
                        decision tree classifier does not require any domain knowledge or parameter setting, and therefore is
                        appropriate for exploratory knowledge discovery. Decision trees can handle high-dimensional data. In
                        general decision tree classifier has good accuracy. Decision tree induction is a typical inductive approach
                        to learn knowledge on classification.
                        Decision Tree Representation: Decision trees classify instances by sorting them down the tree from the
                        root to some leaf node, which provides the classification of the instance. An instance is classified by
                        starting at the root node of the tree, testing the attribute specified by this node, then moving down the
                        tree branch corresponding to the value of the attribute as shown in the above figure. This process is
                        then repeated for the subtree rooted at the new node.
                        The decision tree in above figure classifies a particular morning according to whether it is suitable for
                        playing tennis and returns the classification associated with the particular leaf.(in this case Yes or No).
                        For example, the instance
                        (Outlook = Sunny, Temperature = Hot, Humidity = High, Wind = Strong )
                        would be sorted down the leftmost branch of this decision tree and would therefore be classified as a
                        negative instance.
                        In other words, we can say that the decision tree represents a disjunction of conjunctions of constraints
                        on the attribute values of instances.
                        (Outlook = Sunny ^ Humidity = Normal) v (Outlook = Overcast) v (Outlook = Rain ^ Wind = Weak)
                        Gini Index:
                        Gini Index is a score that evaluates how accurate a split is among the classified groups. Gini index
                        evaluates a score in the range between 0 and 1, where 0 is when all observations belong to one class,
                        and 1 is a random distribution of the elements within classes. In this case, we want to have a Gini index
                        score as low as possible. Gini Index is the evaluation metrics we shall use to evaluate our Decision Tree
                        Model.
                        Strengths and Weaknesses of the Decision Tree approach
                        The strengths of decision tree methods are:
                        Decision trees are able to generate understandable rules.
                        Decision trees perform classification without requiring much computation.
                        Decision trees are able to handle both continuous and categorical variables.
                        Decision trees provide a clear indication of which fields are most important for prediction or
                        classification.
                        The weaknesses of decision tree methods :
                        Decision trees are less appropriate for estimation tasks where the goal is to predict the value of a
                        continuous attribute.
                        Decision trees are prone to errors in classification problems with many classes and a relatively small
                        number of training examples.
                        Decision tree can be computationally expensive to train. The process of growing a decision tree is
                        computationally expensive. At each node, each candidate splitting field must be sorted before its best
                        split can be found. In some algorithms, combinations of fields are used and a search must be made for
                        optimal combining weights. Pruning algorithms can also be expensive since many candidate sub-trees
                        must be formed and compared.
                        Implementation:
                         Python3
                        from sklearn.datasets import make_classification
                        from sklearn import tree
                        from sklearn.model_selection import train_test_split
                        X, t = make_classification(100, 5, n_classes=2, shuffle=True, random_state=10)
                        X_train, X_test, t_train, t_test = train_test_split(
                        X, t, test_size=0.3, shuffle=True, random_state=1)
                        model = tree.DecisionTreeClassifier()
                        model = model.fit(X_train, t_train)
                        predicted_value = model.predict(X_test)
                        print(predicted_value)
                        tree.plot_tree(model)
                        zeroes = 0
                        ones = 0
                        for i in range(0, len(t_train)):
                        if t_train[i] == 0:
                        zeroes += 1
                        else:
                        ones += 1
                        print(zeroes)
                        print(ones)
                        val = 1 - ((zeroes/70)*(zeroes/70) + (ones/70)*(ones/70))
                        print("Gini :", val)
                        match = 0
                        UnMatch = 0
                        for i in range(30):
                        if predicted_value[i] == t_test[i]:
                        match += 1
                        else:
                        UnMatch += 1
                        accuracy = match/30
                        print("Accuracy is: ", accuracy)
                    </p>
                </Row>
                <Row className='m-3'>
                    <h4>Entropy & Information Gain</h4>
                    <p>The word Entropy is borrowed from Thermodynamics which is a measure of
                        variability or chaos or randomness. Shannon extended the thermodynamic
                        entropy concept in 1948 and introduced it into statistical studies and
                        suggested the following formula for statistical entropy:</p>
                    <img src={img11} className=' w-25 mx-auto' />
                    <p>Where, H is the entropy in the system which is a measure of randomness.
                        Assuming you are rolling a fair coin and want to know the Entropy of the
                        system. As per the formula given by Shann – Entropy would be equals to -[0.5
                        ln(0.5) + 0.5 ln(0.5)].
                        Which is equal to -0.69; which is the maximum entropy which can occur in the
                        system. In other words, there will be maximum randomness in our dataset if
                        the probable outcomes have same probability of occurrence</p>
                    <img src={img2} className=' w-50 mx-auto' />
                    <p> Graph shown above shows the variation of Entropy with the probability of a
                        class, we can clearly see that Entropy is maximum when probability of either
                        of the classes is equal. Now, you can understand that when a decision
                        algorithm tries to split the data, it selects the variable which will give us
                        maximum reduction in system Entropy.
                        For the example of movie success rate – Initial Entropy in the system was:
                        EntropyParent= -(0.57*ln(0.57) + 0.43*ln(0.43)); Which is 0.68
                        Entropy after Method 1 Split
                        Entropyleft= -(.75*ln(0.75) + 0.25*ln(0.25)) = 0.56
                        Entropyright= -(.33*ln(0.33) + 0.67*ln(0.67)) = 0.63
                        Captured impurity or entropy after splitting data using Method 1 can be
                        calculated using the following formula: “Entropy (Parent) – Weighted Average
                        of Children Entropy”
                        Which is,
                        0.68 – (4*0.56 + 3*0.63)/7 = 0.09
                        This number 0.09 is generally known as “Information Gain”
                        Entropy after Method 2 Split
                        Entropyleft= -(.67*ln(0.67) + 0.33*ln(0.33)) = 0.63
                        Entropymiddle= -(.5*ln(0.5) + 0.5*ln(0.5)) = 0.69
                        Entropyright= -(.5*ln(0.5) + 0.5*ln(0.5)) = 0.69
                        Now using the method used above, we can calculate the Information Gain as:
                        Information Gain = 0.68 – (3*0.63 + 2*0.69 + 2*0.69)/7 = 0.02
                        Hence, we can clearly see that Method 1 gives us more than 4 times
                        information gain compared to Method 2 and hence Method 1 is the best split
                        variable.</p>
                </Row>
                <Row className='m-3 '>
                    <h4>Gain Ratio</h4>
                    <p>Soon after the development of entropy mathematicians realized that
                        Information gain is biased toward multi-valued attributes and to conquer this
                        issue, “Gain Ratio” came into picture which is more reliable than Information
                        gain. The gain ratio can be defined as:</p>
                    <img src={img3} className=' w-25 mx-auto' />
                    <p>Where Split info can be defined as:</p>
                    <img src={img4} className=' w-25 mx-auto' />
                    <p>Assuming we are dividing our variable into ‘n’ child nodes and Di represents
                        the number of records going into various child nodes. Hence gain ratio takes
                        care of distribution bias while building a decision tree.
                        For the example discussed above, for Method 1
                        Split Info = - ((4/7)*log2(4/7)) - ((3/7)*log2(3/7)) = 0.98
                        And Hence,
                        Gain Ratio = 0.09/0.98 = 0.092</p>
                </Row>
                <Row className='m-3 '>
                    <h4>Gini Index</h4>
                    <p>There is one more metric which can be used while building a decision tree is
                        Gini Index (Gini Index is mostly used in CART). Gini index measures the
                        impurity of a data partition K, formula for Gini Index can be written down as:</p>
                    <img src={img5} className=' w-25 mx-auto' />
                    <p>Where m is the number of classes, and Pi is the probability that an
                        observation in K belongs to the class. Gini Index assumes a binary split for
                        each of the attribute in S, let say T1 & T2.The Gini index of K given this
                        partitioning is given by:</p>
                    <img src={img6} className=' w-25 mx-auto' />
                    <p>Which is nothing but a weighted sum of each of the impurities in split
                        nodes. The reduction in impurity is given by:</p>
                    <img src={img7} className=' w-25 mx-auto' />
                    <p>Similar to Information Gain & Gain Ratio, split which gives us maximum
                        reduction in impurity is considered for dividing our data.
                        Coming back to our movie example,
                        If we want to calculate Gini(K)-</p>
                    <img src={img8} className=' w-25 mx-auto' />
                    <p>Now as per our Method 1, we can get Ginis(K) as</p>
                    <img src={img9} className=' w-50 mx-auto' />
                    <p>Now since we have understood all 3 of the commonly metrics, next question
                        or confusion arises when we have to choose any one of them. There are a
                        few drawbacks associated with all 3 of the metrics which is summarized in the
                        table below:</p>
                    <img src={img10} className=' w-75 mx-auto' />

                </Row>

            </Container>
        </>
    )
}

export default DecisionTree