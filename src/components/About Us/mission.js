import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Mission (props) {
    return (
        <Container fluid={true} style = {{textAlign: "justify"}}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000", maxHeight: 'fit-content'}}>
                    <Container>
                        <Row>
                            <Col xs='12'md='6'>
                                <p className = "mission-header">OUR MISSION</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='12'>
                                <p className="mission-text">Patients' Welfare Association was found to help patients at Dr Ruth K. M. Pfau Civil Hospital Karachi. We, at Patients' Welfare Association, feel for our patients who come to a hospital in pain and we serve to alleviate that pain. This basic idea of an empathy driven mission to help is translated into our motto: "We feel. We serve."</p>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col xs='12'md='6'>
                                <p className = "mission-header">OUR VISION</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='12'>
                                <p className="mission-text">PWA aims to provide patients with services not provided at Dr Ruth K.M Pfau Civil Hospital Karachi. PWA has served patients in a multitude of ways throughout its history. Whether it be the provision of free blood or medicine, PWA has stepped up to help patients and hopes to continue in its endeavors in the future.</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col md={{size: 6}} sm = {{size: 12}} style={{padding: '0px'}}>
                    <img src={require('../../images/discussion.jpg')}/>
                </Col>





            </Row>
        </Container>
    );
}