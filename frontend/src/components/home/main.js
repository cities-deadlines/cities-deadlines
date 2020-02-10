import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { trackPromise } from 'react-promise-tracker';

class MainForm extends Component {
    constructor(props) {
        super(props);

        // bind external functions
        this.signOut = this.signOut.bind(this);
    }

    render() {
        return (
            <>
                <div>
                    Home Module
                </div>
                <Button
                    variant='dark'
                    type='button'
                    style={{ marginTop: '30px' }}
                    onClick={this.signOut}
                >
                    Sign Out
                </Button>
            </>
        );
    }

    signOut() {
        trackPromise(
            this.props.context.GET('user/signout/', {})
            .then((data) => {
                this.props.context.updateUser(null);
            })
            .catch((err) => {})
        );
    }
}

export default MainForm;