import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        // set functions from parents
        this.switchPage = this.props.switchPage;
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
                                fontSize: '16px'
                            }}
                        >
                            Username
                        </Form.Label>
                        <Form.Control type='email' placeholder='Username' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label 
                            style={{
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }}
                        >
                            Password
                        </Form.Label>
                        <Form.Control 
                            type='password' 
                            placeholder='Password' 
                            autoComplete='off'
                        />
                    </Form.Group>
                    
                    <Form.Group>
                        <Button
                            
                            variant='dark' 
                            type='submit'
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
                            type='submit'
                            size="sm"
                            style={{
                                width: '100%',
                                fontWeight: 'bold'
                            }}
                        >
                            Register
                        </Button>
                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default LoginForm;
