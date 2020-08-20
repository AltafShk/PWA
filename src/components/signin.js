import React, {Component} from 'react';
import { Container, Form, Label, FormGroup, Input, Row, Col, Button } from 'reactstrap';
import firebase from 'firebase';
import FireSignIn from './firebase-signin'
import { Link, Redirect } from 'react-router-dom';




class SignIn extends Component {

    state = {
        password: "",
        email: "",
    }



    submitHandler = event => {
        const {password, email} = this.state
        event.preventDefault();
    

        var database = firebase.database();


        firebase.auth().signInWithEmailAndPassword(email, password)
        
        .then(function(res){
            window.location.assign("/")
            
        })
        
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            alert(errorMessage)
          });


          
          //TODO: Route to home
          
        
    }



    render(){

        if (this.state.signedIn == true){
            return(
                <Redirect to = "/"></Redirect>
            )
        }


        const {password, email} = this.state

        // var user = firebase.auth().currentUser;
        // console.log(user)
        // if (user != null) {
            
        //     var uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
        //                      // this value to authenticate with your backend server, if
        //                      // you have one. Use User.getToken() instead.
        //   }

        //   console.log(uid)

        //   var starCountRef = firebase.database().ref('users/' + "1eTEjQ9Lv6cwrttGobWgpUunbJ62");
        //     starCountRef.on('value', function(snapshot) {
        //     console.log(snapshot.val());
        //     });


    return (


        <React.Fragment>
        <Container fluid>

            <Row>
                <Col  md={{size: 6}} sm = {{size: 12}} style = {{backgroundColor: "#e50000"}}>
                    <p className = "bts-txt">USER SIGN IN</p>
                </Col> 

                <Col  md={{size: 6}} sm = {{size: 12}} style = {{padding: "0px"}}>
                <img className = "img-responsive bts-img-1" src={require('../images/si-img-1.png')}/>
                </Col> 
        
            </Row>

        </Container>

        <Container>

        <Row>
                <Col xs='12' md='6'>
                    <Form >
                        
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email" value = {email} onChange = {e => this.setState({email: e.target.value})}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for='password'>
                                Password
                            </Label>
                            <Input type='password' name='password' id='password' placeholder='Enter Password' value = {password} onChange = {e => this.setState({password: e.target.value})}/>
                        </FormGroup>
                        
                        <Button onClick={(e) => this.submitHandler(e)} type='submit' className='mr-auto'>SIGN IN</Button>
                        
                        </Form>
                    </Col>
                </Row>


                <Row className = "mt-5">
                <p>Don't have an account yet?</p>
                </Row>

                <Row>
                <Link to = "sign-up"><Button>Click here to Sign Up</Button></Link>
                </Row>    

        </Container>

        
        

        
        </React.Fragment>
    );
    }
};


export default SignIn;