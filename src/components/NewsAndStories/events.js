import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { Container } from 'reactstrap';


export default function Events () {
    return(
        <Container className='mt-5'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">1. VOLUNTARY BLOOD DONATION CAMPS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">2. FUND RAISING PROMOTIONAL EVENTS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">3. AWARENESS ACTIVITIES</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="forth">4. IN HOUSE ACTIVITIES</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="fifth">5. DONOR CONFERENCES</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="sixth">6. INTERNATIONAL DAYS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="seventh">7. ACKNOWLEDGEMENT</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="eighth">8. OTHER</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <div>helloo</div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <div>helloosss</div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <div>helloosss</div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="forth">
                        <div>helloosss</div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                        <div>helloosss</div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                        <div>helloosss</div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seventh">
                        <div>helloosss</div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="eighth">
                        <div>helloosss</div>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}