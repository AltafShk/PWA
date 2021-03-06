import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogHeader from './blogHeader';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';



export default function ThalessemiaQuiz () {
    return (
        <React.Fragment>
            <Container fluid>
                <Row >
                    <Col>
                        <BlogHeader header='Thalessemia Quiz'
                        imgName='thal-quiz.png' />
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5'>
                <Row>
                    <Col xs={0} md={2}></Col>
                    <Col xs={12} md={8}>
                    <ul className='quiz-text'>
                        <li>
                            <p className='quiz-ques'>What are the two major types of thalassemia?</p>
                            <ol className='quiz-opt'>
                                <li>Alpha and beta</li>
                                <li>Omega</li>
                                <li>Beta</li>
                            </ol>
                            <p><span style={{fontWeight: 600}}>Reason:</span> Alpha thalassemia: a condition in which the body does not produce enough alpha globin (a component of hemoglobin). Beta thalassemia: a condition in which the body does not produce enough beta globin (another component of hemoglobin).</p>
                        </li>
                        <li>
                            <p className='quiz-ques'>Thalassemia is most often treated with red blood cell transfusions.</p>
                            <ol className='quiz-opt'>
                                <li>True</li>
                                <li>False</li>
                            </ol>
                            <p><span style={{fontWeight: 600}}>Reason:</span> The type of treatment a person receives depends on how severe the thalassemia is. The more severe the thalassemia, the less hemoglobin the body has, and the more severe the anemia may be. One way to treat anemia is to provide the body with more red blood cells to carry oxygen. This can be done through a blood transfusion, a safe, common procedure in which you receive blood through a small plastic tube inserted into one of your blood vessels.</p>
                        </li>
                        <li>
                            <p className='quiz-ques'>Stem cell replacement offers a permanent cure for thalassemia.</p>
                            <ol className='quiz-opt'>
                                <li>True</li>
                                <li>False</li>
                            </ol>
                        </li>
                        <li>
                            <p className='quiz-ques'>Frequent blood transfusions can result in too much iron in the blood.</p>
                            <ol className='quiz-opt'>
                                <li>True</li>
                                <li>False</li>
                            </ol>
                            <p><span style={{fontWeight: 600}}>Reason:</span> People with thalassemia are treated with blood transfusions. Frequent blood transfusions can result in too much iron in the blood. This is called iron overload. Because there is no natural way for the body to eliminate iron, the iron from transfused blood cells builds up and becomes toxic to tissues and organs, particularly the liver and heart. Iron overload can result in early death from organ failure.</p>
                        </li>
                        <li>
                            <p className='quiz-ques'>Is there a cure for thalassemia?</p>
                            <ol className='quiz-opt'>
                                <li>Yes</li>
                                <li>No</li>
                            </ol>
                        </li>
                    </ul>
                    </Col>
                    <Col xs={0} md={2}></Col>
                </Row>
            </Container>

            <Container>
                    <hr
                    style={{
                        width: '100%',
                    }}/>

                    <p className = "imp-donor-bottom-txt"><FontAwesome className = ' fa-angle-right'
                                    name = 'angle-right'
                                    size = '2x' style = {{color:"#e0000FF"}}/> <p className = "txt-bottom" style = {{display: "inline-block"}}>YOU MIGHT ALSO LIKE</p></p>


                    <Row>
                        <Col xs = "12" md = "4">
                        <Link to = "/important-donor" style={{ textDecoration: 'none' }}>
                            <p className = "other-blog mb-0">Why is it important to be a donor?</p>
                            </Link>
                            <p className = "dates mt-0">July 7, 2019</p>
                        </Col>

                        <Col xs = "12" md = "4">
                        <Link to = "/donate-blood" style={{ textDecoration: 'none' }}>
                            <p className = "other-blog mb-0">Who can donate blood?</p>
                            </Link>
                            <p className = "dates mt-0">July 7, 2019</p>
                        </Col>

                        <Col xs = "12" md = "4">
                        <Link to = "/thalassemia" style={{ textDecoration: 'none' }}>
                            <p className = "other-blog mb-0">What is Thalassemia?</p>
                            </Link>
                            <p className = "dates mt-0">July 7, 2019</p>
                        </Col>
                    </Row>

            </Container>

        </React.Fragment>
    );
}