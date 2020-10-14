import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
                <Button type="submit" className="btn">Login</Button>
                <Button className="btn">Register</Button>
            </div>
        )
    }
}

export default Login;
