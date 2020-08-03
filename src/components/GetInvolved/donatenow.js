import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css'


export default function DonateNow (props) {

   

    return (
        <Container fluid={true}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "dn-txt">DONATE NOW</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/mai-img-1.png')}/>
                </Col> 
        
            </Row>


            <Container style = {{textAlign: "center"}}>
                <Row>
                <Col md={{size: 1}} sm = {{size: 12}}></Col>


                <Col  md={{size: 10}} sm = {{size: 12}} className = "mt-4">
                            <div>
                        <FontAwesome className = 'fa-quote-left'
                                    name = 'quote-left'
                                    size = '3x' style = {{color:"#e50000", float: 'left', marginTop: '15px'}}/>
                            </div>   
                         <p className = 'mai-quote' style = {{fontWeight: "600"}}> <br/> <br/> <br/>Alone We Can Do So Little Together We Can Do So Much</p>
                         <FontAwesome className = 'fa-quote-right'
                                    name = 'quote-right'
                                    size = '3x' style = {{color:"#e50000", float: 'right'}}/>
                        </Col> 
                </Row>


                <p className = "mt-5 dn-small-txt">We have been providing <strong>FREE OF COST</strong> services to the patients for <strong>40 years</strong> and none of this would have been possible without you. Your zakat and donations are the source of hope for the people. Please keep on donating generously. Please keep on contributing to humanity, keep on sharing smiles with the thalassemic kids.</p>


                <p className = "mt-4 dn-small-txt-2">YOU CAN GIVE US YOUR ZAKAT AND DONATIONS FROM ANYWHERE BY FOLLOWING WAYS:</p>


                <div style={{width: '100%', textAlign: 'center'}}>
                <h1 className = 'display-4 mt-5 mb-2'>IN-HAND</h1>
                <img className="mx-auto" src={require('../../images/divider.png')}/>
                </div>

                <p className = "mt-5 dn-small-txt" style = {{textAlign: "left"}}>Please feel free to visit Patients’ Welfare Association office in Saddar located in Dr Ruth K M Pfau Civil Hospital Karachi between 9:00 am to 5:00 pm, Monday to Saturday and 10:00 am to 3:00pm on Sunday, to give your Zakat/Donation.</p>


                <a href = "https://goo.gl/maps/j4L7jVgpHNLymLqaA" target = "_blank">
                <iframe className = "mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1296618473993!2d67.00812581389366!3d24.859420751424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1a99361f07%3A0xf6d115e1324df3d9!2sPWA%20Blood%20Bank!5e0!3m2!1sen!2s!4v1596476072005!5m2!1sen!2s" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </a>

                <div style={{width: '100%', textAlign: 'center'}}>
                <h1 className = 'display-4 mt-5 mb-2'>DIRECT DEPOSIT</h1>
                <img className="mx-auto" src={require('../../images/divider.png')}/>
                </div>


                <p className = "mt-5 dn-small-txt" style = {{textAlign: "left"}}>You can directly deposit your donation amount to any branch of MEEZAN BANK LIMITED.</p>

                <p className = "mt-4 dn-small-txt" style = {{textAlign: "left"}}>
                    <strong>Account Title:</strong> Patients’ Welfare Association (Donation)
                    <br/>
                    <strong>Bank Name:</strong> Meezan Bank Limited
                    <br/>
                    <strong>Account:</strong> (0164) 0102792531
                    <br/>
                    <strong>IBAN:</strong> PK68MMEZN0001640102792531
                </p>


                <div style={{width: '100%', textAlign: 'center'}}>
                <h1 className = 'display-4 mt-5 mb-2'>ENDOWMENT FUND</h1>
                <img className="mx-auto" src={require('../../images/divider.png')}/>
                </div>


                <p className = "mt-5 dn-small-txt" style = {{textAlign: "left"}}>If you would like to invest in our endowment fund, please send your Donation via our account in Meezan bank.</p>                

                <p className = "mt-3 dn-small-txt" style = {{textAlign: "left"}}>
                    <strong>Bank Name:</strong> Meezan Bank Ltd.
                    <br/>
                    <br/>
                    <strong>Account Title:</strong> Patients’ Welfare Association
                    <br/>
                    <br/>
                    <strong>Account No.</strong> 01640101266701
                    <br/>
                    <br/>
                    <strong>ICARE</strong>
                    <br/>
                    Via our online portal, donation and Zakat Fund can be made from US:
                    <br/>
                    <br/>
                    https://i-care-foundation.org/charity/pwa/
                </p>

                

                <div style={{width: '100%', textAlign: 'center'}}>
                <h1 className = 'display-4 mt-5 mb-2'>DONATE VIA COURIER</h1>
                <img className="mx-auto" src={require('../../images/divider.png')}/>
                </div>

                
                <p className = "mt-3 dn-small-txt" style = {{textAlign: "left"}}>
                    Make your cheques and drafts payable to Patients’ Welfare Association and send them via courier or any TCS center in Pakistan to the following address:
                    <br/>
                    <br/>
                    <strong>Patients’ Welfare Association, Civil Hospital, Baba-e-Urdu Road, Saddar<br/>
                    G.P.O. Box # 1314, Karachi.<br/>
                    DOOR STEP COLLECTION</strong>
                    <br/>
                    <br/>
                    If the above methods are difficult for you, you can always call us at <strong>021-32751707</strong> or <strong>021-32735214</strong> and
                    we’ll send a trusted person to collect your Zakat/Donation within 72 hours.
                    <br/>
                    <br/>
                    <strong>Disclaimer</strong><br/>
                    To ensure that the rider is a true official from PWA, please ask him for his organization identification card and ensure to take the official receipt of your amount.
                </p>



                <div style={{width: '100%', textAlign: 'center'}}>
                <h1 className = 'display-4 mt-5 mb-2'>IN-KIND</h1>
                <img className="mx-auto" src={require('../../images/divider.png')}/>
                </div>


                <p className = "mt-3 dn-small-txt" style = {{textAlign: "left"}}>
                We can do no great things only small things with love.<br/>
                In addition to the monetary donation, you can also donate items like equipment & tools, machines, to help comfort
                patients’  problems and help us reduce their pain.
                </p>


                <ul>
                    <li className = "mt-4 dn-small-txt" style = {{textAlign: "left"}}>Sponsor a blood bag (proposal)</li>
                    <li className = "dn-small-txt" style = {{textAlign: "left"}}>Sponsor blood bank’s machines (E.G Centrifuge, Kryofuge, Serofuge, CBC machine, Plasma Thawer, Plasma Agitator and the equipment that’s essential to our work)</li>
                    <li className = "dn-small-txt" style = {{textAlign: "left"}}>Sponsor electronics like AC , PC , LCD, Refrigerator, Dispenser, Fans and the other daily required electronics.</li>
                </ul>


                <div style={{width: '100%', textAlign: 'center'}}>
                <h1 className = 'display-4 mt-5 mb-2'>DARAZ.PK</h1>
                <img className="mx-auto" src={require('../../images/divider.png')}/>
                </div>


                <p className = "mt-3 dn-small-txt" style = {{textAlign: "left"}}>You can make a donation via Daraz.pk</p>


                <ul>
                    <a href = "https://www.daraz.pk/products/patients-welfare-association-donate-medical-supplies-i2171846-s10246908.html?spm=a2a0e.8553159.0.0.c20b4c5eoP70Bj&mp=3&fbclid=IwAR1M1P35FM-t76XhmPXLuDY3A4K1llu3gorFoyjBAJk6rJwrvKN0RiIuEeg"><li className = "mt-4 dn-small-txt" style = {{textAlign: "left"}}>Donate Medical Supplies</li></a>
                    <a href = "https://www.daraz.pk/products/donate-1-blood-bag-i3437455-s12922801.html?spm=a2a0e.8553159.0.0.c20b4c5eoP70Bj&mp=3&fbclid=IwAR2aeqEIfA3VchrKHW4QCFD5tdAs2zTCna7m93ASlYNZZkgxTDZehoppqyg"><li className = "dn-small-txt" style = {{textAlign: "left"}}>Donate a blood bag </li></a>
                    <a href = "https://www.daraz.pk/products/sponsor-1-day-medicines-i3434545-s12916648.html?spm=a2a0e.8553159.0.0.c20b4c5e5XQbXh&mp=3&fbclid=IwAR2wUgAgU7HK8jY1oeSA9Sat18wqDXqxGf-o9kJ6nEOSAbJcQyIWa2KQxA0"><li className = "dn-small-txt" style = {{textAlign: "left"}}>Sponsor 1 day medicine</li></a>
                    <a href = "https://www.daraz.pk/products/sponsor-a-thalassemia-patient-sat-category-a-i3434547-s12916650.html?spm=a2a0e.8553159.0.0.c20b4c5e5XQbXh&mp=3&fbclid=IwAR3rxzV_mRf4nSSO4b6MhKbLBGuigmD8uWOXtmxpPXRX7sW8ZPy64yte5tc"><li className = "dn-small-txt" style = {{textAlign: "left"}}>Sponsor a thalassemiac kid</li></a>
                </ul>

                <p className = "mt-3 dn-small-txt" style = {{textAlign: "left"}}>For further details visit:</p>

                <a href = "https://www.daraz.pk/shop/patients-welfare-association-karachi/?spm=a2a0e.12032417.6340504160.8.6e394843y023Oy&hybid=1"><p className = "mt-3 dn-small-txt" style = {{textAlign: "left"}}>https://www.daraz.pk/shop/patients-welfare-association-karachi/?spm=a2a0e.12032417.6340504160.8.6e394843y023Oy&hybid=1</p></a>


                </Container>


        </Container>
    );
}