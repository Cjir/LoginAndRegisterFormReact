import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="container">
                <Form>
                    <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input type="email" name="email" id="userEmail" placeholder="userEmail" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword">Password</Label>
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

export default Login;
