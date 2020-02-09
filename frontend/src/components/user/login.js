import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { trackPromise } from 'react-promise-tracker';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            validUsername: false,
            invalidUsername: false,
            validPassword: false,
            invalidPassword: false
        }

        // bind external functions
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    render() {
        return (
            <Form style={{
                width: '60%',
                marginTop: '150px'
            }}>
                <Form.Group>
                    <Form.Control
                        type='username' 
                        placeholder='Username' 
                        style={{ borderRadius: '1rem', borderColor: 'grey' }}
                        isValid={this.state.validUsername}
                        isInvalid={this.state.invalidUsername}

                        maxLength={15}
                        value={this.state.username}
                        onChange={this.updateUsername}
                        onKeyPress={this.handleKeyPress}
                    />
                    <Form.Control.Feedback type='invalid' style={{ fontSize: '13px' }}>
                        Invalid username.
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group>
                    <Form.Control 
                        type='password' 
                        placeholder='Password' 
                        style={{ borderRadius: '1rem', borderColor: 'grey' }}
                        autoComplete='off'
                        isValid={this.state.validPassword}
                        isInvalid={this.state.invalidPassword}

                        maxLength={64}
                        value={this.state.password}
                        onChange={this.updatePassword}
                        onKeyPress={this.handleKeyPress}
                    />
                    <Form.Control.Feedback type='invalid' style={{ fontSize: '13px' }}>
                        Invalid password.
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group style={{ marginTop: '35px' }}>
                    <Button
                        variant='dark' 
                        type='button'
                        style={{
                            borderRadius: '1rem',
                            fontWeight: 'bold',
                            float: 'left',
                            fontSize: '14px',
                            width: '100px'
                        }}

                        onClick={this.submitForm}
                    >
                        Submit
                    </Button>

                    <Button
                        variant='dark' 
                        type='button'
                        style={{
                            borderRadius: '1rem',
                            fontWeight: 'bold',
                            float: 'right',
                            fontSize: '14px',
                            width: '100px'
                        }}

                        onClick={this.props.switchPage}
                    >
                        Register
                    </Button>
                </Form.Group>
            </Form>
        );
    }

    handleKeyPress(event) {
        if (event.key == 'Enter') {
            this.submitForm();
        }
    }

    submitForm() {
        if (this.state.validUsername && this.state.validPassword) {
            trackPromise(
                this.props.context.GET('user/login/', {
                    'username': this.state.username,
                    'password': this.state.password
                })
                .then((data) => {
                    if (!data) this.setErrorState();
                    else {
                        this.props.context.updateUser({
                            id: data.id,
                            username: data.username,
                            email: data.email
                        });
                    }
                })
                .catch((err) => {
                    this.setErrorState();
                })
            );
        }
    }

    setErrorState() {
        this.setState({
            username: '',
            password: '',
            validUsername: false,
            invalidUsername: true,
            validPassword: false,
            invalidPassword: true
        });
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

export default LoginForm;
