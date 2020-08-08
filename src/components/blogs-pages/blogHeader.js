import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function BlogHeader ({header, imgName}) {
    return (
        <React.Fragment>
        <Container>
            <Row>
                <Col>
                    <h4 className='blog-page-header'>{header}</h4>
                    <hr
                    style={{
                        width: '60%',
                    }}/>
                </Col>
            </Row>
        </Container>
        <Container fluid style={{padding: '0px'}}>
            <Row>
                <img src={require('../../images/' + imgName)} width='100%'/>
            </Row>
        </Container>
        </React.Fragment>
    );
};