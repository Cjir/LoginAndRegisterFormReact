import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <Button className="btn" href="./Register">Register</Button>
            </div>
        )
    }
}

export default Register;
