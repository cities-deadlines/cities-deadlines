import React, { Component } from 'react';

import LoginForm from './login';
import RegisterForm from './register';
import {
    RightModulePage, 
    RightModule
} from '../modules/right-module';

class UserModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'login'
        }

        // create refs for user forms
        this.loginForm = React.createRef();
        this.registerForm = React.createRef();

        // bind external functions
        this.switchPage = this.switchPage.bind(this);
    }

    render() {
        return (
            <RightModule>

                {/* login module */}
                <RightModulePage 
                    ref={this.loginForm} 
                    visible={true}
                >

                    <LoginForm 
                        switchPage={this.switchPage}
                    />
                    
                </RightModulePage>

                {/* register module */}
                <RightModulePage 
                    ref={this.registerForm} 
                    visible={false}
                >

                    <RegisterForm 
                        switchPage={this.switchPage}
                    />

                </RightModulePage>

            </RightModule>
        );
    } 

    switchPage() {
        if (this.state.currentPage == 'login') {
            this.registerForm.current.toggleModulePage();
            this.setState({ currentPage: 'register' });
        }
        else if (this.state.currentPage == 'register') {
            this.registerForm.current.toggleModulePage();
            this.setState({ currentPage: 'login' });
        }   
    }
}

export default UserModule;