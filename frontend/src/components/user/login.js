import React, { Component } from "react";

class LoginModule extends Component {
    constructor(props) {
        super(props);
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
                Login Module
            </div>
        );
    }
}

export default LoginModule;
