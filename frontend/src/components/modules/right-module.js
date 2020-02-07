import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
        this.state = {
            visible: true
        }
        this.toggleModule = this.toggleModule.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.toggleModule();
        }, 3000)
    }

    toggleModule() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',

                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: '#add8e6',

                /* sliding animation */
                transform: `translate(${this.state.visible ? 0 : 100}%, 0)`,
                transition: 'transform 1s'
            }}> 

                Right Module Template

            </div>
        );
    }
}

export { RightModuleTemplate, RightModuleContainer };