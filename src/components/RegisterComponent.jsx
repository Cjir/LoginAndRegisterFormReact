import React, { Component } from 'react';
import { Button, } from 'reactstrap';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="container">
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
