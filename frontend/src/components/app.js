import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        fetch('user/login', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                username: data.username,
                email: data.email,
                password: data.password
            });
        });
    }

    render() {
        return (
            <>
                <div>Username: {this.state.username}</div>
                <div>Email: {this.state.email}</div>
                <div>Password: {this.state.password}</div>
            </>
        );
    }
}

export default App;
render(<App />, document.getElementById("app"));