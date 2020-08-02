import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

export default function SuccesStories () {
    return (
        <Container fluid >
            <Row>
                <Col xs={{size: 12}} md={{size: 6}} style={{backgroundColor: '#e50000'}}>
                    <h1 className='publications-header'>
                        SUCCESS STORIES
                    </h1>
                </Col>
                <Col xs={{size: 12}} md={{size: 6}} style={{backgroundColor: '#000000'}}>
                    <p className='text-white'>yahaa img ayegi</p>
                </Col>
            </Row>
        </Container>
    );
};