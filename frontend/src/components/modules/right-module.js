import React, { Component } from 'react';

class RightModule extends Component {
    render() {
        return (
            <div style={{
                position: 'relative',
                height: '100%',
                width: '100%'
            }}>
                {this.props.children}
            </div>
        );
    }
}

class RightModulePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        }
    }

    toggleModulePage() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',

                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: 'lightgrey',
                
                borderLeftColor: 'black',
                borderLeftWidth: '1px',
                borderLeftStyle: 'solid',

                /* sliding animation */
                transform: `translate(${this.state.visible ? 0 : 100}%, 0)`,
                transition: 'transform 0.5s'
            }}> 
                {this.props.children}
            </div>
        );
    }
}

export { RightModulePage, RightModule };