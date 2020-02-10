import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';
import { trackPromise } from 'react-promise-tracker';

class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 1000000000
        }

        // bind external functions
        this.signOut = this.signOut.bind(this);
    }

    render() {
        return (
            <>

                {/* balance display */}
                <Row >
                    <div 
                        style={{
                            display: 'flex',
                            width: '250px',
                            height: '45px',

                            justifyContent: 'center',
                            alignItems: 'center',

                            backgroundColor: 'white',

                            borderRadius: '10px',
                            borderColor: 'gray',
                            borderWidth: '1px',
                            borderStyle: 'solid'
                        }}
                    >
                        <div>
                            <b>Balance:</b> {this.state.balance}
                        </div>
                    </div>
 
                    <div 
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Button 
                            variant='dark'
                            size='sm'
                            style={{
                                display: 'flex',
                                justifyContent: 'center', alignItems: 'center',
                                marginLeft: '10px'
                            }}
                        >
                            Add
                        </Button>
                    </div>
                </Row>
        

                {/* sign out button */}
                <Button
                    variant='dark'
                    type='button'
                    style={{ 
                        position: 'absolute',
                        bottom: '2%',
                        marginTop: '30px' 
                    }}
                    
                    onClick={this.signOut}
                >
                    Sign Out
                </Button>
            </>
        );
    }

    signOut() {
        trackPromise(
            this.props.context.GET('user/signout/', {})
            .then((data) => {
                this.props.context.updateUser(null);
            })
            .catch((err) => {})
        );
    }
}

export default MainForm;