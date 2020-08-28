import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'reactstrap';
import Counter from "../components/counter"
import CarouselItem from './carouselitem';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'



function Home() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <React.Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <CarouselItem slide="1" image={require('../images/slide1.jpg')} />
        </Carousel.Item>
        <Carousel.Item>
        <CarouselItem slide="2" image={require('../images/slide2.jpg')} />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem slide="3" image={require('../images/slide3.jpg')} />
          
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem slide="4" image={require('../images/slide4.jpg')} />
        </Carousel.Item>
      </Carousel>

        <div style={{width: '100%', textAlign: 'center'}}>
        <h1 className = 'text-center display-4 mt-5 mb-2'>OUR IMPACT</h1>
        <img className="mx-auto" src={require('../images/divider.png')}/>
        </div>

        <Jumbotron fluid className="jumbotron">
            <Container>
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
                <Counter start = {0} end = {264} duration = {3} className = "counter"/>
                    <p className="card-text text-center">Total registered patients in TDC</p>
                </div>
                </div>
                </Col>
            </Row>
            </Container>
        </Jumbotron>



        <Container>
          <Row>
          <Col xs = {{size:12}} md = {{size:6}}>
          <div style={{width: '100%', textAlign: 'center'}}>
          <h1 className = 'display-4 mt-5 mb-2'>WAYS TO DONATE</h1>
          <img className="mx-auto" src={require('../images/divider.png')}/>
          </div>

          <Container style = {{height: '150px'}}>
            <ol>
              <li className = "hm-li-txt mt-5">
                Donate Online
              </li>
              <li className = "hm-li-txt mt-5">
                Bank Transfer
              </li>
            </ol>

          </Container>

          <div>
          <Link onClick = {() => {window.location.assign('/donate-now')}} ><Button className = "home-btn mr-5">Learn More</Button></Link>
          </div>

          </Col>
          
          <Col xs = {{size:12}} md = {{size:6}}>
          <div style={{width: '100%', textAlign: 'center'}}>
          <h1 className = 'display-4 mt-5 mb-2'>GET IN TOUCH</h1>
          <img className="mx-auto" src={require('../images/divider.png')}/>
          </div>

          <Container style = {{height: '150px'}}>

          <p className='hm-p-txt mt-5'>Tel: +92-21-99215740-45 ( Ext. 5040-41 )<br/><br/>
          Direct Line: (092)21-32735214, (092)21-32751707<br/><br/>
          Email: info@pwa-chk.org.pk</p>


          </Container>

          <div>
          <Link onClick = {() => {window.location.assign('/contact-us')}} ><Button className = "home-btn mr-5">Learn More</Button></Link>
          </div>


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
                    <img className="mx-auto home-img" src={require('../images/blood-services.jpg')}/>
                 </div>

                 <div className = "home-text">
                 <p>Established in 1982, the department of Blood Transfusion Services has been an integral part of the services of PWA. With daily output of around 300 blood bags, PWA Blood Bank provides free screened blood to patients at Civil Hospital as well as all over Karachi.</p>
                 </div>
                 <Link onClick = {() => {window.location.assign("/blood-transfusion-services")}}  ><Button className = "home-btn">Learn More</Button></Link>
                 

                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}}>
                <p className = "text-center num-font">2</p>
                <p className = "text-center desc-font display-4">Thalassemia Daycare Services</p>
                <div>
                    <img className="mx-auto home-img" src={require('../images/thalassemia-services.jpg')}/>
                 </div>

                 <div className = "home-text">
                    <p>Started in 2011, Thalassemia Day Care Centre offers free medicines and blood transfusion services to about 250 registered thalassemic patients.</p>
                 </div>
                 <Link onClick = {() => {window.location.assign('/thalassemia-daycare-center')}} ><Button className = "home-btn">Learn More</Button></Link>
                </Col> 
                
            </Row>
        </Container>

        <div style={{width: '100%', textAlign: 'center'}}>
        <h1 className = 'display-4 mt-5 mb-2'>FEATURED VIDEOS</h1>
        <img className="mx-auto" src={require('../images/divider.png')}/>
        </div>


        <Container >
          <Row className = "mt-5">
            <Col xs = {{size: 12}} md = {{size:4}}>
              <div className = "home-vid">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fvideos%2F2752648151634363%2F&show_text=0&"></iframe>
              </div>
            </Col>

            <Col xs = {{size: 12}} md = {{size:4}}>
            <div className = "home-vid" >
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fvideos%2F1526097644434328%2F&show_text=0&"   scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
            </div>
            </Col>

            <Col xs = {{size: 12}} md = {{size:4}}>
            <div className = "home-vid">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fvideos%2F240971890600735%2F&show_text=0&"   scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
            </div>
            </Col>
          </Row>

          <Row style = {{marginTop: '10px'}}> 
            <Col xs = {{size: 12}} md = {{size:4}}>
            <div className = "home-vid">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fvideos%2F575889019667495%2F&show_text=0&"    scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
            </div>
            </Col>

            <Col xs = {{size: 12}} md = {{size:4}}>
            <div className = "home-vid">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fvideos%2F575889019667495%2F&show_text=0&"   scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>           
            </div>
            </Col>

            <Col xs = {{size: 12}} md = {{size:4}}>
            <div className = "home-vid"> 
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fvideos%2F285251165717727%2F&show_text=0&"   scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
            </div>
            </Col>
          </Row>
        </Container>

      </React.Fragment>
    );
  }
 
export default Home;