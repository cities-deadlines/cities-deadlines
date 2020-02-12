import React, { Component } from 'react';

import {
    RightModulePage, 
    RightModule
} from '../modules/right-module';
import MainForm from './main';
import OwnedForm from './owned';
import TrackedForm from './tracked';
import PropertyForm from './property';

class HomeModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousPage: 'Home',
            currentPage: 'Home'
        }

        // create refs for home forms
        this.mainForm = React.createRef();
        this.ownedForm = React.createRef();
        this.trackedForm = React.createRef();
        this.propertyForm = React.createRef();

        // bind external functions
        this.openOwnedPage = this.openOwnedPage.bind(this);
        this.closeOwnedPage = this.closeOwnedPage.bind(this);
        this.openTrackedPage = this.openTrackedPage.bind(this);
        this.closeTrackedPage = this.closeTrackedPage.bind(this);
        this.openPropertyPage = this.openPropertyPage.bind(this);
        this.closePropertyPage = this.closePropertyPage.bind(this);
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
                <RightModulePage 
                    ref={this.mainForm}
                    visible={true}
                >

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

                {/* property page */}
                <RightModulePage 
                    ref={this.propertyForm}
                    visible={false}
                >

                    <PropertyForm 
                        closePropertyPage={this.closePropertyPage}
                    />

                </RightModulePage>
            </RightModule>
        );
    }

    openOwnedPage() {
        this.setState({ currentPage: 'Owned Properties' });
        this.ownedForm.current.toggleModulePage();
    }

    closeOwnedPage() {
        this.setState({ currentPage: 'Home' });
        this.ownedForm.current.toggleModulePage();
    }

    openTrackedPage() {
        this.setState({ currentPage: 'Tracked Properties' });
        this.trackedForm.current.toggleModulePage();
    }

    closeTrackedPage() {
        this.setState({ currentPage: 'Home' });
        this.trackedForm.current.toggleModulePage();
    }

    openPropertyPage(previousPage) {
        this.setState({ 
            currentPage: 'Property',
            previousPage: previousPage
        });
        this.propertyForm.current.toggleModulePage();
    }

    closePropertyPage() {
        this.setState({ currentPage: this.state.previousPage });
        this.propertyForm.current.toggleModulePage();
    }
}

export default HomeModule;