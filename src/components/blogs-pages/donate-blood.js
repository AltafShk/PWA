import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogHeader from './blogHeader';
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css'
import { Link } from 'react-router-dom';


export default function DonateBlood () {
    return (
        <React.Fragment>
        <Container fluid>
            <Row >
                <Col>
                    <BlogHeader header='Who can donate blood?'
                    imgName='blog-page-two-img.png' />
                </Col>
            </Row>
        </Container>
        <Container>
        <Row className='mt-3'>
                <Col xs={{size: 12}} md={{size: 3}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{height: '230px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                {/* <img className="card-img-top home-cards mx-auto mt-2" src={require('../../images/impdonor-one.png')} alt="Card image"/> */}
                <img className="card-img-top home-cards mx-auto mt-2" src={require('../../images/blog-2-small-img-1.png')} alt="Card image"/>

                <div className="card-body text-center">
                    <p className="card-text imp-donor-text">1. Weight at least 110 pounds
( ~ 50 kg) or above</p>
                </div>
                </div>
                </Col>
                <Col xs={{size: 12}} md={{size: 3}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{height: '230px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                
                <img className="card-img-top home-cards mx-auto mt-2" src={require('../../images/blog-2-small-img-2.png')} alt="Card image"/>
                <div className="card-body text-center">
                    <p className="card-text imp-donor-text">2. Age must be 18 years
or above</p>
                </div>
                </div>
                </Col>
                <Col xs={{size: 12}} md={{size: 3}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{height: '230px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <img className="card-img-top home-cards mx-auto mt-2" src={require('../../images/blog-2-small-img-3.png')} alt="Card image"/>
                <div className="card-body text-center">
                    <p className="card-text imp-donor-text">3. Blood pressure should be normal</p>
                </div>
                </div>
                </Col>
                <Col xs={{size: 12}} md={{size: 3}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{height: '230px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <img className="card-img-top home-cards mx-auto mt-2" src={require('../../images/blog-2-small-img-4.png')} alt="Card image"/>
                <div className="card-body text-center">
                    <p className="card-text imp-donor-text">4. Diabetic patients with control sugar level</p>
                </div>
                </div>
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
                        <Link to = "/thalassemia" style={{ textDecoration: 'none' }}>
                            <p className = "other-blog mb-0">What is Thalassemia?</p>
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