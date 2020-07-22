import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { SocialIcon } from 'react-social-icons';
import { Container, Row, Col } from 'reactstrap';

export default function Footer () {
    return(
        <div>
            <Container fluid={true} className="mt-5 footerr">
            <Row className="upper-footer">
                <Col xs={{size: 12}} md={{size: 4}}>
                    <h4 className="text-center text-white">CONTACT DETAILS</h4>
                    <p className="text-white">
                    Dr. Ruth K. M. Pfau Civil Hospital, Baba-e-Urdu Road, Saddar G.P.O. Box # 1314, Karachi
                    </p>
                    <p className="text-white">
                    <strong>Tel:</strong> (092)21-99215740-45(Ext. 5040-44)
                    </p>
                    <p  className="text-white">
                    <strong>Direct Line:</strong> (092)21-32735214
                    </p>
                    <p className="text-white mb-4">
                    <strong>Email:</strong> info@pwa-chk.org.pk
                    </p>
                </Col>
                <Col xs={{size: 12}} md={{size: 4}}>
                    <h4 className="text-center text-white">SOCIAL MEDIA</h4>
                    <div className="footer-card text-center mt-4 mb-4">
                        <SocialIcon className="social"  url="https://www.facebook.com/" bgColor="#E50000" fgColor="#ffffff" style={{ height: 35, width: 35 }} />
                        <SocialIcon className="social"  url="https://www.twitter.com/" bgColor="#E50000" fgColor="#ffffff" style={{ height: 35, width: 35 }} />
                        <SocialIcon className="social"  url="https://www.instagram.com/" bgColor="#E50000" fgColor="#ffffff" style={{ height: 35, width: 35 }} />
                        <SocialIcon className="social"  url="https://www.youtube.com/" bgColor="#E50000" fgColor="#ffffff" style={{ height: 35, width: 35 }} />
                    </div>
                    
                </Col>
                <Col xs={{size: 12}} md={{size: 4}}>
                    <h4 className="text-center text-white">LOCATION</h4>
                    <h4 className="text-center text-white">GOOGLEE MAPPP</h4>
                    
                </Col>
            </Row>
            <Row className="lower-footer">
                <Col xs={{size: 12}} md={{size: 6}}>
                <p >Copyright © 2020 All rights reserved by Patients' Welfare Association (Regd.)</p>
                </Col>
                <Col xs={{size: 12}} md={{size: 6}}>
                    <p>
                        allll linksssssssss
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
        
    );
}