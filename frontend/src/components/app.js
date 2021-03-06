import React, { Component } from 'react';
import { render } from 'react-dom';
import { trackPromise } from 'react-promise-tracker';

import 'bootstrap/dist/css/bootstrap.min.css';

import UserContext from './user/context';
import UserModule from './user';
import MapModule from './map';
import HomeModule from './home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }

        // bind context updater
        this.updateUser = this.updateUser.bind(this);
        this.GET = this.GET.bind(this);
        this.POST = this.POST.bind(this);
    }

    componentDidMount() {

        // fetch current user
        trackPromise(
            this.GET('user/current/', {})
                .then((data) => {
                    this.updateUser({
                        id: data.id,
                        username: data.username,
                        email: data.email
                    });
                })
                .catch((err) => {})
        );
    }

    render() {

        // create user context value
        const context = {
            user: this.state.user,
            updateUser: this.updateUser,
            GET: this.GET,
            POST: this.POST
        }

        return (
            <UserContext.Provider value={context}>

                {/* module frame (page) */}
                <div id='module-frame' 
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        backgroundColor: '#f2f2f2'
                    }}
                >
                    
                    {/* left module frame */}
                    <div id='left-module-frame' style={{
                        position: 'absolute',
                        left: '0',
                        width: '75%',
                        height: '100%'
                    }}>

                        <MapModule />

                    </div>

                    {/* right module frame */}
                    <div id='right-module-frame' style={{
                        position: 'absolute',
                        right: '0',
                        width: '25%',
                        height: '100%'
                    }}>

                        {this.state.user ? (
                            <HomeModule />
                        ) : (
                            <UserModule />
                        )}

                    </div>
                    
                </div>
            </UserContext.Provider>
        );
    }

    GET(route, headers) {
        return fetch(route, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        })
        .then((res) => {
            if (res.status == 401) {
                this.updateUser(null);
                throw Error();
            }
            return res.json();
        });
    }

    POST(route, headers, body) {
        return fetch(route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: body
        })
        .then((res) => {
            if (res.status == 401) {
                this.updateUser(null);
                throw Error();
            }
            return res.json();
        });
    }

    updateUser(user) {
        this.setState({
            user: user
        });
    }
}

export default App;
render(<App />, document.getElementById("app"));