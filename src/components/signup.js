import React from 'react';
import { Container, Form, Label, FormGroup, Input, Row, Col, Button } from 'reactstrap';

export default function SignUp () {
    const handleSubmit = (v) => {
        v.preventDefault();
        console.log(v);
        alert(v.target);
    }
    return (
        <Container>
            <Row>
                <Col xs='12' md='6'>
                    <Form onSubmit={(values) => handleSubmit(values)}>
                        <FormGroup>
                            <Label for='name'>
                                Name
                            </Label>
                            <Input type='text' name='name' id='name' placeholder='Enter Your Name'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>
                                Password
                            </Label>
                            <Input type='password' name='password' id='password' placeholder='Enter Password'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='confirmPassword'>
                                Password
                            </Label>
                            <Input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm Password'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" name="address" id="address" placeholder="Enter your Address" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="text" name="city" id="city" placeholder="Enter your city" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="country">Country</Label>
                            <Input type="text" name="country" id="country" placeholder="Enter your country" />
                        </FormGroup>
                        <FormGroup>
                            <Label for='number'>
                                Phone No.
                            </Label>
                            <Input type='phone' name='number' id='number' placeholder='Enter your number'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='profession'>
                                Profession
                            </Label>
                            <Input type='text' name='profession' id='profession' placeholder='Enter your profession' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='DOB'>
                                Date of Birth
                            </Label>
                            <Input type='date' name='DOB' id='DOB'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="gender">Select</Label>
                            <Input type="select" name="gender" id="gender">
                                <option>Male</option>
                                <option>Female</option>
                            </Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" />{' '}
                            Subscribe to the newsletter
                            </Label>
                        </FormGroup>
                        <Button onClick={(e) => e.preventDefault()} type='submit' className='mr-auto'>Sign Up</Button>
                    </Form>
                </Col>
            </Row>
            
        </Container>
    );
};