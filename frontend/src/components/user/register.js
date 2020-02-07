import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        // set functions from parents
        this.switchPage = this.props.switchPage;
    }

    render() {
        return (
            <div> 
                Register Module
            </div>
        );
    }
}

export default RegisterForm;