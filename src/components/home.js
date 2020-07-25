import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container, Row, Col } from 'reactstrap';
import Counter from "../components/counter"



function Home() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <React.Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/la.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/ny.jpg')}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/chicago.jpg')}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
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


        <div>
        <h1 className = 'text-center display-4 mt-5 mb-5'>OUR MISSION</h1>
        </div>

        <Container fluid={true}>
        <Row className="missions-jumbotron">
                <Col xs={{size: 12}} md={{size: 6}} className = "">
                <div>

                </div>
                </Col>
                
                <Col xs={{size: 12}} md={{size: 6}} className = "">
                <div>
                    <img src="https://i.ytimg.com/vi/hllbC4OOAxo/maxresdefault.jpg" width ="100%" height = "200" alt="mission-image-1" className = "mr-0"/>
                </div>
                </Col>
            </Row>
        </Container>

      </React.Fragment>
    );
  }
 
export default Home;