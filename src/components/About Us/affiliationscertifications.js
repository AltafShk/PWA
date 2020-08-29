import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';



export default function AffiliationsAndCertifications (props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "AoC-txt my-4">AFFILIATIONS AND CERTIFICATIONS</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive aoc-img-1" src={require('../../images/AoC-img-1.png')}/>
                </Col> 
        
            </Row>

            <Row>
                <Col md={{size: 1}} sm = {{size: 12}}>
                </Col>

                <Col md={{size: 5}} sm = {{size: 12}}>
                    <p className = "aoc-heading">Registration Certificate</p>

                    <p className = "aoc-small-txt">[pdf-embedder url=”https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/New-Doc-2017-08-23_1.pdf”]</p>
                </Col>

                <Col md={{size: 5}} sm = {{size: 12}}>
                    <p className = "aoc-heading">Social Welfare Department Certificate</p>
                    <p className = "aoc-small-txt">[pdf-embedder url=”https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/Social-Welfare-Renewal-Cert-1.pdf”]</p>
                </Col>

                <Col md={{size: 1}} sm = {{size: 12}}>
                </Col>
            </Row>



            <Row fluid = {false}>
                <Col md={{size: 1}} sm = {{size: 12}}>
                </Col>
                <Col md={{size: 5}} sm = {{size: 12}}>
                    <p className = "aoc-heading">National Tax Number (NTN)</p>
                    <p className = "aoc-small-txt">[pdf-embedder url=”https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/ntn.pdf”]</p>
                </Col>

                <Col md={{size: 5}} sm = {{size: 12}}>
                    <p className = "aoc-heading">Tax Exemption Certificate</p>
                    <p className = "aoc-small-txt">[pdf-embedder url=”https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/Tax-EXEMPTION-2017-18.pdf”]</p>
                </Col>

                <Col md={{size: 1}} sm = {{size: 12}}>
                </Col>
            </Row>

            <Row>

                <Col md={{size: 1}} sm = {{size: 12}}>
                </Col>

                <Col md={{size: 5}} sm = {{size: 12}}>
                    <p className = "aoc-download-txt">DOWNLOAD:</p>

                    <ol>
                        <a href = "https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/New-Doc-2017-08-23_1.pdf"><li>Registration Certificate</li></a>
                        <a href = "https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/Social-Welfare-Renewal-Cert-1.pdf"><li>Social Welfare Renewal Certificate</li></a>
                        <a href = "https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/Tax-EXEMPTION-2017-18.pdf"><li>Tax Exemption Certificate</li></a>
                        <a href = "https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/ntn.pdf"><li>NTN Certificate</li></a>
                    </ol>
                </Col>
            </Row>


        </Container>
    );
}