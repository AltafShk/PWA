import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Videos () {
    return (
        <Container style={{textAlign: 'center'}}>
            <Row>
                <Col xs='12'>
                    <p className='vid-main-header'>BLOOD TRANSFUSION SERVICES</p>
                    <p className='vid-sub-header'>Jawaid's story</p>
                    <p className='vid-text'>Jawaid’s life is important not just for his family but for us too. In a critical situation a pint of blood can be the difference between life and death. That’s why we do our best to provide patients like Jawaid with safe blood.<br/><br/>
                    For the past 40 years Patients’ Welfare Association has been working at Civil Hospital Karachi to provide screened blood to patients all over the city FREE OF COST.<br/><br/> 
                    Give your Zakat and donations to Patients’ Welfare Association and help save lives. There are thousands of people like Jawaid to whom your Zakat and donations can mean a gift of life.<br/><br/> </p>
                    <div style={{textAlign: "center"}}>
                        <img src={require('../../images/divider.png')} style={{marginBottom: '5px'}} />
                    </div>
                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/2Xu78zEyvmw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col xs='12'>
                    <p className='vid-main-header'>THALASSEMIA SERVICES</p>
                    <p className='vid-sub-header'>Abdullah's story</p>
                    <p className='vid-text'>Like Abdullah many thalassemic children are unable to pursue their dreams about life because they can not afford to live with their disease. PWA gives these children a chance at life and their dreams by providing blood transfusions and medication FREE OF COST.<br/><br/>
                    Support PWA and arm children like Abdullah to fight their battle against Thalassemia.<br/><br/> </p>
                    <div style={{textAlign: "center"}}>
                        <img src={require('../../images/divider.png')} />
                    </div>
                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/qmA7vzPh5iQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
    );
};