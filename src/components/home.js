import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Form, Label, FormGroup, Input, Row, Col, Button } from 'reactstrap';
import Counter from "../components/counter"
import CarouselItem from './carouselitem';
import {Link} from 'react-router-dom'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'




function Home() {
    const [index, setIndex] = useState(0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [topic, setTopic] = useState("Financial Donation");
    const [other, setOther] = useState("");


  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    const handleOther = e => {
      if (e.target.value !== "Other"){
        setOther("");
        setTopic(e.target.value);

      }
      else{
        setTopic(e.target.value);

      }



    };


    const submitHandler = event => {
      event.preventDefault();
      emailjs.init("user_Jn2UdZaOs6rgIcHKnxjUP");

      const templateId = 'basic';


      if (other !== ""){
        sendFeedback(templateId, {
          topic: other, 
          name: name, 
          email: email,
          number: phone
         }
        )
      }
      else{
        sendFeedback(templateId, {
          topic: topic, 
          name: name, 
          email: email,
          number: phone
         }
        )
      }

      
      
        
      

      
      }   

    const sendFeedback = (templateId, variables) => {
      emailjs.send(
        'gmail', templateId,
        variables
        ).then(res => {
          // Email successfully sent alert
          Swal.fire({
            title: 'Email Successfully Sent',
            icon: 'success'
          })
          console.log('Succesful')
        })
        // Email Failed to send Error alert
        .catch(err => {
          Swal.fire({
            title: 'Email Failed to Send',
            icon: 'error'
          })
          console.error('Email Error:', err)
        })
    }


    
  
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
                <Counter start = {0} end = {247} duration = {3} className = "counter"/>
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

          <Container>
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

          <Container>

                    <Form>
                        <FormGroup>
                            <Label for='name'>
                                Name
                            </Label>
                            <Input type='text' name='name' id='name' placeholder='Enter Your Name' value = {name} onChange = {e => setName(e.target.value)} />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email" value = {email} onChange = {e => setEmail(e.target.value)}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for='number'>
                                Phone No.
                            </Label>
                            <Input type='phone' name='number' id='number' placeholder='Enter your number' value = {phone} onChange = {e => setPhone(e.target.value)}/>
                        </FormGroup>
                        
                       
                        <FormGroup>
                            <Label for="topic">Would like to discuss:</Label>
                            <Input className = "home-select" type="select" name="topic" id="topic" value = {topic} onChange = {(e) => handleOther(e)}>
                                <option value = "Financial Donation">Financial Donation</option>
                                <option value = "Blood Donation">Blood Donation</option>
                                <option value = "Meeting">Meeting</option>
                                <option value = "Visiting">Visiting</option>
                                <option value = "Other">Other</option>
                            </Input>
                        </FormGroup>

                            {topic == "Other" ? <FormGroup>
                            <Label for='other-reason'>
                                Write the other reason
                            </Label>
                            <Input type='text' name='other' id='other' placeholder='Write a short description' value = {other} onChange = {e => setOther(e.target.value)}/>
                        </FormGroup> : ""}

                    </Form>

                    <p className = "hm-li-txt">*Get in touch with RGO</p>


          </Container>

          <div>
          <Button onClick={(e) => submitHandler(e)} className='home-btn mr-5'>Submit</Button>                       
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