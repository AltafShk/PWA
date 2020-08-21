import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, Label, FormGroup, Input, Row, Col, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import axios from 'axios'


class DonateMoney extends Component{

    state = {
        currency: "",
        transactionHint: "",
        store: "",
        terminal: "",
        amount: "",
        customer: "",
        userName: "",
        password: "",
    }


    donateHandler = event => {
        const {currency, transactionHint, store, terminal, amount, customer, userName, password} = this.state;
        event.preventDefault();

        var data = {
            "Registration" : {
             "Currency": "AED",
             "ReturnPath": "https://localhost:3000/home",
             "TransactionHint": "CPT:Y;VCC:Y;",
             "OrderID": "7210055701315195",
             "Store": "0000",
             "Terminal": "0000",
             "Channel": "Web",
             "Amount": "2.00",
             "Customer": "Demo Merchant",
             "OrderName": "Paybill",
             "UserName":"Demo_fY9c",
             "Password":"Comtrust@20182018"
             }
            }

        var headerObject =  {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }

        axios.post('https://demo-ipg.ctdev.comtrust.ae:2443/' , data, headerObject)
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err))
          
        
    }

   
    render(){


        const {currency, transactionHint, store, terminal, amount, customer, userName, password} = this.state;


    return (
        <Container fluid={true}>
            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "dn-txt">DONATE MONEY</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../images/mai-img-1.png')}/>
                </Col> 
        
            </Row>


            <Container>
            <Col xs='12' md='6'>
                    <Form>
                        <FormGroup>
                            <Label for='currency'>
                                Currency
                            </Label>
                            <Input type='text' name='currency' id='currency' placeholder='Choose currency' value = {currency} onChange = {e => this.setState({currency: e.target.value})} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='transactionhint'>
                                Transaction Hint
                            </Label>
                            <Input type='text' name='transactionhint' id='transactionhint' placeholder='Enter Transaction Hint' value = {transactionHint} onChange = {e => this.setState({transactionHint: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='store'>
                                Store
                            </Label>
                            <Input type='text' name='store' id='store' placeholder='Enter store' value = {store} onChange = {e => this.setState({store: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='terminal'>Terminal</Label>
                            <Input type="text" name="email" id='terminal' placeholder="Enter terminal" value = {terminal} onChange = {e => this.setState({terminal: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="amount">Amount</Label>
                            <Input type="text" name="amount" id="amount" placeholder="Enter Amount" value = {amount} onChange = {e => this.setState({amount: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="customer">Customer</Label>
                            <Input type="text" name="customer" id="customer" placeholder="Enter cutomer details" value = {customer} onChange = {e => this.setState({customer: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Enter your username" value = {userName} onChange = {e => this.setState({userName: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>
                                Password
                            </Label>
                            <Input type='password' name='password' id='password' placeholder='Enter your password' value = {password} onChange = {e => this.setState({password: e.target.value})}/>
                        </FormGroup>
                        
                        <Button onClick = {(e) => this.donateHandler(e)} type='submit' className='mr-auto'>Donate Money</Button>
                    </Form>
                </Col>
            </Container>


            


        </Container>
    );
    }
}



export default DonateMoney;