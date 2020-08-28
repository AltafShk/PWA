import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { SocialIcon } from 'react-social-icons';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

// import { NavLink } from 'react-router-dom';

function Header(){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }

    const [dropdownOpen1, setDD1] = useState(false);
    const [dropdownOpen2, setDD2] = useState(false);
    const [dropdownOpen3, setDD3] = useState(false);
    const [dropdownOpen4, setDD4] = useState(false);
    const [dropdownOpen5, setDD5] = useState(false);
     
    
    const toggle1 = () => {
      setDD1(!dropdownOpen1);
    }
    
    const onMouseEnter1 = () => {
      setDD1(true);
    }

    const onMouseLeave1 = () => {
      setDD1(false);
    }

    const toggle2 = () => {
      setDD2(!dropdownOpen2);
    }
    
    const onMouseEnter2 = () => {
      setDD2(true);
    }

    const onMouseLeave2 = () => {
      setDD2(false);
    }
    
    const toggle3 = () => {
      setDD3(!dropdownOpen2);
    }
    
    const onMouseEnter3 = () => {
      setDD3(true);
    }

    const onMouseLeave3 = () => {
      setDD3(false);
    }
    
    const toggle4 = () => {
      setDD4(!dropdownOpen4);
    }
    
    const onMouseEnter4 = () => {
      setDD4(true);
    }

    const onMouseLeave4 = () => {
      setDD4(false);
    }
    
    const toggle5 = () => {
      setDD5(!dropdownOpen5);
    }
    
    const onMouseEnter5 = () => {
      setDD5(true);
    }

    const onMouseLeave5 = () => {
      setDD5(false);
    }


    const signOuthandler = () => {
      firebase.auth().signOut().then(function() {
        console.log("signed-out")
        window.location.assign("/")
      }).catch(function(error) {
        alert(error.message)
      });
    }


    var user = firebase.auth().currentUser;
    var database = firebase.database();

    var name = null;

    if (user !== null){
    var userName = firebase.database().ref('users/' + user.uid + '/username');
    userName.on('value', function(snapshot) {
      name = snapshot.val();
    });}


    

    
    
    return (
      // <Container fluid style={{padding: '0px'}}>
          <div style={{width:'100%'}}>
            <Navbar color="light" light expand="md">
              <Container fluid={true} style={{padding: '0px'}}>
                <Row>
                  <Col xs={{size: 12}} md={{size: 6}}>
                <NavbarBrand href="/" className="col-auto">
                <img src = {require("../images/logo.png")} style={{  width: '100%', height: '100px'}}/></NavbarBrand>
                </Col>
                <Col md={{size:3}}>
                </Col>
                <Col xs={{size: 12}} md={{size: 3}}>
                
                <Nav className="mx-auto" navbar >
                  <div className="container donate-card">

                    <NavLink className="col-12 donate-now">
                    <Link to = "/donate-now" style={{ textDecoration: 'none' }}><Button className="donate-button">DONATE NOW</Button></Link>
                    </NavLink>

                    <NavItem className="social-btn">
                      <SocialIcon className="social"  url="https://www.facebook.com/pwachk/" bgColor="#E50000" style={{ height: 35, width: 35 }} />
                    </NavItem>

                    <NavItem className="social-btn">
                    <SocialIcon className="social" url = "https://twitter.com/pwachk?lang=en" network="twitter" bgColor="#e50000" style={{ height: 35, width: 35 }}/>
                    </NavItem>

                    <NavItem className="social-btn">
                    <SocialIcon className="social" url = "https://www.instagram.com/pwachk/?hl=en" network="instagram" bgColor="#e50000" style={{ height: 35, width: 35 }}/>
                    </NavItem>

                    <NavItem className="social-btn">
                    <SocialIcon className="social" url = "https://www.youtube.com/channel/UCOAl9_ptaFEuejuQbEUNuRA" network="youtube" bgColor="#e50000" style={{ height: 35, width: 35 }}/>
                    </NavItem>
                  </div>
                </Nav>
                </Col>                
                
                </Row>
                    
              </Container>
                  
              </Navbar>


              <Navbar color="light" light expand='lg'>
                <Container style={{padding: '0px'}}>
                  <Row>
                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                          <Link to = "/" style={{ textDecoration: 'none' }}><NavLink>
                            HOME
                          </NavLink></Link>
                          <Dropdown nav inNavbar className="d-inline-block" onMouseOver={onMouseEnter1} onMouseLeave={onMouseLeave1} isOpen={dropdownOpen1} toggle={toggle1} >
                            <DropdownToggle nav caret>
                              ABOUT US
                            </DropdownToggle>
                            <DropdownMenu right>
                            <Link to = "/history" style={{ textDecoration: 'none' }}><DropdownItem>HISTORY</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/mission" style={{ textDecoration: 'none' }}><DropdownItem>MISSION</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/board-of-governors" style={{ textDecoration: 'none' }}><DropdownItem>BOARD OF GOVERNORS</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/affiliations-and-certifications" style={{ textDecoration: 'none' }}><DropdownItem>AFFILIATION AND CERTIFICATES</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/shariah-compliance" style={{ textDecoration: 'none' }}><DropdownItem>SHARIAH COMPLIANCE</DropdownItem></Link>
                            </DropdownMenu>
                          </Dropdown>
                          <Dropdown nav inNavbar className="d-inline-block" onMouseOver={onMouseEnter2} onMouseLeave={onMouseLeave2} isOpen={dropdownOpen2} toggle={toggle2} >
                            <DropdownToggle nav caret>
                              SERVICES
                            </DropdownToggle>
                            <DropdownMenu right>
                            <Link to = "/blood-transfusion-services" style={{ textDecoration: 'none' }}><DropdownItem>BLOOD TRANSFUSION SERVICES</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/thalassemia-daycare-center" style={{ textDecoration: 'none' }}><DropdownItem>THALASSEMIA DAYCARE CENTER</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/zakaat-calculator" style={{ textDecoration: 'none' }}><DropdownItem>ZAKAAT CALCULATOR</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/currency-converter" style={{ textDecoration: 'none' }}><DropdownItem>CURRENCY CONVERTER</DropdownItem></Link>
                            </DropdownMenu>
                          </Dropdown>
                          <Dropdown nav inNavbar className="d-inline-block" onMouseOver={onMouseEnter3} onMouseLeave={onMouseLeave3} isOpen={dropdownOpen3} toggle={toggle3} >
                            <DropdownToggle nav caret>
                              PUBLICATIONS
                            </DropdownToggle>
                            <DropdownMenu right>
                            <Link to = "/financial-report" style={{ textDecoration: 'none' }}><DropdownItem>FINANCIAL REPORTS</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/departmental-report" style={{ textDecoration: 'none' }}><DropdownItem>DEPARTMENTAL REPORTS</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/qasid" style={{ textDecoration: 'none' }}><DropdownItem>QASID</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/souvenir" style={{ textDecoration: 'none' }}><DropdownItem>SOUVENIR</DropdownItem></Link>
                            </DropdownMenu>
                          </Dropdown>
                          <Dropdown nav inNavbar className="d-inline-block" onMouseOver={onMouseEnter4} onMouseLeave={onMouseLeave4} isOpen={dropdownOpen4} toggle={toggle4} >
                            <DropdownToggle nav caret>
                              NEWS AND STORIES
                            </DropdownToggle>
                            <DropdownMenu right>
                            <Link to = "/success-stories" style={{ textDecoration: 'none' }}><DropdownItem>SUCCESS STORIES</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/blogs" style={{ textDecoration: 'none' }}><DropdownItem>BLOGS</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/events" style={{ textDecoration: 'none' }}> <DropdownItem>EVENTS</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/videos" style={{ textDecoration: 'none' }}> <DropdownItem>VIDEOS</DropdownItem></Link>
                            </DropdownMenu>
                          </Dropdown>
                          <Dropdown nav inNavbar className="d-inline-block" onMouseOver={onMouseEnter5} onMouseLeave={onMouseLeave5} isOpen={dropdownOpen5} toggle={toggle5} >
                            <DropdownToggle nav caret>
                              GET INVOLVED
                            </DropdownToggle>
                            <DropdownMenu right>
                            <Link to = "/why-us" style={{ textDecoration: 'none' }}><DropdownItem>WHY US</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/donate-now" style={{ textDecoration: 'none' }}><DropdownItem>DONATE NOW</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/blood-donation" style={{ textDecoration: 'none' }}><DropdownItem>BLOOD DONATION</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/corporate-partner" style={{ textDecoration: 'none' }}> <DropdownItem>CORPORATE PARTNER</DropdownItem></Link>
                              <DropdownItem divider />
                              <Link to = "/make-an-impact" style={{ textDecoration: 'none' }}> <DropdownItem>MAKE AN IMPACT</DropdownItem></Link>
                            </DropdownMenu>
                          </Dropdown>
                          <Link to = "/contact-us" style={{ textDecoration: 'none' }}>
                          <NavLink>
                          CONTACT US
                          </NavLink>
                          </Link>
                          {user !== null ?                           
                          <NavLink>
                            <Button onClick = {signOuthandler}>SIGN OUT</Button>
                          </NavLink>
                          : <Link to = "/sign-in" style={{ textDecoration: 'none' }}>                          
                          <NavLink>
                            SIGN IN
                          </NavLink>
                          </Link>}


                          {user !== null ? <p>{name}</p> : ""}
                          
                    </Nav>
                  </Collapse>
                  </Row>
                </Container>
              </Navbar>
                </div>

        );
}
 
export default Header;