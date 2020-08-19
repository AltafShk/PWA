import React, {Component} from 'react';
import { Container, Form, Label, FormGroup, Input, Row, Col, Button } from 'reactstrap';
import firebase from 'firebase';


class Signup extends Component {

    state = {
        name: "",
        password: "",
        confpassword: "",
        email: "",
        address: "",
        city: "",
        country: "",
        phone: "",
        subs: false,
        profession: "",
        gender: "",
        dob: ""
    }





    submitHandler = event => {
        const {name, password, confpassword, email, address, city, country, phone, subs, dob, profession, gender} = this.state
        event.preventDefault();
        // console.log(name);
        // console.log(email);
        // console.log(dob)
        // console.log(password);
        // console.log(phone)
        // console.log(subs)
        // console.log(gender)

        var database = firebase.database();

        firebase.auth().createUserWithEmailAndPassword(email, password)
        
        .then(function(res){
            console.log('res', res)
            var uid = res.user.uid
            firebase.database().ref('users/' + uid).set({
                username: name,
                email: email,
                address: address,
                dob: dob,
                city: city,
                country: country,
                phone: phone,
                subs: subs,
                profession: profession,
                gender: gender
              });
        })

        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
          });

          //TODO: Route to home
          
        
    }


    render(){

        const {name, password, confpassword, email, address, city, country, phone, subs, dob, profession, gender} = this.state

    return (


        

        <React.Fragment>
        <Container fluid>

            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "bts-txt">USER SIGN UP</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../images/su-img-1.png')}/>
                </Col> 
        
            </Row>

        </Container>
        
        <Container>

            <Row>
                <Col xs='12' md='6'>
                    <Form >
                        <FormGroup>
                            <Label for='name'>
                                Name
                            </Label>
                            <Input type='text' name='name' id='name' placeholder='Enter Your Name' value = {name} onChange = {e => this.setState({name: e.target.value})} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>
                                Password
                            </Label>
                            <Input type='password' name='password' id='password' placeholder='Enter Password' value = {password} onChange = {e => this.setState({password: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='confirmPassword'>
                                Password
                            </Label>
                            <Input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm Password' value = {confpassword} onChange = {e => this.setState({confpassword: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email" value = {email} onChange = {e => this.setState({email: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" name="address" id="address" placeholder="Enter your Address" value = {address} onChange = {e => this.setState({address: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="text" name="city" id="city" placeholder="Enter your city" value = {city} onChange = {e => this.setState({city: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="country">Country</Label>
                            <Input type="text" name="country" id="country" placeholder="Enter your country" value = {country} onChange = {e => this.setState({country: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='number'>
                                Phone No.
                            </Label>
                            <Input type='phone' name='number' id='number' placeholder='Enter your number' value = {phone} onChange = {e => this.setState({phone: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='profession'>
                                Profession
                            </Label>
                            <Input type='text' name='profession' id='profession' placeholder='Enter your profession' value = {profession} onChange = {e => this.setState({profession: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='DOB'>
                                Date of Birth
                            </Label>
                            <Input type='date' name='DOB' id='DOB' value = {dob} onChange = {e => this.setState({dob: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="gender">Select</Label>
                            <Input type="select" name="gender" id="gender" value = {gender} onChange = {e => this.setState({gender: e.target.value})}>
                                <option value = "male">Male</option>
                                <option value = "female">Female</option>
                            </Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" checked = {this.state.subs ? true : false} onChange = {e => this.setState({subs: !subs})}/>{' '}
                            Subscribe to the newsletter
                            </Label>
                        </FormGroup>
                        <Button onClick={(e) => this.submitHandler(e)} type='submit' className='mr-auto'>Sign Up</Button>
                    </Form>
                </Col>
            </Row>
            
        </Container>
        </React.Fragment>
    );
    }
};


export default Signup;