import React, { Component } from 'react';

import {
    RightModulePage, 
    RightModule
} from '../modules/right-module';
import MainForm from './main';
import OwnedForm from './owned';
import TrackedForm from './tracked';
class HomeModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousPage: 'Home',
            currentPage: 'Home'
        }

        // create refs for home forms
        this.trackedForm = React.createRef();
        this.ownedForm = React.createRef();

        // bind external functions
        this.openTrackedPage = this.openTrackedPage.bind(this);
        this.closeTrackedPage = this.closeTrackedPage.bind(this);
        this.openOwnedPage = this.openOwnedPage.bind(this);
        this.closeOwnedPage = this.closeOwnedPage.bind(this);
    }   

    render() {
        return (
            <RightModule>

                {/* main page */}
                <RightModulePage visible={true}>

                    <MainForm 
                        openOwnedPage={this.openOwnedPage}
                        openTrackedPage={this.openTrackedPage}
                        openPropertyPage={this.openPropertyPage}
                    />

                </RightModulePage>

                {/* tracked page */}
                <RightModulePage 
                    ref={this.trackedForm}
                    visible={false}
                >

                    <TrackedForm 
                        closeTrackedPage={this.closeTrackedPage}
                        openPropertyPage={this.openPropertyPage}
                    />

                </RightModulePage>

                {/* owned page */}
                <RightModulePage 
                    ref={this.ownedForm}
                    visible={false}
                >

                    <OwnedForm 
                        closeOwnedPage={this.closeOwnedPage}
                        openPropertyPage={this.openPropertyPage}
                    />

                </RightModulePage>
            </RightModule>
        );
    }

    openTrackedPage() {
        this.setState({ currentPage: 'Tracked Properties' });
        this.trackedForm.current.toggleModulePage();
    }

    closeTrackedPage() {
        this.setState({ currentPage: 'Home' });
        this.trackedForm.current.toggleModulePage();
    }

    openOwnedPage() {
        this.setState({ currentPage: 'Owned Properties' });
        this.ownedForm.current.toggleModulePage();
    }

    closeOwnedPage() {
        this.setState({ currentPage: 'Home' });
        this.ownedForm.current.toggleModulePage();
    }
}

export default HomeModule;