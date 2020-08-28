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
        2: [{name: "13th health Asia expo 22nd-24th August", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fposts%2F1537888739600999&show_text=true&width=552&height=735&appId"},
        {name: "Health and OT exhibition 6th Jan 2018", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpwachk%2Fposts%2F1670899952966543&show_text=true&width=552&height=716&appId"},
        {name: "Dawn lifestyle EXPO PWA blood grouping stall 3rd 4th 5th feb 2018", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1700719279984610%2F&show_text=true&width=552&height=735&appId"},
        {name: "Health Asia exhibition @expo 11’13th September18", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1980795005310368%2F&show_text=true&width=552&height=773&appId"},
        {name: "Session at ittehad ramazan @ geo 18 May", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1809527382437132%2F&show_text=true&width=552&height=593&appId"},
        {name: "Session at ramzan humara emaah @ ajj news 19th May", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1810710008985536%2F&show_text=true&width=552&height=438&appId"},
        {name: "FM 100 session 20 May", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1819915704731633%2F&show_text=true&width=552&height=206&appId"},
        {name: "Mehmman ramazan @KTN 31st May", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1823641271025743%2F&show_text=true&width=552&height=574&appId"},
        {name: "Barkat ramazan @ news01 5th June", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1828279360561934%2F&show_text=true&width=552&height=629&appId"},
        {name: "Ishq ramzan @TV one 5th June", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1828282217228315%2F&show_text=true&width=552&height=629&appId"},
        {name: "Jago Pakistan jaago @hum TV 11th June", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1834662436590293%2F&show_text=true&width=552&height=647&appId"},
        {name: "Ramzan pakistan @ PTV 11th June", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1834692886587248%2F&show_text=true&width=552&height=460&appId"},
        {name: "Ramazan kareem @ samma TV 13th June", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1837443202978883%2F&show_text=true&width=552&height=502&appId"},
        {name: "Bilal Qutub at Qutub online visited TDC 13th June", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F1838149259574944%2F&show_text=true&width=552&height=589&appId"},
        {name: "28thjan bake sale orientation meeting", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F2179479012108632%2F&show_text=true&width=552&height=629&appId"},
        {name: "4th feb hyderi  fund raiser campaign", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F2179479012108632%2F&show_text=true&width=552&height=629&appId"},
        {name: "9th feb zamzama fundraiser campaign", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F2186546254735241%2F&show_text=true&width=552&height=665&appId"},
        {name: "10th feb khadda marker fundraiser campaign", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F2186546254735241%2F&show_text=true&width=552&height=665&appId"},
        {name: "10th feb boat basin food Campaign ", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F179666072089946%2Fposts%2F2225505377505995%2F&show_text=true&width=552&height=849&appId"},

        ],
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
                        <Event events={data[2]} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Event events={data[3]} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="forth">
                        <Event events={data[4]} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                        <Event events={data[5]} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                        <Event events={data[6]} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="seventh">
                        <Event events={data[7]} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="eighth">
                        <Event events={data[8]} />
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}