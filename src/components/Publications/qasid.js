import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

export default function Qasid () {
    return (
        <Container fluid className='test'>
            <Row>
                <Col xs={{size: 12}} md={{size: 6}} className='test-child-one'>
                    <h1 className='publications-header'>
                        QASID
                    </h1>
                </Col>
                <Col xs={{size: 12}} md={{size: 6}} className='test-child-two'>
                <p className='text-white'>yahaa img ayegi</p>
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