import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

export default function Qasid () {
    return (
        <Container fluid className='test'>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "bts-txt my-5">QASID</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/slide2.jpg')}/>
                </Col> 
        
            </Row>
            <Row className='mt-4'>
                <Col xs={{offset: 1}}>
                    <h4>QASIDS</h4>
                    <ul>
                        <li className='mt-4'> 
                            <h5>
                                QASID 2016 <a href='https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/Qasid-2016.pdf' target="_blank">[Click here to download] </a>
                            </h5>
                        </li>
                    </ul> 
                </Col>
            </Row>
        </Container>
    );
};