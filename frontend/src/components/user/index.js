import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import LoginForm from './login';
import RegisterForm from './register';
import {
    RightModulePage, 
    RightModule
} from '../modules/right-module';

import LogoIcon from './../../icons/logo-2.png'

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

                {/* page banner */}
                <div style={{
                    display: 'flex',
                    position: 'absolute',
                    zIndex: 1,

                    justifyContent: 'center',
                    alignItems: 'center',

                    width: '100%',
                    height: '7%',

                    backgroundColor: 'black'
                }}> 
                    <h4 
                        style={{ 
                            color: 'white',
                            marginTop: '2%',
                            fontWeight: 'bolder'
                        }}
                    >
                        {(this.state.currentPage == 'login') ? 'Login' : 'Register'}
                    </h4>
                </div>

                {/* login form */}
                <RightModulePage 
                    ref={this.loginForm} 
                    visible={true}
                >

                    {/* website logo */}
                    <Image 
                        src={LogoIcon} 
                        alt={'Webiste Logo'} 
                        style={{
                            position: 'absolute',
                            top: '12%',
                            width: '450px'
                        }}
                    />

                    <LoginForm 
                        switchPage={this.switchPage}
                    />
                    
                </RightModulePage>

                {/* register form */}
                <RightModulePage 
                    ref={this.registerForm} 
                    visible={false}
                >

                    {/* website logo */}
                    <Image 
                        src={LogoIcon} 
                        alt={'Webiste Logo'} 
                        style={{
                            position: 'absolute',
                            top: '12%',
                            width: '450px'
                        }}
                    />

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