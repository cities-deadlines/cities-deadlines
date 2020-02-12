import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TrackedForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>
                    Tracked Properties
                </div>

                {/* back button */}
                <Button
                    variant='dark'
                    type='button'
                    size='sm'
                    style={{ 
                        position: 'absolute',
                        bottom: '3%',
                        marginTop: '30px',
                        borderColor: 'black',
                        backgroundColor: 'black'
                    }}
                    
                    onClick={this.props.closeTrackedPage}
                >
                    Back
                </Button>
            </>
        )
    }
}

export default TrackedForm;