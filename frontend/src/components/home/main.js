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

                {/* page banner */}
                <div 
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        top: '0',

                        justifyContent: 'center',
                        alignItems: 'center',

                        width: '100%',
                        height: '7%',

                        backgroundColor: 'black'
                    }}
                > 
                    <div 
                        style={{ 
                            color: 'white',
                            fontWeight: 'bolder',
                            fontSize: '19px'
                        }}
                    >
                        Home
                    </div>

                    {/* sign out button */}
                    <Button
                        variant='dark'
                        type='button'
                        size='sm'
                        style={{ 
                            position: 'absolute',
                            right: '15px',
                            borderColor: 'white',
                            backgroundColor: 'black'
                        }}
                        
                        onClick={this.signOut}
                    >
                        Sign Out
                    </Button>
                </div>

                {/* balance display */}
                <div 
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        width: '80%',
                        height: '48px',
                        top: '10%',
                        alignItems: 'center',

                        backgroundColor: '#f2f2f2',
                        cursor: 'default',

                        borderRadius: '5px',
                        borderColor: 'gray',
                        borderWidth: '1px',
                        borderStyle: 'solid'
                    }}
                >
                    <div 
                        style={{ 
                            fontSize: '18px',
                            marginLeft: '25px'
                        }}
                    >
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
                        top: '22%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }} 
                >

                    {/* go to owned properties */}
                    <Button
                        variant='dark'
                        type='button'
                        onClick={this.props.openOwnedPage}
                        style={{
                            width: '275px',
                            height: '40px',
                            fontSize: '15px',
                            borderColor: 'black',
                            backgroundColor: 'black'
                        }}
                    >
                        Owned Properties <b style={{ float: 'right' }}>></b>
                    </Button>
                    
                    {/* go to tracked properties */}
                    <Button
                        variant='dark'
                        type='button'
                        onClick={this.props.openTrackedPage}
                        style={{
                            width: '275px',
                            marginTop: '20px',
                            height: '40px',
                            fontSize: '15px',
                            borderColor: 'black',
                            backgroundColor: 'black'
                        }}
                    >    
                        Tracked Properties <b style={{ float: 'right' }}>></b>
                    </Button>
                </div>

                {/* notifactions list */}
                <div 
                    style={{ 
                        position: 'absolute',
                        top: '40%',
                        display: 'flex',
                        width: '100%',
                        height: '57%',
                        justifyContent: 'center',
                    }}
                >
                    <NotificationsList />
                </div>
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