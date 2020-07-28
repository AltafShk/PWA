import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css'

function History(){


    const [isDesktop, setDesktop] = useState(window.innerWidth > 767);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 767);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
        });

    return (
          <React.Fragment>
              <Container fluid={true} style = {{textAlign: "center"}}>
                    <Row>
                        <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                         <p className = "our-hist-txt">OUR <br/> HISTORY</p>
                        </Col> 

                        <Col  md={{size: 6}} sm = {{size: 12}}>
                            <div>
                        <FontAwesome className = 'fa-quote-left'
                                    name = 'quote-left'
                                    size = '3x' style = {{color:"#e50000", float: 'left', marginTop: '15px'}}/>
                            </div>   
                         <p className = 'hist-quote'> <br/> <br/> <br/>Never doubt that a small group of thoughtful , committed citizens can change the world. Indeed, it is the only thing that ever has.</p>
                         <FontAwesome className = 'fa-quote-right'
                                    name = 'quote-right'
                                    size = '3x' style = {{color:"#e50000", float: 'right'}}/>
                        <p className = 'text-left hist-author'> <br/> <br/> - Margaret Mead</p>
                        </Col> 
                
                    </Row>
            </Container>
            <Container className="hist-main mt-3">
                <p className="col-12 mb-3 hist-p-text" style={{textAlign: "justify"}}>
                Three students of Dow Medical College, moved by the despair and needs of people entering the doors of Dr. Ruth K.M. Pfau Civil Hospital, then known simply as Civil Hospital Karachi for treatment of their ailments, laid down the foundation of Patients’ Welfare Association in 1979. PWA aims to provide services not offered by Civil Hospital Karachi thus when the hospital began to offer services we catered to we stopped offering them and concentrated our energies on other needs of the patients. The following is an account of our work.
                </p>
                <div  style={{width: '100%', textAlign: 'center', color: '#000', marginBottom: '3px'}}>
                    <h1 className = 'display-6 mt-5 mb-2'>DRUG BANK</h1>
                    <img src={require('../../images/divider.png')}/>
                </div>
                <p className="col-12 mb-3 hist-p-text">
                    PWA’s Drugbank, provided for the basic medicinal needs of patients admitted in Dr. Ruth K.M. Pfau Civil Hospital for almost 4 decades, however it is no longer functional because Dr Ruth Pfau Civil Hospital Karachi now offers free medicines to patients.
                </p>
                <div style={{width: '100%', textAlign: 'center', color: '#000', marginBottom: '3px'}}>
                    <h1 className = 'display-6 mt-5 mb-2'>BLOOD BANK</h1>
                    <img src={require('../../images/divider.png')}/>
                </div>
                <p className="col-12 mb-3 hist-p-text">
                    PWA Blood Bank provides services of quality assured, screened blood products such as packed cells and fresh frozen plasma. It is being recently upgraded to the status of one of 3 regional blood centers planned by the government to fulfill the blood related needs of Karachi.
                </p>
                <div style={{width: '100%', textAlign: 'center', color: '#000', marginBottom: '3px'}}>
                    <h1 className = 'display-6 mt-5 mb-2'>TB FOLLOWUP CLINIC</h1>
                    <img src={require('../../images/divider.png')}/>
                </div>
                <p className="col-12 mb-3 hist-p-text">
                PWA TB Follow-up Clinic was started in 1984, shortly followed by its General Follow-up Clinic. These departments catered to patients suffering from long term ailments. TB follow-up annually catered to more than 500 patients suffering from tuberculosis infections. This too is no longer functional because this service is now offered by the hospital.
                </p>
                <div style={{width: '100%', textAlign: 'center', color: '#000', marginBottom: '3px'}}>
                    <h1 className = 'display-6 mt-5 mb-2'>DIAGNOSTIC LAB</h1>
                    <img className="mx-auto" src={require('../../images/divider.png')}/>
                </div>
                <p className="col-12 mb-3 hist-p-text">
                PWA Diagnostic Lab was started in 1986 to provide baseline hematological and biochemical tests to the patients free of cost. The laboratory performed complete blood count (CBC) with peripheral film study amongst many other important investigative tests. Our diagnostic lab no longer offers these tests to the public.
                </p>
                <div style={{width: '100%', textAlign: 'center', color: '#000', marginBottom: '3px'}}>
                    <h1 className = 'display-6 mt-5 mb-2'>THALESSEMIA SERVICES</h1>
                    <img className="mx-auto" src={require('../../images/divider.png')}/>
                </div>
                <p className="col-12 mb-3 hist-p-text">
                    PWA Thalassemia Services started in 2011, now better known as Thalassemia Daycare Center holds the promise of a long and prosperous life for the poor innocent children, diagnosed with the blood disorder thalassemia at birth. Many of these individuals have found themselves unable to handle the financial burden of the lifelong treatment of this ailment which PWA is currently providing to 263 registered patients, all free of cost.
                </p>
    
            </Container>
            <Container fluid={true} style = {{textAlign: "center"}}>
                    <Row>
                        <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                         <p className = "our-hist-txt">WHO ARE WE?</p>
                        </Col> 

                        <Col  md={{size: 6}} sm = {{size: 12}}>
                            <div>
                        <FontAwesome className = 'fa-quote-left'
                                    name = 'quote-left'
                                    size = '3x' style = {{color:"#e50000", float: 'left', marginTop: '15px'}}/>
                            </div>   
                         <p className = 'hist-quote'> <br/> <br/> <br/>PWA is a story of love and respect for life, fueled by compassion and sincere desire for its preservation.</p>
                         <FontAwesome className = 'fa-quote-right'
                                    name = 'quote-right'
                                    size = '3x' style = {{color:"#e50000", float: 'right'}}/>
                        </Col> 
                
                    </Row>
            </Container>

            <Container fluid = {true} style = {{textAlign: 'center', marginTop: '20px'}}>
                <Row>
                <Col md = {{size: 2}} sm = {{size: 12}}>
                </Col>

                <Col md = {{size: 4}} sm = {{size: 12}}>
                    <p className = "hist-p-text hist-p-text-extra">Patients’ Welfare Association (PWA) is an NGO working at Dr. Ruth K.M. Pfau Civil Hospital Karachi which aims to provide services not offered by the hospital. Our founding members, Dr. Inayat Hussain Thaver, Dr. Iqbal Noor Muhammad and Dr. Abdur Rehman, were undergrad medical students in Dow Medical College at the time of PWA‘s establishment. Despite limited resources, they realized that even as students they could contribute to society and so PWA began.</p>
                </Col>

                <Col md = {{size: 5}} sm = {{size: 12}}>
                <img className="ml-auto hist-img img-responsive" src={require('../../images/pwa-building.jpg')}/>
                </Col>

                <Col md = {{size: 1}} sm = {{size: 12}}>
                </Col>
                </Row>
                

                {isDesktop ? (
                    <Row>
                    <Col md = {{size: 2}} sm = {{size: 12}}>
                    </Col>
    
                    <Col md = {{size: 5}} sm = {{size: 12}}>
                    <img className="ml-auto hist-img img-responsive" src={require('../../images/discussion.jpg')}/>
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
                    <img className="ml-auto hist-img img-responsive" src={require('../../images/discussion.jpg')}/>
                    </Col>
    
                    
    
    
                    <Col md = {{size: 1}} sm = {{size: 12}}>
                    </Col>
                    </Row>)}

                <Row className = "mb-5">
                <Col md = {{size: 2}} sm = {{size: 12}}>
                </Col>

                

                <Col md = {{size: 4}} sm = {{size: 12}}>
                    <p className = "hist-p-text hist-p-text-extra">When they began this work, our founders quickly realized the unparalleled benefit of teamwork. Thus, they inculcated this virtue in all subsequent generations of volunteers, resulting in what started as a team of 3 best friends now becoming the PWA Family spanning 40 years of volunteers and still growing. That is why at PWA we say, “Together We Can Make A Difference”.</p>
                </Col>

                <Col md = {{size: 5}} sm = {{size: 12}}>
                <img className="ml-auto hist-img img-responsive" src={require('../../images/pwa-blood-bank.jpg')}/>
                </Col>


                <Col md = {{size: 1}} sm = {{size: 12}}>
                </Col>
                </Row>

            </Container>

            <Container fluid={true} style = {{textAlign: "center", marginTop: '10px'}}>
                    <Row>
                        <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                         <p className = "our-hist-txt">OUR IMPACT</p>
                        </Col> 

                        <Col  md={{size: 6}} sm = {{size: 12}}>
                            <div>
                        <FontAwesome className = 'fa-quote-left'
                                    name = 'quote-left'
                                    size = '3x' style = {{color:"#e50000", float: 'left', marginTop: '15px'}}/>
                            </div>   
                         <p className = 'hist-quote'> <br/> <br/> <br/>Patients are our concern, their health our priority &amp; serving humanity, our motto.</p>
                         <FontAwesome className = 'fa-quote-right'
                                    name = 'quote-right'
                                    size = '3x' style = {{color:"#e50000", float: 'right'}}/>
                        </Col> 
                    </Row>
            </Container>
            <Container className="mt-3">
                <Row>
                    <Col xs='1'>
                    </Col>
                    <Col xs='10' className="hist-main" style={{lineHeight: 1.8}}>
                        <p className = "hist-p-text">For nearly 4 decades, Patients’ Welfare Association has striven to serve the destitute entering Dr. Ruth K.M. Pfau Civil Hospital with dedication and professionalism. All the data shown below is a living testament to that fact.</p>
                        <ul>
                            <li className = "hist-p-text">Our blood bank has provided 1.4 million blood products to the masses.</li>
                            <li className = "hist-p-text">PWA Drugbank has disbursed medicines and injections worth over PKR 92 million to the needy, benefiting roughly 8000-10,000 patients each year, all free of cost.</li>
                            <li className = "hist-p-text">PWA Thalassemia Daycare Center has spent over PKR 52 million on treatments such iron chelation therapy. This costs stands apart from the cost of providing regular screened blood transfusions which often exceed 7500 in number each year.</li>
                            <li className = "hist-p-text">PWA has spent over PKR 704 million on the welfare of others and with the continued support of our kind donors and well-wishers, we hope to serve a lot more.</li>
                        </ul>
                    </Col>
                    <Col xs='1'>
                    </Col>
                </Row>
                
            </Container>            
          </React.Fragment>

        );
}
 
export default History;