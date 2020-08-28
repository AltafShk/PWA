import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

export default function FinancialReport () {
    return (
        <Container fluid className='test'>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "bts-txt">FINANCIAL REPORTS</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/AoC-img-1.png')}/>
                </Col> 
        
            </Row>
            <Row className='mt-4'>
                <Col xs={{offset: 1}}>
                    <h4>Financial Reports</h4>
                    <ul>
                        <li className='mt-4'> 
                            <h5>
                                FINANCIAL REPORT 2016 <a href='https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/Audit-2016-3.pdf' target="_blank">[Click here to download] </a>
                            </h5>
                        </li>
                        <li className='mt-4'>
                            <h5>
                                FINANCIAL REPORT 2015 <a href='https://pwawebdemo.000webhostapp.com/wp-content/uploads/2019/04/Audit-June-2015.pdf' target="_blank">[Click here to download] </a>
                            </h5>
                        </li>
                        <li className='mt-4'>
                            <h5>
                                FINANCIAL REPORT 2014 <a href='https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/Audit-June-2014.pdf' target="_blank">[Click here to download] </a>
                            </h5>
                        </li>
                    </ul> 
                </Col>
            </Row>
        </Container>
    );
};