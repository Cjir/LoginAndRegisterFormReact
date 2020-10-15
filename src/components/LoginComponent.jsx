import React, { Component } from 'react';
import { AUTH_TOKEN } from '../constants'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        login: true, // switch between Login and SignUp
        email: '',
        password: '',
        name: '',
      }

    render() {

        const { login, email, password, name } = this.state

        return (
            <div className="container">
                <Form>
                    <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input type="text" value={email} onChange={e => this.setState({ email: e.target.value })} id="userEmail" placeholder="your email address" />
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

    
  _confirm = async () => {
    // ... you'll implement this 🔜
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login;
