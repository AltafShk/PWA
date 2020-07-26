import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'reactstrap';
import Counter from "../components/counter"
import CarouselItem from './carouselitem';
import {Button} from 'reactstrap';


function Home() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <React.Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <CarouselItem slide="1" image={require('../images/la.jpg')} />
        </Carousel.Item>
        <Carousel.Item>
        <CarouselItem slide="2" image={require('../images/la.jpg')} />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem slide="3" image={require('../images/la.jpg')} />
          
        </Carousel.Item>
      </Carousel>

        <div>
        <h1 className = 'text-center display-4 mt-5 mb-5'>OUR IMPACT</h1>
        </div>

        <Jumbotron fluid className="jumbotron">
            <Container className = "">
            <Row className="figures-jumbotron">
                <Col xs={{size: 12}} md={{size: 4}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{"width":"100%", "height":"100%"}}>
                <img className="card-img-top home-cards mx-auto mt-2" src={require('../images/blood-drop.png')} alt="Card image"/>
                <div className="card-body text-center">
                    <Counter start = {0} end = {1400000} duration = {3} className = "counter"/>
                    <p className="card-text text-center">Total blood products dispatched</p>
                </div>
                </div>
                </Col>
                <Col xs={{size: 12}} md={{size: 4}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{"width":"100%", "height":"100%"}}>
                <img className="card-img-top home-cards mx-auto mt-2" src={require('../images/drip.png')} alt="Card image"/>
                <div className="card-body text-center">
                <Counter start = {0} end = {120000} duration = {3} className = "counter"/>
                    <p className="card-text text-center">Blood bags dispatched annually</p>
                </div>
                </div>
                </Col>
                <Col xs={{size: 12}} md={{size: 4}} className = "mb-4">
                <div className="card mx-auto my-auto" style={{"width":"100%", "height":"100%"}}>
                <img className="card-img-top home-cards mx-auto mt-2" src={require('../images/board.png')} alt="Card image"/>
                <div className="card-body text-center">
                <Counter start = {0} end = {250} duration = {3} className = "counter"/>
                    <p className="card-text text-center">Total registered patients in TDC</p>
                </div>
                </div>
                </Col>
            </Row>
            </Container>
        </Jumbotron>


        <div style={{width: '100%', textAlign: 'center'}}>
        <h1 className = 'display-4 mt-5 mb-2'>OUR MISSION</h1>
        <img className="mx-auto" src={require('../images/divider.png')}/>
        </div>

        <Container fluid={true}>
        <Row className="missions-jumbotron">
                <Col xs={{size: 12}} md={{size: 6}} style={{backgroundColor: '#E50000'}}>
                <p className = "white-home-text">Patients' Welfare Association was found to help patients at Dr Ruth K. M. Pfau Civil Hospital Karachi. We, at Patients' Welfare Association, feel for our patients who come to a hospital in pain and we serve to alleviate that pain. This basic idea of an empathy driven mission to help is translated into our motto: "We feel. We serve."</p>
                </Col>
                
                <Col  md={{size: 6}} style={{padding: '0px'}}>

                    <img src="https://i.ytimg.com/vi/hllbC4OOAxo/maxresdefault.jpg" style={{minWidth: '100%'}} height="150px" alt="mission-image-1"/>
                </Col> 
            </Row>
        </Container>
        <div style={{width: '100%', textAlign: 'center'}}>
        <h1 className = 'display-4 mt-5 mb-2'>OUR VISION</h1>
        <img className="mx-auto" src={require('../images/divider.png')}/>
        </div>
        <Container fluid={true}>
        <Row className="missions-jumbotron">
                
                <Col  md={{size: 6}} style={{padding: '0px'}}>

                    <img src="https://i.ytimg.com/vi/hllbC4OOAxo/maxresdefault.jpg" style={{minWidth: '100%'}} height="150px" alt="mission-image-1"/>
                </Col> 
                <Col xs={{size: 12}} md={{size: 6}} style={{backgroundColor: '#E50000'}}>
                <p className = "white-home-text">PWA aims to provide patients with services not provided at Dr Ruth K.M Pfau Civil Hospital Karachi. PWA has served patients in a multitude of ways throughout its history. Whether it be the provision of free blood or medicine, PWA has stepped up to help patients and hopes to continue in its endeavors in the future.</p>
                </Col>
                
            </Row>
        </Container>

        <div style={{width: '100%', textAlign: 'center'}}>
        <h1 className = 'display-4 mt-5 mb-2'>WORKING DEPARTMENTS</h1>
        <img className="mx-auto" src={require('../images/divider.png')}/>
        </div>

        <Container fluid={false} style = {{textAlign: "center"}}>
        <Row className="departments-jumbotron">
                
                <Col  md={{size: 6}} sm = {{size: 12}}>
                 <p className = "text-center num-font">1</p>
                 <p className = "text-center desc-font display-4">Blood Transfusion Services</p>
                 <div>
                    <img className="mx-auto home-img" src={require('../images/pwa-blood-bank.jpg')}/>
                 </div>

                 <div className = "home-text">
                 <p>Established in 1982, the department of Blood Transfusion Services has been an integral part of the services of PWA. With daily output of around 300 blood bags, PWA Blood Bank provides free screened blood to patients at Civil Hospital as well as all over Karachi.</p>
                 </div>
                 <Button className = "home-btn">Learn More</Button>
                 

                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}}>
                <p className = "text-center num-font">2</p>
                <p className = "text-center desc-font display-4">Thalassemia Daycare Services</p>
                <div>
                    <img className="mx-auto home-img" src={require('../images/thalassemia.jpg')}/>
                 </div>

                 <div className = "home-text">
                    <p>Started in 2011, Thalassemia Day Care Centre offers free medicines and blood transfusion services to about 250 registered thalassemic patients.</p>
                 </div>
                 <Button className = "home-btn">Learn More</Button>
                </Col> 
                
            </Row>
        </Container>

      </React.Fragment>
    );
  }
 
export default Home;