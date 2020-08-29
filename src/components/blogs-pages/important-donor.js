import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogHeader from './blogHeader';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';


export default function ImpDonor () {
    return (
        <React.Fragment>
        <Container fluid>
            <Row >
                <Col>
                    <BlogHeader header='Why is it important to be a donor?'
                    imgName='blog-page-one-img.png' />
                </Col>
            </Row>
        </Container>
        <Container>
        <Row className='mt-3'>
                <Col xs={{size: 12}} md={{size: 4}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{height: '230px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                {/* <img className="card-img-top home-cards mx-auto mt-2" src={require('../../images/impdonor-one.png')} alt="Card image"/> */}
                <FontAwesome className = 'card-img-top home-cards mx-auto mt-2 fa-heart'
                                    name = 'heart'
                                    size = '5x' style = {{color:"#e50000"}}/>
                <div className="card-body text-center">
                    <p className="card-text imp-donor-text">1. It saves lives. What else you need?</p>
                </div>
                </div>
                </Col>
                <Col xs={{size: 12}} md={{size: 4}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{height: '230px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                
                <img className="card-img-top home-cards mx-auto mt-2" src={require('../../images/impdonor-two.png')} alt="Card image"/>
                <div className="card-body text-center">
                    <p className="card-text imp-donor-text">2. It is painful to lose a loved one which you could save by donating blood</p>
                </div>
                </div>
                </Col>
                <Col xs={{size: 12}} md={{size: 4}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{height: '230px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <img className="card-img-top home-cards mx-auto mt-2" src={require('../../images/impdonor-three.png')} alt="Card image"/>
                <div className="card-body text-center">
                    <p className="card-text imp-donor-text">3. Because if you need blood one day, you would not hesitate to take it</p>
                </div>
                </div>
                </Col>
                <Col xs={{size: 12}} md={{size: 4}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{height: '230px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <img className="card-img-top home-cards mx-auto mt-2" src={require('../../images/impdonor-four.png')} alt="Card image"/>
                <div className="card-body text-center">
                    <p className="card-text imp-donor-text">4. It gives you inner satisfaction</p>
                </div>
                </div>
                </Col>
                <Col xs={{size: 12}} md={{size: 4}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{height: '230px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <img className="card-img-top home-cards mx-auto mt-2" src={require('../../images/impdonor-five.png')} alt="Card image"/>
                <div className="card-body text-center">
                    <p className="card-text imp-donor-text">5. It gives donor a medical check at no cost.</p>
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
                        <Link to = "/donate-blood" style={{ textDecoration: 'none' }}>
                            <p className = "other-blog mb-0">Who can donate blood?</p>
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