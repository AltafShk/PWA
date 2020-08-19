import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { Container } from 'reactstrap';
import Event from './event';


export default function Events () {
    const data = {
        1: [
            {name: "Blood Donation Feature Pilot, 2nd April 2019", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fposts%2F2262556390467560"},
            {name: "Voluntary blood Donation Camp at Javed Bahria Community, 31st March 2019", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fphotos%2Fa.183128445077042%2F2258152360907963%2F%3Ftype%3D3&width=500"},
            {name: "Blood Camp Annual DMC, 14th March 2019", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fposts%2F2239459749443891&width=500"},
            {name: "Voluntary Blood Donation Camp at Dar ul Uloom Karachi, 2nd Dec 2018", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fposts%2F2115053998551134&width=500"},
            {name: "Voluntary Blood Donation Camp at Hussaini Mission Imam Bargah, 6 October 2018", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fposts%2F2003883299668205&width=500"},
            {name: "Voluntary Blood Donation Camp at Bahria University, 17 September 2018", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fposts%2F1980964595293409&width=500"},
            {name: "Blood Camp at Swami Narain Temple in Association With Pakistan Hindu Community, 3 September 2018", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fposts%2F1967694679953734&width=500"},
            {name: "Annual Blood Camp of DOW 2018, 24th Jan 2018", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fposts%2F1689166724473199&width=500"},
            {name: "Blood Donation Camp at 3rd Health Expo, 30-31st Dec 2017", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fposts%2F1662794220443783&width=500"},
            {name: "Voluntary Blood Donation Camp at Police Training Centre, 4th August 2017", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fposts%2F1519888001401073&width=500"}
        ],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
    };
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
                            <Event events={data[1]} />
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