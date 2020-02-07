import React, { Component } from "react";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        // set functions from parents
        this.switchPage = this.props.switchPage;
    }

    render() {
        return (
            <div> 
                Login Module
            </div>
        );
    }
}

export default LoginForm;
