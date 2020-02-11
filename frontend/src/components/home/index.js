import React, { Component } from 'react';

import {
    RightModulePage, 
    RightModule
} from '../modules/right-module';
import MainForm from './main';
import OwnedForm from './owned';
import TrackedForm from './followed';
import PropertyForm from './property';

class HomeModule extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage: 'Home'
        }
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

                {/* main page */}
                <RightModulePage visible={true}>

                    <MainForm />

                </RightModulePage>

                {/* followed page */}
                <RightModulePage visible={false}>

                    <TrackedForm />

                </RightModulePage>

                {/* owned page */}
                <RightModulePage visible={false}>

                    <OwnedForm />

                </RightModulePage>

                {/* property page */}
                <RightModulePage visible={false}>

                    <PropertyForm />

                </RightModulePage>
            </RightModule>
        );
    }
}

export default HomeModule;