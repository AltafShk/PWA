import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';



export default function ThalassemiaDaycareCenter (props) {

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
                    <p className = "bts-txt my-4">THALASSEMIA DAYCARE CENTER</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/tdc-img-1.png')}/>
                </Col> 
        
            </Row>


            <Container fluid = {true} style = {{textAlign: 'center', marginTop: '20px'}} className = "mb-5">
                <Row>
                <Col md = {{size: 2}} sm = {{size: 12}}>
                </Col>

                <Col md = {{size: 4}} sm = {{size: 12}}>
                    <p className = "hist-p-text hist-p-text-extra">Thalassemia, an inherited disorder of impaired hemoglobin production, is a serious and debilitating disease affecting a significant portion of our society. Its patients require lifelong treatment which has a great emotional and financial cost.</p>
                </Col>

                <Col md = {{size: 5}} sm = {{size: 12}}>
                <img className="ml-auto hist-img img-responsive" src={require('../../images/tdc-img-2.jpg')}/>
                </Col>

                <Col md = {{size: 1}} sm = {{size: 12}}>
                </Col>
                </Row>
                

                {isDesktop ? (
                    <Row>
                    <Col md = {{size: 2}} sm = {{size: 12}}>
                    </Col>
    
                    <Col md = {{size: 5}} sm = {{size: 12}}>
                    <img className="ml-auto hist-img img-responsive" src={require('../../images/tdc-img-3.jpg')}/>
                    </Col>
    
                    <Col md = {{size: 4}} sm = {{size: 12}}>
                        <p className = "hist-p-text hist-p-text-extra">Previously working under the ‘Follow Up Clinics’, PWA Thalassemia Services was upgraded to a separate department with the start of transfusion facility for registered Thalassemia patients in 2011. PWA, through its department of Thalassemia Services, is striving to lift these depressed souls.</p>
                    </Col>
    
    
                    <Col md = {{size: 1}} sm = {{size: 12}}>
                    </Col>
                    </Row>
                ) : (<Row>
                    <Col md = {{size: 2}} sm = {{size: 12}}>
                    </Col>
    
                    <Col md = {{size: 4}} sm = {{size: 12}}>
                        <p className = "hist-p-text hist-p-text-extra">Previously working under the ‘Follow Up Clinics’, PWA Thalassemia Services was upgraded to a separate department with the start of transfusion facility for registered Thalassemia patients in 2011. PWA, through its department of Thalassemia Services, is striving to lift these depressed souls.</p>
                    </Col>

                    <Col md = {{size: 5}} sm = {{size: 12}}>
                    <img className="ml-auto hist-img img-responsive" src={require('../../images/tdc-img-3.jpg')}/>
                    </Col>
    
                    
    
    
                    <Col md = {{size: 1}} sm = {{size: 12}}>
                    </Col>
                    </Row>)}

                    <Row>
                        <Col md = {{size: 2}} sm = {{size: 12}}>
                        </Col>

                        <Col md = {{size: 4}} sm = {{size: 12}}>
                            <p className = "hist-p-text hist-p-text-extra">Since its foundation was laid, it has been managing patients under the guidance of a competent hematologist for the provision of regular, screened blood transfusions, viral markers, screening, baseline investigations iron chelation therapy and other medications completely free of cost.
                                <br/>
                                <br/>
                                Currently <strong>250</strong> registered patients (with a budget of <strong>PKR 20 million</strong> annually) are being facilitated with the aim to improve the quality of life of these patients by zero compromise on the standard of services rendered.</p>
                        </Col>

                        <Col md = {{size: 5}} sm = {{size: 12}}>
                        <img className="ml-auto hist-img img-responsive" src={require('../../images/tdc-img-4.jpg')}/>
                        </Col>

                        <Col md = {{size: 1}} sm = {{size: 12}}>
                        </Col>
                    </Row>



                    <Row>
                        <Col md = {{size: 2}} sm = {{size: 12}}>
                        </Col>
                        <Col md = {{size: 8}} sm = {{size: 12}}>
                        <p className = "hist-p-text-extra mt-5 mb-5">
                            <strong>‘SPONSOR A THALASSEMIC PATIENT’</strong> campaign was launched in 2011 to meet the monetary needs of treatment for our thalassemia patients. The cost is around <strong>PKR 250,000/- to 450,000/</strong>- per patient per year.
                            <br/>
                            <br/>
                            We would like to thank the philanthropists who are a major support in our cause and help us sustain the services. We request you all to join hands with PWA to bring smiles on these little faces and improve their quality of living.</p>
                        </Col>
                    </Row>

            </Container>   




            


        </Container>
    );
}