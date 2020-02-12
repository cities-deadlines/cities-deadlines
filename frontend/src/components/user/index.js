import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import LoginForm from './login';
import RegisterForm from './register';
import {
    RightModulePage, 
    RightModule
} from '../modules/right-module';

import LogoIcon from './../../icons/logo-2.png';

class UserModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'Login'
        }

        // create refs for user forms
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
                        {this.state.currentPage}
                    </h4>
                </div>

                {/* login page */}
                <RightModulePage visible={true}>

                    {/* website logo */}
                    <Image 
                        src={LogoIcon} 
                        draggable={false}
                        alt={'Webiste Logo'} 
                        style={{
                            position: 'absolute',
                            top: '17%',
                            width: '250px'
                        }}
                    />

                    <LoginForm 
                        switchPage={this.switchPage}
                    />
                    
                </RightModulePage>

                {/* register page */}
                <RightModulePage 
                    ref={this.registerForm} 
                    visible={false}
                >

                    {/* website logo */}
                    <Image 
                        src={LogoIcon} 
                        draggable={false}
                        alt={'Webiste Logo'} 
                        style={{
                            position: 'absolute',
                            top: '17%',
                            width: '250px'
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
        if (this.state.currentPage == 'Login') {
            this.registerForm.current.toggleModulePage();
            this.setState({ currentPage: 'Register' });
        }
        else if (this.state.currentPage == 'Register') {
            this.registerForm.current.toggleModulePage();
            this.setState({ currentPage: 'Login' });
        }   
    }
}

export default UserModule;