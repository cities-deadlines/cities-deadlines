import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { validate } from 'email-validator';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            validEmail: false,
            invalidEmail: false,
            validUsername: false,
            invalidUsername: false,
            validPassword: false,
            invalidPassword: false
        }

        // set functions from parents
        this.switchPage = this.props.switchPage;

        // bind external functions
        this.updateEmail = this.updateEmail.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    render() {
        return (
            <>
                <Form style={{
                    width: '65%'
                }}>
                    <Form.Group>
                        <Form.Label 
                            style={{
                                fontWeight: 'bold',
                                fontSize: '15px'
                            }}
                        >
                            Email
                        </Form.Label>
                        <Form.Control 
                            type='email' 
                            placeholder='Email' 
                            isValid={this.state.validEmail}
                            isInvalid={this.state.invalidEmail}

                            maxLength={32}
                            value={this.state.email}
                            onChange={this.updateEmail}
                        />
                        <Form.Control.Feedback type='invalid' style={{ fontSize: '11px' }}>
                            Invalid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label 
                            style={{
                                fontWeight: 'bold',
                                fontSize: '15px'
                            }}
                        >
                            Username
                        </Form.Label>
                        <Form.Control
                            type='username' 
                            placeholder='Username' 
                            isValid={this.state.validUsername}
                            isInvalid={this.state.invalidUsername}

                            maxLength={15}
                            value={this.state.username}
                            onChange={this.updateUsername}
                        />
                        <Form.Control.Feedback type='invalid' style={{ fontSize: '11px' }}>
                            Invalid username.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label 
                            style={{
                                fontWeight: 'bold',
                                fontSize: '15px'
                            }}
                        >
                            Password
                        </Form.Label>
                        <Form.Control 
                            type='password' 
                            placeholder='Password' 
                            autoComplete='off'
                            isValid={this.state.validPassword}
                            isInvalid={this.state.invalidPassword}

                            maxLength={64}
                            value={this.state.password}
                            onChange={this.updatePassword}
                        />
                        <Form.Control.Feedback type='invalid' style={{ fontSize: '11px' }}>
                            Invalid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group>
                        <Button
                            variant='dark' 
                            type='button'
                            size="sm"
                            style={{
                                width: '100%',
                                marginTop: '30px',
                                fontWeight: 'bold'
                            }}

                            onClick={this.submitForm}
                        >
                            Submit
                        </Button>
                    </Form.Group>

                    <Form.Group>
                        <Button
                            variant='dark' 
                            type='button'
                        
                            onClick={this.switchPage}
                            size="sm"
                            style={{
                                width: '100%',
                                fontWeight: 'bold'
                            }}
                        >
                            Back
                        </Button>
                    </Form.Group>
                </Form>
            </>
        );
    }

    submitForm() {
        if (this.state.validEmail && this.state.validUsername
            && this.state.validPassword) {

            fetch('user/register/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'email': this.state.email,
                    'username': this.state.username,
                    'password': this.state.password
                }
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (!data) {
                    this.setState({
                        email: '',
                        username: '',
                        password: '',
                        validEmail: false,
                        invalidEmail: true,
                        validUsername: false,
                        invalidUsername: true,
                        validPassword: false,
                        invalidPassword: true
                    });
                }
            });
        }
    }

    updateEmail(event) {
        const email = event.target.value;
        this.setState({ email: email });
        if (validate(email)) {
            this.setState({
                validEmail: true,
                invalidEmail: false
            });
        }   
        else {
            this.setState({
                validEmail: false,
                invalidEmail: true
            });
        }
    }

    updateUsername(event) {
        const username = event.target.value;
        this.setState({ username: username });
        if (username.match(/^[a-z0-9_-]{3,15}$/i)) {
            this.setState({
                validUsername: true,
                invalidUsername: false
            });
        }   
        else {
            this.setState({
                validUsername: false,
                invalidUsername: true
            });
        }
    }

    updatePassword(event) {
        const password = event.target.value;
        this.setState({ password: password });
        if (password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i)) {
            this.setState({
                validPassword: true,
                invalidPassword: false
            });
        }
        else {
            this.setState({
                validPassword: false,
                invalidPassword: true
            });
        }
    }
}

export default RegisterForm;