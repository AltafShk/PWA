import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css'


export default function MakeAnImpact (props) {

   

    return (
        <Container fluid={true}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "wu-txt">MAKE AN IMPACT</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/mai-img-1.png')}/>
                </Col> 
        
            </Row>


            <Row>
                <Col  md={{size: 1}} sm = {{size: 12}} style = {{padding: "0px"}}>
                </Col> 

                <Col  md={{size: 10}} sm = {{size: 12}} style = {{padding: "0px"}}>
                    <p className = "mai-small-txt mt-4 mx-3">It is because of the hundreds and thousands of generous donors that we have been able to pull it so far. We need your continued support to enable us to continue with our work with the same vigor and passion.</p>
                </Col> 
            </Row>


            <Container style = {{textAlign: "center"}}>
            
                <p className = "mai-med-txt mt-5"><a href = "https://www.pwa-chk.org.pk/fund-a-smile/" style = {{textDecoration: "none", color: "black"}}>FUND A SMILE</a></p>
                <p className = "mai-med-txt"><a href = "https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/SPONSORSHIP-OF-BLOOD-SCREENING-COST.pdf" style = {{textDecoration: "none", color: "black"}}>BLOOD BAG</a></p> 
                <p className = "mai-med-txt"><a href = "https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/SPONSORSHIP-OF-BLOOD-SCREENING-COST.pdf" style = {{textDecoration: "none", color: "black"}}>SCREENING</a></p>
            
            </Container>

            <div style={{width: '100%', textAlign: 'center'}}>
                <h1 className = 'display-4 mt-5 mb-2'>ACCOUNT DETAILS</h1>
                <img className="mx-auto" src={require('../../images/divider.png')}/>
            </div>

            <Container style = {{textAlign: "center"}}>
                <p className = "mt-4 mai-med-txt-2"><strong>FOR DONATION</strong></p>

                <p className = "mt-4 mai-small-txt">
                   <strong style = {{color: "black"}}>Account Title:</strong> Patients’ Welfare Association (Donation)
                   <br/>
                   <strong style = {{color: "black"}}>Bank Name:</strong> Meezan Bank Limited
                   <br/>
                   <strong style = {{color: "black"}}>Account:</strong> (0164) 0102792531
                   <br/>
                   <strong style = {{color: "black"}}>IBAN:</strong> PK68MEZN0001640102792531
                </p>

            </Container>


            <Container style = {{textAlign: "center"}}>
                <Row>
                <Col  md={{size: 12}} sm = {{size: 12}} className = "mt-4">
                            <div>
                        <FontAwesome className = 'fa-quote-left'
                                    name = 'quote-left'
                                    size = '3x' style = {{color:"#e50000", float: 'left', marginTop: '15px'}}/>
                            </div>   
                         <p className = 'mai-quote'> <br/> <br/> <br/>Those who (in charity) spend of their goods by night and by day, in secret and in public, have their reward with their Lord: on them shall be no fear, nor shall they grieve.</p>
                         <FontAwesome className = 'fa-quote-right'
                                    name = 'quote-right'
                                    size = '3x' style = {{color:"#e50000", float: 'right'}}/>
                        <p className = 'text-left hist-author'> <br/> <br/>( Surah Al Buqrah - verse 274 )</p>
                        </Col> 
                </Row>


                <Row>
                <Col  md={{size: 12}} sm = {{size: 12}} className = "mt-4">
                            <div>
                        <FontAwesome className = 'fa-quote-left'
                                    name = 'quote-left'
                                    size = '3x' style = {{color:"#e50000", float: 'left', marginTop: '15px'}}/>
                            </div>   
                         <p className = 'mai-quote'> <br/> <br/> <br/>Whoever saves one - it is as if he had saved mankind entirely.</p>
                         <FontAwesome className = 'fa-quote-right'
                                    name = 'quote-right'
                                    size = '3x' style = {{color:"#e50000", float: 'right'}}/>
                        <p className = 'text-left hist-author'> <br/> <br/>( Surah al Ma'idah 5:32 )</p>
                        </Col> 
                </Row>
            </Container>



            <Container style = {{textAlign: "center"}}>
                
                <p className = "mai-small-txt-2">Your zakat can make a difference. You can make a difference. Give your zakat in the name of patients’ Welfare Association®.</p>
                <p className = "mt-4 mai-med-txt-2"><strong>SEND YOUR ZAKAT IN</strong></p>

                <p className = "mt-4 mai-small-txt">
                   <strong style = {{color: "black"}}>Account Title:</strong> Patients’ Welfare Association (Donation)
                   <br/>
                   <strong style = {{color: "black"}}>Bank Name:</strong> Meezan Bank Limited
                   <br/>
                   <strong style = {{color: "black"}}>Account:</strong> (0164) 0102792531
                   <br/>
                   <strong style = {{color: "black"}}>IBAN:</strong> PK68MEZN0001640102792531
                </p>


                <p className = "mai-small-txt-2">Patients’ Welfare Association under the guidance of Mufti Hussain Ahmed as our Sharia’h Advisor from Darul Ifta, Jamia Darul Uloom Karachi, has put a proper system in place to ensure your Zakat is used according to the principles of Sharia’h. Furthermore, our Sharia’h Advisor also oversees every transaction from your Zakat and donations to ensure their credibility.</p>

            </Container>


        </Container>
    );
}