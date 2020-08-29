import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogHeader from './blogHeader';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';


export default function Thalassemia () {
    return (
        <React.Fragment>
        <Container fluid>
            <Row >
                <Col>
                    <BlogHeader header='What is thalassemia?'
                    imgName='blog-page-three-img.png' />
                </Col>
            </Row>
        </Container>
        <Container>
        <Row className='mt-3'>
                <Col xs={{size: 12}} md={{size: 8, offset: 2}} className = "mb-4">
                 <p className = "thal-txt mb-0">Thalassemia is a group of disorders that affect the body’s ability to produce normal hemoglobin. ( Red blood
                    cells transport oxygen throughout the body; hemoglobin is the protein in red blood cells that actually carries the oxygen.)</p>
                    <br/>
                    <br/>
                <p className = "thal-heading-txt mt-0">Who is at risk for thalassemia?</p>

                <p className = "thal-txt mt-4">Thalassemia’s are an inherited disorder, which means they are passed from a parent to their child. Inter
family marriage for serval generations increases the chance of having thalassemia</p>

                <p className = "thal-heading-txt mt-5" style = {{fontSize: "20px"}}>Symptoms:</p>
                
                <ol>
                    <li className = "thal-txt"><p className = "thal-txt mt-0 mb-0">Fatigue.</p></li>
                    <li className = "thal-txt"><p className = "thal-txt mt-0 mb-0">Weakness</p></li>
                    <li className = "thal-txt"><p className = "thal-txt mt-0 mb-0">Shortness of Breath</p></li>
                    <li className = "thal-txt"><p className = "thal-txt mt-0 mb-0">Jaundice</p></li>
                    <li className = "thal-txt"><p className = "thal-txt mt-0 mb-0">Irritability</p></li>
                    <li className = "thal-txt"><p className = "thal-txt mt-0 mb-0">Deformities of the facial bones.</p></li>
                    <li className = "thal-txt"><p className = "thal-txt mt-0 mb-0">Slow growth</p></li>
                    <li className = "thal-txt"><p className = "thal-txt mt-0 mb-0">A swollen abdomen</p></li>
                    <li className = "thal-txt"><p className = "thal-txt mt-0 mb-0">Dark urine</p></li>
                </ol>

                <p className = "thal-heading-txt mt-5" style = {{fontSize: "20px"}}>Treatment:</p>

                <p className = "thal-txt">
                <strong>Blood transfusions:</strong>
                <br/>
                Frequent blood transfusions. More-severe forms of thalassemia often require frequent blood transfusions, possibly every few weeks.
                <br/>
                <br/>
                <strong>Iron chelation therapy:</strong>
                <br/>
                Over time, blood transfusions cause a buildup of iron in your blood, which can damage your heart, liver and other organs. Medications are given that rid your body of extra iron.
                <br/>
                <br/>
                <strong>Managing thalassemia:</strong>
                <br/>
                You can help manage your thalassemia by following your treatment plan and adopting healthy-living habits. The following tips will help:
                <br/>
                <p className = "thal-txt">
                <u><i>1. Avoiding iron</i></u>
                <br/>
                <br/>

Avoid excess iron. Unless your doctor recommends it, don’t take vitamins or other supplements that contain iron.
<br/>
<br/>
<u><i>2. Healthy diet</i></u>
                <br/>
                <br/>

Eat a healthy diet. Eating a balanced diet that contains plenty of nutritious foods can help you feel better and boost your energy.

<br/>
<br/>
<u><i>3. Strict check on personal hygiene</i></u>   
                <br/>
                <br/>
Avoid infections. Protect yourself from infections with frequent hand-washing and by avoiding sick people.</p>
                </p>


                </Col>
                
            </Row>

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
                        <Link to = "/thalassemia-quiz" style={{ textDecoration: 'none' }}>
                            <p className = "other-blog mb-0">Thalassemia quiz</p>
                            </Link>
                            <p className = "dates mt-0">July 7, 2019</p>
                        </Col>

                        <Col xs = "12" md = "4">
                        <Link to = "/donate-blood" style={{ textDecoration: 'none' }}>
                            <p className = "other-blog mb-0">Who can donate blood?</p>
                            </Link>
                            <p className = "dates mt-0">July 7, 2019</p>
                        </Col>
                    </Row>

            </Container>

                    <hr
                    style={{
                        width: '60%',
                    }}/>

        </Container>
        </React.Fragment>
    );
};