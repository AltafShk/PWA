import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import faStyles from 'font-awesome/css/font-awesome.css'


export default function BoardOfGovernors (props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "BoG-txt">BOARD OF GOVERNORS</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bog-img-1" src={require('../../images/bog-img-1.jpg')} />
                </Col> 
        
            </Row>

            <div style={{width: '100%', textAlign: 'center'}}>
        <h1 className = 'display-4 mt-3 mb-2'>PATRON</h1>
        <img className="mx-auto" src={require('../../images/divider.png')}/>
        </div>

        
        <p className = "BoG-txt-extra text-center">Prof. Dr. Zakiuddin G. Oonwala</p>
        

        <div style={{width: '100%', textAlign: 'center'}}>
        <h1 className = 'display-4 mt-5 mb-2'>SECRETARY</h1>
        <img className="mx-auto" src={require('../../images/divider.png')}/>
        </div>

        <p className = "BoG-txt-extra text-center">Dr. Abdul Bari Khan</p>

        <div style={{width: '100%', textAlign: 'center'}}>
        <h1 className = 'display-4 mt-5 mb-2'>MEMBERS</h1>
        <img className="mx-auto" src={require('../../images/divider.png')}/>
        </div>

        <p className = "BoG-txt-extra text-center">
            Mr. Siddiq Sheikh
            <br/>
            <br/>
            Mr. Tariq Shafi
            <br/>
            <br/>
            Dr. Arif Akhai
            <br/>
            <br/>
            Dr. Haji Saleem
            <br/>
            <br/>
            Dr. Hanif Chatni
            <br/>
            <br/>
            Dr. Asif Hafeez
            <br/>
            <br/>
            Dr. Amir Haleem
            <br/>
            <br/>
            Dr. Amin Chinoy
            <br/>
            <br/>
            Dr. Kamran Ahmed Shakeel
            <br/>
            <br/>
            Dr. Sheeraz ur Rehman
        </p>


        </Container>
    );
}