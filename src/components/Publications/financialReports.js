import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

export default function FinancialReport () {
    return (
        <Container fluid className='test'>
            <Row>
                <Col xs={{size: 12}} md={{size: 6}} className='test-child-one'>
                    <h1 className='publications-header'>
                        FINANCIAL REPORTS
                    </h1>
                </Col>
                <Col xs={{size: 12}} md={{size: 6}} className='test-child-two'>
                <p className='text-white'>yahaa img ayegi</p>
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