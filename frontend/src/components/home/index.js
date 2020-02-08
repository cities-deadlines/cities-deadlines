import React, { Component } from 'react';

import {
    RightModulePage, 
    RightModule
} from '../modules/right-module';
import MainForm from './main';

class HomeModule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RightModule>
                <RightModulePage visible={true}>

                    {/* home main form */}
                    <MainForm />

                </RightModulePage>
            </RightModule>
        );
    }
}

export default HomeModule;