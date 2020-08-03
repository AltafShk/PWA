import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function ContactUs () {
    return (
        <Container className='mt-5'>
            <Row>
                <Col xs='12' md='8'>
                    <div>
                        <p className='contact-header'>Main Office</p>
                        <p className='contact-text'>Tel: 92-21-99215740-45 ( Ext. 5040-41 )<br/><br/>
                        Direct Line: (092)21-32735214, (092)21-32751707<br/><br/>
                        Email: info@pwa-chk.org.pk</p>
                    </div>
                    <div className='mt-5'>
                        <p className='contact-header'>PWA Bloodbank:</p>
                        <p className='contact-text'>Tel: 92-21-99215740-45 ( Ext. 5043 )<br/><br/>
                        Email: bloodbank@pwa-chk.org.pk</p>
                    </div>
                    <div className='mt-5'>
                        <p className='contact-header'>Thalassemia Daycare Center: <span className='contact-special'>(for patient related queries)</span></p>
                        <p className='contact-text'>Tel: 92-21-99215740-45 ( Ext. 5040-41 )<br/><br/>
                        Direct Line :(092)21-32735214, (092)21-32751707<br/><br/>
                        Email: patient-inquiry@pwa-chk.org.pk</p>
                    </div>
                    <div className='mt-5'>
                        <p className='contact-header'>For employment opportunities/ submission of CVs:</p>
                        <p className='contact-text'>Tel: 92-21-99215740-45 ( Ext. 5040-41 )<br/><br/>
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
    );
};