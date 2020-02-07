import React, { Component } from 'react';

import LoginModule from './login'
import RegisterModule from './register'

class UserModule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',

                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: '#add8e6'
            }}>

                <LoginModule />

            </div>
        );
    } 
}

export default UserModule;