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
        3: [{'name': 'Awareness session @beaconlight academy gulshan branch 29th August 2017', 'url': 'https://www.facebook.com/179666072089946/posts/1544551648934708/'}, {'name': 'Thalassemia awareness campaign @SMS Grammar school 23rd JAN 2018', 'url': 'https://www.facebook.com/179666072089946/posts/1688087137914491/'}, {'name': 'Thalassemia awareness session @ beacon house school 16 October', 'url': 'https://www.facebook.com/179666072089946/posts/2023784957678039/'}, {'name': 'Thalassemia awareness session @OT complex 3rd May', 'url': 'https://www.facebook.com/179666072089946/posts/1796169510439586/'}, {'name': 'Thalassemia DAY 8th may', 'url': 'https://www.facebook.com/179666072089946/posts/1799999990056538/'}, {'name': 'Hepatitis prevention and control among individuals in health care 20th March 2018', 'url': 'https://www.facebook.com/179666072089946/posts/1749524901770714/'}, {'name': 'Thalassemia awareness session @OT complex 3rd May', 'url': 'https://www.facebook.com/179666072089946/posts/1796169510439586/'}, {'name': 'Hepatitis health awareness campaign 6 April19', 'url': 'https://www.facebook.com/179666072089946/posts/2273933739329825/'}],
        4: [{'name': "D'23 orientation", 'url': 'https://www.facebook.com/179666072089946/posts/1674971965892675/'}, {'name': 'D24 orientation', 'url': 'https://www.facebook.com/179666072089946/posts/2154314271291773/'}, {'name': 'CIVIL HOSPITAL CAMPAIGN', 'url': 'Cupcake distribution @civil 16 August'}, {'name': 'https://www.facebook.com/179666072089946/posts/1947817831941419/', 'url': 'Celebration with TDC kids'}, {'name': 'Health and hygiene activity by team muskhurahat at TDC on 22nd feb and 23rd feb', 'url': 'https://www.facebook.com/179666072089946/posts/1725514574171747/'}, {'name': 'Thalassemia DAY 8th may 17', 'url': 'https://www.facebook.com/179666072089946/posts/1799999990056538/'}, {'name': 'Closing ceremony (team muskhurahat) 17th May18', 'url': 'https://www.facebook.com/179666072089946/posts/1808666129189924/'}, {'name': 'Eid gift campaign March 31st-15 June17', 'url': 'https://www.facebook.com/pwachk/videos/1843112299078640/'}, {'name': 'Independence day celebration 16 August17', 'url': 'https://www.facebook.com/179666072089946/posts/1940327416023794/'}, {'name': 'Independence day celebration 21st August17 at tdc', 'url': 'https://www.facebook.com/179666072089946/posts/1536880869701786/'}, {'name': 'Behroz sabazwari visit @17th April19', 'url': 'https://www.facebook.com/179666072089946/posts/2293069590749573/'}],
        5: [{'name': '37th AGBM 26th April18', 'url': 'https://www.facebook.com/179666072089946/posts/1787719751284562/'}, {'name': 'PWA alumni reunion @Marriott hotel Karachi 30th dec2018', 'url': 'https://www.facebook.com/179666072089946/posts/2130659343657266/'}],
        6: [{'name': 'Independence day 14th August', 'url': 'https://www.facebook.com/179666072089946/posts/1935429686513567/'}, {'name': '23rd March19', 'url': 'https://www.facebook.com/179666072089946/posts/2247629428626923/'}, {'name': 'Doctors Day 30th March19', 'url': 'https://www.facebook.com/179666072089946/posts/2257844767605389/'}, {'name': 'World health day 7th April18', 'url': 'https://www.facebook.com/179666072089946/posts/2269500416439824/'}],
        7: [{'name': 'Dr abdul bari awarded hilal e imitiaz 23rd March', 'url': 'https://www.facebook.com/179666072089946/posts/2230238557032677/'}, {'name': 'Health foundation vaccination for Hepatitis 22nd. June', 'url': 'https://www.facebook.com/179666072089946/posts/2162176527172214/'}, {'name': 'Daraz.pk collaboration 3rd April18', 'url': 'https://www.facebook.com/179666072089946/posts/1763560147033856/'}, {'name': 'FRIP session for. BLS@ PWA 12 September18', 'url': 'https://www.facebook.com/179666072089946/posts/1975997559123446/'}],
        8: [{'name': 'Two days workshop by SBTP at Marriott hotel, Islamabad  29th and 30th Nov 2017', 'url': 'https://www.facebook.com/179666072089946/posts/1631705736885965/'}, {'name': 'Two days’ workshop of SBTP at Avari hotel Karachi– 21-22’Dec2017', 'url': 'https://www.facebook.com/179666072089946/posts/1657153074341231/'}, {'name': 'Pakistan health care summit @Marriott hotel Karachi 28th Feb 2018', 'url': 'https://www.facebook.com/179666072089946/posts/1733459520043919/'}, {'name': "Dr Sumaira (PWA ALUMNI visit D'96) 13th March 2018", 'url': 'https://www.facebook.com/pwachk/videos/1740752169314654/'}, {'name': 'Meeting of medical student NGO’s organized by global health directorate 8th April 2018', 'url': 'https://www.facebook.com/179666072089946/posts/1768882413168296/'}, {'name': 'Dr saba jamal + dr meesum visit from sbta + epos 2nd feb18', 'url': 'https://www.facebook.com/179666072089946/posts/2177526082303925/'}, {'name': 'ARY NEWS COVERAGE @PWA 8 OCTOBER', 'url': 'https://www.facebook.com/pwachk/videos/2262929487285282/'}]
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
