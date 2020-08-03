import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'



export default function CorporatePartner (props) {

   

    return (
        <Container fluid={true}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "cp-txt">BECOME A CORPORATE PARTNER</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/cp-img-1.png')}/>
                </Col> 
        
            </Row>


            <Row>
                <Col  md={{size: 1}} sm = {{size: 12}} style = {{padding: "0px"}}>
                </Col> 

                <Col  md={{size: 10}} sm = {{size: 12}} style = {{padding: "0px"}}>
                    <p className = "cp-med-txt">SPONSOR AN EVENT</p>
                    <p className = "cp-small-txt">Sponsoring an event for Patients’ Welfare Association provides you with an opportunity to increase brand recognition and demonstrating your company’s CSR credentials.</p>


                    <p className = "cp-med-txt">ARRANGE A BLOOD DRIVE</p>
                    <p className = "cp-small-txt">You can also contact us if you want to arrange a blood camp at your institute/community.</p>

                    <p className = "cp-med-txt">SPONSOR A CONSTRUCTION</p>
                    <p className = "cp-small-txt">Help us expand our infrastructure by sponsoring our construction plans.</p>

                    <p className = "cp-med-txt">RECOGNITION AND MEMORIALS</p>
                    <p className = "cp-small-txt">You can leave a legacy for your family and friends by donating in memorial of your loved one or your. <br/>
                       We offer naming opportunities related to buildings , beds , machine , publications and plaques where appropriate.</p>
                </Col> 
            </Row>


            


        </Container>
    );
}