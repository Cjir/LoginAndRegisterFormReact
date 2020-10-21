import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { AUTH_TOKEN } from '../constants'

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

// Mutation Type
const SIGNUP_MUTATION = gql`
        mutation SignupMutation($email: String!, $password: String!, $name: String!) {
          signup(email: $email, password: $password, name: $name) {
            token
          }
        }
      `

const LOGIN_MUTATION = gql`
        mutation LoginMutation($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token
          }
        }
      `

class Login extends Component {
    state = {
        login: true, // switch between Login and SignUp
        email: '',
        password: '',
        name: '',
    }

    render() {

        // Display Component
        const { login, email, password, name } = this.state
        return (
            <Container className="mt-3">
                <Row>
                    <Col sm={6} className="mx-auto">
                        <h2 className="text-center">{login ? 'Login' : 'Sign Up'}</h2>
                        {/* Login Form */}
                        <Form>
                            <FormGroup>
                                {/* Name For Sign Up*/}
                                {!login && (
                                    <Label>Your Name</Label>
                                )}
                                {!login && (
                                    <Input
                                        value={name}
                                        onChange={e => this.setState({ name: e.target.value })}
                                        type="text"
                                    />
                                )}
                                {/* Active Email For Login */}
                                <Label>Your Email Address</Label>
                                <Input
                                    value={email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                    type="text"
                                />
                                {/* Active Password For Login */}
                                <Label>Password</Label>
                                <Input
                                    value={password}
                                    onChange={e => this.setState({ password: e.target.value })}
                                    type="password"
                                />
                            </FormGroup>
                        </Form>


                        <Form>
                            <FormGroup className="text-center">
                                {/* Button Switch Login to Sign Up */}
                                <Mutation
                                    mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                                    variables={{ email, password, name }}
                                    onCompleted={data => this._confirm(data)}
                                >
                                    {mutation => (
                                        <Button outline className="m-2" size="small" onClick={mutation}>
                                            {login ? 'login' : 'signup'}
                                        </Button>
                                    )}
                                </Mutation>
                                <Button
                                    outline
                                    className="m-2"
                                    size="small"
                                    onClick={() => this.setState({ login: !login })}
                                >
                                    {login
                                        ? 'need an account?'
                                        : 'already a user?'}
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

    _confirm = async data => {
        const { token } = this.state.login ? data.login : data.signup
        this._saveUserData(token)
        this.props.history.push(`/`)
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default Login;
