import React, { Component } from 'react';

class LeftModuleContainer extends Component {
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

class LeftModule extends Component {
    constructor(props) {
        super(props);
    }
}

export { LeftModule, LeftModuleContainer };