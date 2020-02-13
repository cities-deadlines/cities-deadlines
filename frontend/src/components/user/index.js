import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import LoginForm from './login';
import RegisterForm from './register';
import {
    RightModulePage, 
    RightModule
} from '../modules/right-module';

import LogoIcon from '../../../img/logo-2.png';

class UserModule extends Component {
    constructor(props) {
        super(props);

        // create refs for user forms
        this.registerForm = React.createRef();

        // bind external functions
        this.switchPage = this.switchPage.bind(this);
    }

    render() {
        return (
            <RightModule>

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
        this.registerForm.current.toggleModulePage(); 
    }
}

export default UserModule;