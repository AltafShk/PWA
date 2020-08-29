import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FontAwesome from 'react-fontawesome';

export default function Mission (props) {
    return (
        <Container fluid={true} style = {{textAlign: "justify"}}>
            <Row class='miss-top'>
                <Col md='6' xs='12' className='miss-body-right'>
                    <Container className='pt-4'>
                        <Row>
                            <Col xs='12'md='6'>
                                <p className = "mission-header">OUR MISSION</p>
                            </Col>
                        </Row>
                        <Container>
                        <Row>
                            <Col xs='12'>
                                <p className="mission-text">Patients' Welfare Association was found to help patients at Dr Ruth K. M. Pfau Civil Hospital Karachi. We, at Patients' Welfare Association, feel for our patients who come to a hospital in pain and we serve to alleviate that pain. This basic idea of an empathy driven mission to help is translated into our motto: "We feel. We serve."</p>
                            </Col>
                        </Row>
                        </Container>
                        
                    </Container>
                    <Container className='pt-4'>
                        <Row>
                            <Col xs='12'md='6'>
                                <p className = "mission-header">OUR VISION</p>
                            </Col>
                        </Row>
                        <Container>
                            <Row>
                                <Col xs='12'>
                                    <p className="mission-text">PWA aims to provide patients with services not provided at Dr Ruth K.M Pfau Civil Hospital Karachi. PWA has served patients in a multitude of ways throughout its history. Whether it be the provision of free blood or medicine, PWA has stepped up to help patients and hopes to continue in its endeavors in the future.</p>
                                </Col>
                            </Row>
                        </Container>
                        
                    </Container>
                </Col>
                <Col className='mission-backgrnd miss-body-left' md='6' xs='12' style={{height: 'auto'}}>
                </Col>
            </Row>
            <Row style={{textAlign: 'center'}}>
                <Col xs='12'>
                <p className = 'display-4 mt-2 mb-2 virtue-header'>OUR VIRTUES</p>
                </Col>
                <Col xs='12'>
                <img className="mx-auto" src={require('../../images/divider.png')}/>
                </Col>
                <Col xs='12' style={{padding: '0px'}}>
                <Jumbotron fluid className="jumbotron">
                    <Container>
                    <Row className="figures-jumbotron">
                        <Col xs={{size: 12}} md={{size: 4}} className = "mb-4">
                        <div className="card mx-auto my-auto" style={{"width":"100%", "height":"100%"}}>
                            <FontAwesome className = 'fa-check-circle card-img-top home-cards mx-auto mt-3'
                            name='check-circle' size = '3x'/>
                        <div className="card-body text-center">
                            <p className="card-text virtue-text">Passion to bring smiles and change lives.</p>
                        </div>
                        </div>
                        </Col>
                        <Col xs={{size: 12}} md={{size: 4}} className = "mb-4">
                        <div className="card mx-auto my-auto" style={{"width":"100%", "height":"100%"}}>
                            <FontAwesome className = 'fa-check-circle card-img-top home-cards mx-auto mt-3'
                            name='check-circle' size = '3x'/>
                        <div className="card-body text-center">
                            <p className="card-text virtue-text">Team work and dedication in all endeavors.</p>
                        </div>
                        </div>
                        </Col>
                        <Col xs={{size: 12}} md={{size: 4}} className = "mb-4">
                        <div className="card mx-auto my-auto" style={{"width":"100%", "height":"100%"}}>
                            <FontAwesome className = 'fa-check-circle card-img-top home-cards mx-auto mt-3'
                            name='check-circle' size = '3x'/>
                        <div className="card-body text-center">
                            <p className="card-text virtue-text">Spirit of serving selflessly.</p>
                        </div>
                        </div>
                        </Col>
                    </Row>
                    </Container>
                </Jumbotron>
                </Col>
            </Row>
            <Row style={{textAlign: 'center'}}>
                <Col xs='12'>
                    <p className = 'display-4 mt-2 mb-2 virtue-header'>OUR AIM</p>
                </Col>
                <Col xs='12'>
                    <img src={require('../../images/divider.png')}/>
                </Col>
            </Row>
            <Row className='mt-10' style={{textAlign: 'center'}}>
                <Col xs='2'></Col>
                <Col xs='8' className='aim-back'>
                    <div style={{ textAlign: 'left'}}>
                    <FontAwesome className = 'fa-quote-left mt-4 ml-3' name = 'quote-left'
                        size = '3x' style = {{color:"#e50000"}}/>
                
                    </div>
                    <p className='aim-txt'>To make a difference in the life of others, providing them with hope and a reason to look forward to life.</p>
                    <div style={{ textAlign: 'right'}}>
                    <FontAwesome className = 'fa-quote-right ml-3' name='quote-right'
                        size = '3x' style = {{color:"#e50000"}}/>
                
                    </div>
                </Col>
                <Col xs='2'></Col>
            </Row>
        </Container>
    );
}