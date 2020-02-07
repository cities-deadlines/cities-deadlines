import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SessionContext from './session'
import UserModule from './user'
import './styles.css'

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

        // create session value
        const value = {
            user: this.state.user,
            updateUser: this.updateUser
        }

        return (
            <SessionContext.Provider value={value}>
                <div id='module-container'>
                    
                    {/* left module container */}
                    <div id='left-module'>

                    </div>

                    {/* right module container */}
                    <div id='right-module'>
                        <UserModule/>
                    </div>

                </div>
            </SessionContext.Provider>
        );
    }
}

export default App;
render(<App />, document.getElementById("app"));