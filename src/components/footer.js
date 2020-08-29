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
                        <SocialIcon className="social"  url="https://www.facebook.com/pwachk/" bgColor="#E50000" fgColor="#ffffff" style={{ height: 35, width: 35 }} />
                        <SocialIcon className="social"  url = "https://twitter.com/pwachk?lang=en" bgColor="#E50000" fgColor="#ffffff" style={{ height: 35, width: 35 }} />
                        <SocialIcon className="social"  url="https://www.instagram.com/pwachk/?hl=en" bgColor="#E50000" fgColor="#ffffff" style={{ height: 35, width: 35 }} />
                        <SocialIcon className="social"  url="https://www.youtube.com/channel/UCOAl9_ptaFEuejuQbEUNuRA" bgColor="#E50000" fgColor="#ffffff" style={{ height: 35, width: 35 }} />
                    </div>
                    
                </Col>
                <Col xs={{size: 12}} md={{size: 4}}>
                    <h4 className="text-center text-white">LOCATION</h4>
                    <div className = 'map'>
                        <a href = "https://goo.gl/maps/3uQ8HB9oeCLVE4UK6" target = "_blank"/>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.129661847416!2d67.00812581416734!3d24.85942075142342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1a99361f07%3A0xf6d115e1324df3d9!2sPWA%20Blood%20Bank!5e0!3m2!1sen!2s!4v1595683121131!5m2!1sen!2s" width="100%" height="250"></iframe>
                    </div>
                    
                </Col>
            </Row>
            <Row className="lower-footer">
                <Col xs={{size: 12}} md={{size: 6}}>
                <p >Copyright © 2020 All rights reserved by Patients' Welfare Association (Regd.)</p>
                </Col>
                <Col xs={{size: 12}} md={{size: 6}}>
                    <a href = "/history">
                    History
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/mission">
                       Mission
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/board-of-governors">
                       Board Of Governors
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/affiliations-and-certifications">
                       Affiliations and Certifications
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/shariah-compliance">
                       Shariah Compliance
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/blood-transfusion-services">
                       Blood Transfusion Services
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/thalassemia-daycare-services">
                       Thalassemia Daycare Services
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/financial-report">
                       Financial Reports
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/departmental-report">
                       Departmental Reports
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/qasid">
                       Qasid
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/souvenir">
                       Souvenir
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/success-stories">
                       Success Stories
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/blogs">
                       Blogs
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/videos">
                       Videos
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/events">
                       Events
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/why-us">
                       Why Us?
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/donate-now">
                       Donate Now
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/corporate-partner">
                       Corporate Partner
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/blood-donation">
                       Blood Donation
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/make-an-impact">
                       Make An Impact
                    </a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a href = "/contact-us">
                       Contact Us
                    </a>
                </Col>
            </Row>
        </Container>
        </div>
        
    );
}