import React, { useState } from 'react';
import { Form, Label, Input, Container, Row, Col, Button } from 'reactstrap';

export default function ZakaatCalculator() {
    const [zakat, changeAmt] = useState(0);
    const [amount, changeAmount] = useState(0);

    return(
        <Container fluid>
            <Row>
                <Col md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "bts-txt">ZAKAT CALCULATOR</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../../images/zc-img-1.jpg')}/>
                </Col> 

            </Row>
            <Container>
            <h4 className='text-center'>Calculate your Zaakat</h4>
            <Form>
                <Label for='amt'>Enter your amount: </Label>
                <Input className='w-50 text-center align-items-center' htmlFor='amt' onChange={(e) => {
                    changeAmount(e.target.value);
                }}/>
                <Button className='mt-3 mb-3' onClick={() => {
                    if ( typeof(0.25 * amount) === typeof(1) ){
                        return changeAmt(0.25 * amount);
                    }
                }} >
                    Convert
                </Button>
            </Form>
            <h6>Your zaakat: {zakat}</h6>
            </Container>
        </Container>
    )
}