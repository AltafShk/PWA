import React from 'react';
import { Container, Row, Col } from 'reactstrap';


//form remaining
export default function ContactUs () {
    return (
        <React.Fragment>

        <Container fluid style={{padding: '0px'}}>
            <a href = "https://goo.gl/maps/j4L7jVgpHNLymLqaA" target = "_blank">
                <iframe className = "mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1296618473993!2d67.00812581389366!3d24.859420751424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1a99361f07%3A0xf6d115e1324df3d9!2sPWA%20Blood%20Bank!5e0!3m2!1sen!2s!4v1596476072005!5m2!1sen!2s" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </a>
        </Container>
        <Container className='mt-5'>
            <Row>
                <Col xs='12' md='8'>
                    <div>
                        <p className='contact-header'>Main Office</p>
                        <p className='contact-text'>Tel: +92-21-99215740-45 ( Ext. 5040-41 )<br/><br/>
                        Direct Line: (092)21-32735214, (092)21-32751707<br/><br/>
                        Email: info@pwa-chk.org.pk</p>
                    </div>
                    <div className='mt-5'>
                        <p className='contact-header'>PWA Bloodbank:</p>
                        <p className='contact-text'>Tel: +92-21-99215740-45 ( Ext. 5043 )<br/><br/>
                        Email: bloodbank@pwa-chk.org.pk</p>
                    </div>
                    <div className='mt-5'>
                        <p className='contact-header'>Thalassemia Daycare Center: <span className='contact-special'>(for patient related queries)</span></p>
                        <p className='contact-text'>Tel: +92-21-99215740-45 ( Ext. 5040-41 )<br/><br/>
                        Direct Line :(092)21-32735214, (092)21-32751707<br/><br/>
                        Email: patient-inquiry@pwa-chk.org.pk</p>
                    </div>
                    <div className='mt-5'>
                        <p className='contact-header'>For employment opportunities/ submission of CVs:</p>
                        <p className='contact-text'>Tel: +92-21-99215740-45 ( Ext. 5040-41 )<br/><br/>
                        Email: jobs@pwa-chk.org.pk</p>
                    </div>
                    <div className='mt-5'>
                        <p className='contact-header'>Office Hours:</p>
                        <p className='contact-text'>Monday—Saturday: 9:00AM–5:00PM<br/>
                        Prayer break(Friday): 1:00PM–2:00PM</p>
                    </div>
                    <div className='mt-5'>
                        <p className='contact-header'>Address:</p>
                        <p className='contact-text'>Dr. Ruth K.M. Pfau Civil Hospital,<br/>
                        Baba-e-Urdu Road, Saddar,<br/>
                        G.P.O. Box # 1314, Karachi.</p>
                    </div>
                    
                </Col>
                <Col xs='12' md='4'>
                </Col>
            </Row>
        </Container>
        </React.Fragment>
        
    );
};