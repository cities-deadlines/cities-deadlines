import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: true
        }

        // set functions from parents
        this.switchPage = this.props.switchPage;

        // bind external functions
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
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
                            Username
                        </Form.Label>
                        <Form.Control 
                            type='username' 
                            placeholder='Username' 

                            maxLength={15}
                            value={this.state.username}
                            onChange={this.updateUsername}
                        />
                    </Form.Group>

                    <Form.Group 
                        style={{
                            marginTop: '-5px'
                        }}
                    >
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

                            maxLength={64}
                            value={this.state.password}
                            onChange={this.updatePassword}
                        />
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
                        >
                            Submit
                        </Button>
                    </Form.Group>

                    <Form.Group>
                        <Button
                            variant='dark' 
                            type='button'
                            size="sm"
                            style={{
                                width: '100%',
                                fontWeight: 'bold'
                            }}

                            onClick={this.switchPage}
                        >
                            Register
                        </Button>
                    </Form.Group>
                </Form>
            </>
        );
    }

    updateUsername(event) {
        const username = event.target.value;
        if (username.length < 3 || username.match(/^[a-z0-9_-]{3,15}$/i)) {
            this.setState({
                username: username
            });
        }
    }

    updatePassword(event) {
        if (event.target.value.match(/^[a-z0-9_-]{3,15}$/i)) {
            this.setState({
                password: event.target.value
            });
        }
    }
}

export default LoginForm;
