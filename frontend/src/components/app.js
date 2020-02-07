import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserModule from './user';

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

                {/* module container (page) */}
                <div id='module-container' style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%'
                }}>
                    
                    {/* left module container */}
                    <div id='left-module-container' style={{
                        position: 'absolute',
                        left: '0',
                        width: '70%',
                        height: '100%'
                    }}>

                    </div>

                    {/* right module container */}
                    <div id='right-module-container' style={{
                        position: 'absolute',
                        right: '0',
                        width: '30%',
                        height: '100%'
                    }}>

                        <UserModule/>

                    </div>

                </div>
            </SessionContext.Provider>
        );
    }
}

// app session context
const SessionContext = React.createContext({
    user: null
});

export default App;
render(<App />, document.getElementById("app"));