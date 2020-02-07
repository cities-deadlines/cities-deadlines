import React, { Component } from 'react';

import LoginModule from './login';
import RegisterModule from './register';

class UserModule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                height: '100%',
                width: '100%'
            }}>
                
                <RegisterModule />

                {/* <LoginModule id='login-module' /> */}
            </div>
        );
    } 
}

export default UserModule;