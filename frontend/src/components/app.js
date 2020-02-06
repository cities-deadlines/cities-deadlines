import React, { Component } from 'react';
import { render } from 'react-dom';

import SessionContext from './session'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }

        // bind context updater
        this.updateUser = this.updateUser.bind(this);
    }

    updateUser(user) {
        this.setState({
            user: user
        });
    }

    render() {
        const value = {
            user: this.state.user,
            updateUser: this.updateUser
        }

        return (
            <SessionContext.Provider value={value}>
                <div id='left-module'>

                </div>

                <div id='right-module'>

                </div>
            </SessionContext.Provider>
        );
    }
}

export default App;
render(<App />, document.getElementById("app"));