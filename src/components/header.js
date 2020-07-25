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
} from 'reactstrap';

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
    
    
    return (
          <div>
            <Navbar color="light" light expand="md">
              <Container >

                <NavbarBrand href="/" className="col-auto">
                <img src = {require("../images/logo.png")} style={{  maxWidth: 'auto', height: '100px'}}/></NavbarBrand>
                
                
                
                <Nav className="ml-auto col-md-auto" navbar >
                  <div className="container donate-card">

                    <NavLink className="col-12 donate-now">
                      <Button className="donate-button">DONATE NOW</Button>
                    </NavLink>

                    <NavItem className="social-btn">
                      <SocialIcon className="social"  url="https://www.facebook.com/pwachk/" bgColor="#E50000" style={{ height: 35, width: 35 }} />
                    </NavItem>

                    <NavItem className="social-btn">
                    <SocialIcon className="social" network="twitter" bgColor="#e50000" style={{ height: 35, width: 35 }}/>
                    </NavItem>

                    <NavItem className="social-btn">
                    <SocialIcon className="social" network="instagram" bgColor="#e50000" style={{ height: 35, width: 35 }}/>
                    </NavItem>

                    <NavItem className="social-btn">
                    <SocialIcon className="social" network="youtube" bgColor="#e50000" style={{ height: 35, width: 35 }}/>
                    </NavItem>
                  </div>
                </Nav>    
              </Container>
                  
              </Navbar>
              <Navbar color="light" light expand="md">
                <Container>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                          <NavLink >
                            HOME
                          </NavLink>
                          <Dropdown nav inNavbar className="d-inline-block" onMouseOver={onMouseEnter1} onMouseLeave={onMouseLeave1} isOpen={dropdownOpen1} toggle={toggle1} >
                            <DropdownToggle nav caret>
                              ABOUT US
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem>HISTORY</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>MISSION</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>BOARD OF GOVERNORS</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>AFFILIATION AND CERTIFICATES</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>SHARIAH COMPLIANCE</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                          <Dropdown nav inNavbar className="d-inline-block" onMouseOver={onMouseEnter2} onMouseLeave={onMouseLeave2} isOpen={dropdownOpen2} toggle={toggle2} >
                            <DropdownToggle nav caret>
                              SERVICES
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem>Option 1</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Option 2</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                          <Dropdown nav inNavbar className="d-inline-block" onMouseOver={onMouseEnter3} onMouseLeave={onMouseLeave3} isOpen={dropdownOpen3} toggle={toggle3} >
                            <DropdownToggle nav caret>
                              PUBLICATIONS
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem>Option 1</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Option 2</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Option 2</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Option 2</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                          <Dropdown nav inNavbar className="d-inline-block" onMouseOver={onMouseEnter4} onMouseLeave={onMouseLeave4} isOpen={dropdownOpen4} toggle={toggle4} >
                            <DropdownToggle nav caret>
                              NEWS AND STORIES
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem>Option 1</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Option 2</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Option 2</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Option 2</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                          <Dropdown nav inNavbar className="d-inline-block" onMouseOver={onMouseEnter5} onMouseLeave={onMouseLeave5} isOpen={dropdownOpen5} toggle={toggle5} >
                            <DropdownToggle nav caret>
                              GET INVOLVED
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem>Option 1</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Option 2</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Option 2</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Option 2</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Option 2</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                          <NavLink>
                            CONTACT US
                          </NavLink> 
                        
                    </Nav>
                  </Collapse>
                </Container>
              </Navbar>
                </div>

        );
}
 
export default Header;