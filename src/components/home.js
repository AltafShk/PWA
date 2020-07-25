import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container, Row, Col } from 'reactstrap';



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
            <Container>
            <Row className="figures-jumbotron">
                <Col xs={{size: 12}} md={{size: 4}}>
                <div className="card" style={{"width":"300px"}}>
                <img className="card-img-top" src="img_avatar1.png" alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">John Doe</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
                </div>
                </Col>
                <Col xs={{size: 12}} md={{size: 4}}>
                <div className="card" style={{"width":"300px"}}>
                <img className="card-img-top" src="img_avatar1.png" alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">John Doe</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
                </div>
                </Col>
                <Col xs={{size: 12}} md={{size: 4}}>
                <div className="card" style={{"width":"300px"}}>
                <img className="card-img-top" src="img_avatar1.png" alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">John Doe</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
                </div>
                </Col>
            </Row>
            </Container>
        </Jumbotron>

        <div>
        <h1 className = 'text-center display-4 mt-5 mb-5'>OUR MISSION</h1>
        </div>

      </React.Fragment>
    );
  }
 
export default Home;