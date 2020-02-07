import React, { Component } from 'react';

import LoginModule from './login';
import RegisterModule from './register';
import { 
    RightModuleTemplate, 
    RightModuleContainer 
} from '../modules/right-module';

class UserModule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RightModuleContainer>

                <RightModuleTemplate />

                {/* <LoginModule id='login-module' /> */}
                
            </RightModuleContainer>
        );
    } 
}

export default UserModule;