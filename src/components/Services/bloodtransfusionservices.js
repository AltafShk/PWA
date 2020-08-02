import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import faStyles from 'font-awesome/css/font-awesome.css'


export default function BloodTransfusionServices (props) {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 767);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 767);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
        });


    return (
        <Container fluid={true}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "bts-txt">BLOOD TRANSFUSION SERVICES</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/bts-img-1.png')}/>
                </Col> 
        
            </Row>


            <Container fluid = {true} style = {{textAlign: 'center', marginTop: '20px'}} className = "mb-5">
                <Row>
                <Col md = {{size: 2}} sm = {{size: 12}}>
                </Col>

                <Col md = {{size: 4}} sm = {{size: 12}}>
                    <p className = "hist-p-text hist-p-text-extra">Patients’ Welfare Association (PWA) is an NGO working at Dr. Ruth K.M. Pfau Civil Hospital Karachi which aims to provide services not offered by the hospital. Our founding members, Dr. Inayat Hussain Thaver, Dr. Iqbal Noor Muhammad and Dr. Abdur Rehman, were undergrad medical students in Dow Medical College at the time of PWA‘s establishment. Despite limited resources, they realized that even as students they could contribute to society and so PWA began.</p>
                </Col>

                <Col md = {{size: 5}} sm = {{size: 12}}>
                <img className="ml-auto hist-img img-responsive" src={require('../../images/bts-img-2.jpg')}/>
                </Col>

                <Col md = {{size: 1}} sm = {{size: 12}}>
                </Col>
                </Row>
                

                {isDesktop ? (
                    <Row>
                    <Col md = {{size: 2}} sm = {{size: 12}}>
                    </Col>
    
                    <Col md = {{size: 5}} sm = {{size: 12}}>
                    <img className="ml-auto hist-img img-responsive" src={require('../../images/bts-img-3.jpg')}/>
                    </Col>
    
                    <Col md = {{size: 4}} sm = {{size: 12}}>
                        <p className = "hist-p-text hist-p-text-extra">Today, after decades of success, the fundamentals of PWA have not changed. Its members consist entirely of students currently enrolled in Dow Medical College and are known simply as volunteers for this title represents the true essence of PWA. A volunteer of PWA is only required to be sincere and passionate in fulfilling whatever task he is assigned or as expressed in our slogan: We Feel We Serve.</p>
                    </Col>
    
    
                    <Col md = {{size: 1}} sm = {{size: 12}}>
                    </Col>
                    </Row>
                ) : (<Row>
                    <Col md = {{size: 2}} sm = {{size: 12}}>
                    </Col>
    
                    <Col md = {{size: 4}} sm = {{size: 12}}>
                        <p className = "hist-p-text hist-p-text-extra">Today, after decades of success, the fundamentals of PWA have not changed. Its members consist entirely of students currently enrolled in Dow Medical College and are known simply as volunteers for this title represents the true essence of PWA. A volunteer of PWA is only required to be sincere and passionate in fulfilling whatever task he is assigned or as expressed in our slogan: We Feel We Serve.</p>
                    </Col>

                    <Col md = {{size: 5}} sm = {{size: 12}}>
                    <img className="ml-auto hist-img img-responsive" src={require('../../images/bts-img-3.jpg')}/>
                    </Col>
    
                    
    
    
                    <Col md = {{size: 1}} sm = {{size: 12}}>
                    </Col>
                    </Row>)}

                

            </Container>   


            <Row className = "mt-4">
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "bts-txt"  style = {{fontSize: "50px"}}>ADVANCEMENT IN SCREENING TECHNOLOGY</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/bts-img-4.png')}/>
                </Col> 
        
            </Row>



            <Row>
                <Col  md={{size: 2}} sm = {{size: 12}} style = {{padding: "0px"}}>
                </Col> 

                <Col  md={{size: 8}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <p className = "bts-small-txt mt-4">PWA Voluntary Blood Bank provides component therapy in the form of packed cells, fresh frozen plasma and mega units of platelets on exchange basis, completely free of cost. To ensure the provision of safe blood, each blood bag goes through a careful screening process, being screened for HIV I & II, Hepatitis B & C, Malaria and Syphilis in accordance with WHO guidelines. This year we were able to further upgrade screening methodology from Enzyme-Linked Immunosorbent Assay (ELISA) to Chemiluminescent Immunosorbent Assay (CLIA), which made every blood bag dispatched even safer.</p>
                <p className = "bts-small-txt mt-5 mb-5">We are immensely grateful for all contributions in the form of donation, both blood and financial. We would never have been able to achieve such great milestones if it were not for donors’ unquantifiable support. We hope that our generous donors and well-wishers will continue to aid us in our quest to provide the best quality of service to the poverty-stricken in Karachi.</p>
                </Col> 


            </Row>




            


        </Container>
    );
}