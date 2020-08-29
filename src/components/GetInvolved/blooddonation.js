import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';



export default function BloodDonation (props) {

   

    return (
        <Container fluid={true}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "cp-txt my-4">BLOOD DONATION</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/bd-img-1.png')}/>
                </Col> 
        
            </Row>


            <Container style = {{textAlign: "center"}}>
            
                <p className = "bd-med-txt mt-4">WAYS TO HELP US</p>

                <p className = "bd-small-txt mt-4">DONATE BLOOD. SAVE LIVES</p>

                <img className="mx-auto mt-2" src={require('../../images/divider.png')}/>

            
            </Container>



            <Container fluid={false} style = {{textAlign: "center"}}>
        <Row className="departments-jumbotron">
                
                <Col  md={{size: 12}} sm = {{size: 12}}>
                 <p className = "text-center num-font">1</p>
                 <p className = "bd-desc-txt">ARRANGE A BLOOD DONATION DRIVE</p>


                 <p className = "bd-small-txt-2 mt-3 mb-4">Provision of safe blood is a very important part of medical care. 
                    <br/>
                    <br/>
                    From surgeries to the management of road traffic accidents, blood transfusions can be the difference between life and death. 
                    <br/>
                    <br/>
                    However blood is still in short supply at most hospitals in Pakistan. This is because blood can not be manufactured; it can only be obtained from donors and donating blood isn’t very common in our country.
                    <br/>
                    <br/>
                    To encourage blood donation you can spread awareness about blood donation and help us set up camps for voluntary blood donation. PWA will screen the blood and provide it to patients free of cost. We can set up blood donation camps at  community centres, places of communal worship (eg mosques, churches, temples etc), educational institutes etc. 
                    <br/>
                    <br/>
                    To set up a blood camp contact us at <strong>0213273521</strong>
                    <br/>
                    <br/>
                    Or you can email us at <strong>pwachk@yahoo.com</strong> For more information you can visit our Facebook page: <br/>
                    <strong>www.facebook.com/pwachk</strong></p>
                 

                 <a href = "https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/how-can-you-help-.pdf">
                <img className="bd-img" src={require('../../images/bd-img-2.jpg')}/>
                </a>

                 
                 

                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}}>
                <p className = "text-center num-font">2</p>
                <p className = "bd-desc-txt">SPONSOR A BLOOD BAG</p>
                <div>
                    <a href = "https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/how-can-you-help-.pdf">
                    <img className="mx-auto home-img" src={require('../../images/bd-img-3.jpg')}/>
                    </a>
                 </div>

                 
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}}>
                <p className = "text-center num-font">3</p>
                <p className = "bd-desc-txt">SPONSOR SCREENING OF BLOOD BAGS</p>
                <div>
                    <a href = "https://www.pwa-chk.org.pk/wp-content/uploads/2019/07/how-can-you-help-.pdf">
                    <img className="mx-auto home-img" src={require('../../images/bd-img-4.jpg')}/>
                    </a>
                 </div>

                 
                </Col> 
                
            </Row>
        </Container>


            


        </Container>
    );
}