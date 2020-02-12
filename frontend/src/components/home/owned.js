import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class OwnedForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        top: '7%',
                        height: '83.5%',
                        width: '100%',
                        flexDirection: 'column',
                        overflowY: 'hidden',

                        borderBottomColor: 'gray',
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                    }}
                >
                    <div 
                        style={{
                            height: '100%',
                            overflowY: 'scroll'
                        }}
                    >
                        
                        <OwnedPropertyEntry property={{ tier: 5, name: 'Alex\'s First Property', value: '$5' }} />
                        <OwnedPropertyEntry property={{ tier: 5, name: 'Alex\'s Second Property', value: '$20' }} />
                        <OwnedPropertyEntry property={{ tier: 5, name: 'Alex\'s Third Property', value: '$1,000,000' }} />

                    </div>
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
                    
                    onClick={this.props.closeOwnedPage}
                >
                    Back
                </Button>
            </>
        )
    }
}

class OwnedPropertyEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }

        // bind external functions
        this.onHover = this.onHover.bind(this);
        this.offHover = this.offHover.bind(this);
    }

    render() {

        // hover style
        var hoverColor = '#dcdcdc';
        if (this.state.hover) hoverColor = '#f2f2f2';

        return (
            <div
                onMouseEnter={this.onHover} 
                onMouseLeave={this.offHover}

                style={{
                    position: 'relative',
                    display: 'flex',
                    width: '100%',
                    height: '70px',
                    justifyContent: 'center',
                    alignItems: 'center',

                    cursor: 'pointer',

                    backgroundColor: hoverColor,
                    borderBottomColor: 'gray',
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid'
                }}
            >
                <div 
                    style={{
                        position: 'absolute',
                        left: '15px',
                        fontSize: '15px'
                    }}
                >
                    <b>Tier {this.props.property.tier}</b>
                </div>

                <div
                    style={{
                        fontSize: '14px'
                    }}
                >
                    {this.props.property.name}
                </div>

                <div 
                    style={{
                        position: 'absolute',
                        right: '15px',
                        fontSize: '15px'
                    }}
                >
                    <i>{this.props.property.value}</i>
                </div>
            </div>
        );
    }

    onHover() {
        this.setState({ hover: true });
    }

    offHover() {
        this.setState({ hover: false });
    }
}

export default OwnedForm;