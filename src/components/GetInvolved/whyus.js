import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';



export default function WhyUs (props) {

   

    return (
        <Container fluid={true}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "wu-txt my-4">WHY US?</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/wu-img-1.png')}/>
                </Col> 
        
            </Row>


            <Row>
                <Col  md={{size: 1}} sm = {{size: 12}} style = {{padding: "0px"}}>
                </Col> 

                <Col  md={{size: 10}} sm = {{size: 12}} style = {{padding: "0px"}}>
                    <p className = "wu-small-txt mt-4 mx-3">Patients’ Welfare Association® by every means try to lessen the troubles of patients registered in Civil Hospital Karachi, our blood bank is open 24/7 to cater any blood request for patients of Civil Hospital Karachi while our emergency service is open to all citizens without charging them a single rupee. While, on the other hand, we try to provide the highest possible comfort and service to our registered thalassemic patients to ensure that they are fully capable of leading a normal life because We Feel. We Serve. And Now more than ever, we need people like you to join our team and get involved because together we can make a difference. If not us then who, and if not now then when?</p>
                </Col> 
            </Row>

            <Row>
                <Col  md={{size: 1}} sm = {{size: 12}}>
                </Col> 

                <Col  md={{size: 10}} sm = {{size: 12}} style = {{padding: "0px"}}>
                    <p className = "wu-medium-txt mt-3 mb-3 mx-3">Ways to help us</p>

                    <ul>
                        <li className = "wu-small-txt" style = {{fontSize: "16px"}}>Donation</li>
                        <li className = "wu-small-txt" style = {{fontSize: "16px"}}>Zakat</li>
                        <li className = "wu-small-txt" style = {{fontSize: "16px"}}>Blood donations</li>
                        <li className = "wu-small-txt" style = {{fontSize: "16px"}}>Become a corporate partner</li>
                        <li className = "wu-small-txt" style = {{fontSize: "16px"}}>Sponsor a Smile</li>
                        <li className = "wu-small-txt" style = {{fontSize: "16px"}}>In-kind donations.</li>
                    </ul>
                </Col> 
            </Row>
            


        </Container>
    );
}