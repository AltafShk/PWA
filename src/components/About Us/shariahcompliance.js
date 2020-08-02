import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import faStyles from 'font-awesome/css/font-awesome.css'


export default function ShariahCompliance (props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "sc-txt">SHARIAH COMPLIANCE</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive sc-img-1" src={require('../../images/sc-img-1.png')}/>
                </Col> 
        
            </Row>


            <Row>
                <Col md={{size: 1}} sm = {{size: 12}}>
                </Col>

                <Col md={{size: 5}} sm = {{size: 12}}>
                    <p className = "sc-small-txt">[pdf-embedder url=”https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/Compliant-Scan-1.pdf” title=”Compliant Scan 1″]</p>
                </Col>

                <Col md={{size: 5}} sm = {{size: 12}}>
                    <p className = "sc-small-txt">[pdf-embedder url=”https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/Compliant-Scan-2.pdf” title=”Compliant Scan 2″]</p>
                </Col>

                <Col md={{size: 1}} sm = {{size: 12}}>
                </Col>
            </Row>            



            


        </Container>
    );
}