import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function Blogs () {
    return(
        <React.Fragment>
        <Container fluid>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "cp-txt my-5">BLOGS</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/bd-img-1.png')}/>
                </Col> 
        
            </Row>
        </Container>
        <Container>
            <Row>
                <Col xs='12'>
                <p className='blog-read'>READ</p>
                <hr
                style={{
                    border: 'none',
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: '1px',
                    width: '100%',
                    marginTop: '0px'
                }}/>
                </Col>
            </Row>
            <Row>
                <Col xs='12' md='6' className='mb-4'>
                    <div className='blog-post'>
                        <div>
                            <img className='hist-img img-responsive' style={{padding: '5px'}} src={require('../../images/blog_one.jpg')} />
                        </div>
                        <div className='blog-desc'>
                            <Link to = "/important-donor" style={{ textDecoration: 'none' }}>
                                <p className='blog-header'> 1. Why is it important to be a donor?</p>
                            </Link>
                            
                            <p className='blog-text'>See how you can save lives with blood donation.</p>
                        </div>
                    </div>
                </Col>

                <Col xs='12' md='6'>

                <Media className='hist-img img-responsive' style={{padding: '5px'}}>
                <Media left href="#">
                    <Media object src={require("../../images/blog_two.jpg")} height='110' width='110' className='mr-3' alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                    <Link to = "/donate-blood" style={{ textDecoration: 'none' }}>
                    <p className='blog-header'>2. Who can donate blood?</p>
                    </Link>
                    </Media>
                    <p className='blog-text'>Check your eligibility to donate blood.</p>
                </Media>
                </Media>

                <Media className='hist-img img-responsive' style={{padding: '5px'}}>
                <Media left href="#">
                    <Media object src={require("../../images/blog_three.jpg")} height='110' width='110' className='mr-3' alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                    <Link to = "/thalassemia" style={{ textDecoration: 'none' }}>
                    <p className='blog-header'>3. What is Thalessemia?</p>
                    </Link>
                    </Media>
                    <p className='blog-text'>Learn about thalessemia</p>
                </Media>
                </Media>

                <Media className='hist-img img-responsive' style={{padding: '5px'}}>
                <Media left href="#">
                    <Media object src={require("../../images/blog_four.jpg")} height='110' width='110' className='mr-3' alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                    <Link to = "/thalassemia-quiz" style={{ textDecoration: 'none' }}>
                    <p className='blog-header'>4. Thalessemia quiz</p>
                    </Link>
                    </Media>
                    <p className='blog-text'>Test your knowledge about thalassemia.</p>
                </Media>
                </Media>

                </Col>
  
            </Row>
        </Container>
        </React.Fragment>
    );
};