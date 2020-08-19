import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import faStyles from 'font-awesome/css/font-awesome.css'



export default function ZakatCalculator (props) {


    

    return (
        <Container fluid={true}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "bts-txt">ZAKAT CALCULATOR</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/zc-img-1.jpg')}/>
                </Col> 
        
            </Row>

            <Row>
            </Row>





            


        </Container>
    );
}