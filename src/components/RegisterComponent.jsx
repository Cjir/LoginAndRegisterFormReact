import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class Register extends Component {

    render() {
        return (
            <div className="container">
                <Form>
                    <FormGroup>
                        <Label for="userPassword">First Name</Label>
                        <Input type="password" name="password" id="userPassword" placeholder="userPassword" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword">Last Name</Label>
                        <Input type="password" name="password" id="userPassword" placeholder="userPassword" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input type="email" name="email" id="userEmail" placeholder="userEmail" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userEmail"> Confirm Email</Label>
                        <Input type="email" name="email" id="userEmail" placeholder="userEmail" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword">Password</Label>
                        <Input type="password" name="password" id="userPassword" placeholder="userPassword" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword"> Confirm Password</Label>
                        <Input type="password" name="password" id="userPassword" placeholder="userPassword" />
                    </FormGroup>
                </Form>

                <Button type="submit" className="btn">
                    <Link to="/login">Login</Link>
                </Button>
                <Button className="btn">
                    <Link to="/register">Register</Link>
                </Button>
            </div>
        )
    }
}

export default Register;
