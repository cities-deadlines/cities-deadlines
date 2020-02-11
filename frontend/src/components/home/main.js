import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { trackPromise } from 'react-promise-tracker';

import NotificationsList from './notifications';

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
                <div 
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        width: '80%',
                        height: '56px',
                        top: '10%',

                        justifyContent: 'center',
                        alignItems: 'center',

                        backgroundColor: '#f2f2f2',
                        cursor: 'default',

                        borderRadius: '10px',
                        borderColor: 'gray',
                        borderWidth: '1px',
                        borderStyle: 'solid'
                    }}
                >
                    <div style={{ fontSize: '18px' }}>
                        <b>Balance:</b> {this.state.balance}
                    </div>

                    <Button 
                        variant='dark'
                        type='button'
                        size='sm'
                        style={{
                            position: 'absolute',
                            right: '10px'
                        }}
                    >
                        Add
                    </Button>
                </div>

                <div
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        top: '24%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }} 
                >

                    {/* go to owned properties */}
                    <Button
                        variant='dark'
                        type='button'
                        style={{
                            width: '275px',
                            height: '40px',
                            fontSize: '15px'
                        }}
                    >
                        Your Owned Properties <b style={{ float: 'right' }}>></b>
                    </Button>
                    
                    {/* go to tracked properties */}
                    <Button
                        variant='dark'
                        type='button'
                        style={{
                            width: '275px',
                            marginTop: '20px',
                            height: '40px',
                            fontSize: '15px'
                        }}
                    >    
                        Your Tracked Properties <b style={{ float: 'right' }}>></b>
                    </Button>
                </div>

                {/* notifactions list */}
                <div 
                    style={{ 
                        position: 'absolute',
                        top: '43%',
                        display: 'flex',
                        width: '100%',
                        height: '42%',
                        justifyContent: 'center',
                    }}
                >
                    <NotificationsList />
                </div>

                {/* sign out button */}
                <Button
                    variant='dark'
                    type='button'
                    style={{ 
                        position: 'absolute',
                        bottom: '3%',
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