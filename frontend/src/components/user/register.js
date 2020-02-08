import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class RegisterForm extends Component {
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
                            Email
                        </Form.Label>
                        <Form.Control type='email' placeholder='Email' />
                    </Form.Group>

                    <Form.Group
                        style={{
                            marginTop: '-5px'
                        }}
                    >
                        <Form.Label 
                            style={{
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }}
                        >
                            Username
                        </Form.Label>
                        <Form.Control type='username' placeholder='Username' />
                    </Form.Group>

                    <Form.Group
                        style={{
                            marginTop: '-5px'
                        }}
                    >
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
}

export default RegisterForm;