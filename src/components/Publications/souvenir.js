import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

export default function Souvenir () {
    return (
        <Container fluid className='test'>
            <Row>
                <Col style={{textAlign: "center"}}>
                    <h1 className="coming-soon">COMING SOON...</h1>
                </Col>
            </Row>
        </Container>
    );
};