import React, { Component } from 'react';

class RightModuleContainer extends Component {
    render() {
        return (
            <div style={{
                height: '100%',
                width: '100%'
            }}>
                {this.props.children}
            </div>
        );
    }
}

class RightModuleTemplate extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',

                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: '#add8e6'
            }}> 

                Right Module Template

            </div>
        );
    }
}

export { RightModuleTemplate, RightModuleContainer };