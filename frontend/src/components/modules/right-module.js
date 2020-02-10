import React, { Component } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

import UserContext from '../user/context';

const RightModule = props => {

    // track loading promise
    const { promiseInProgress } = usePromiseTracker();

    return (
        <>
            {promiseInProgress && (
                <div 
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Loader
                        type='Oval'
                        color='black'
                        height={100}
                        width={100}
                    />
                </div>
            )}
            
            <div style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                filter: promiseInProgress ? 'blur(3px)' : 'blur(0px)'
            }}>
                {props.children}
            </div>
        </>
    );
}

class RightModulePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        }
    }

    toggleModulePage() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',

                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: '#e6e6e6',
                
                borderLeftColor: 'black',
                borderLeftWidth: '1px',
                borderLeftStyle: 'solid',

                /* sliding animation */
                transform: `translate(${this.state.visible ? 0 : 100}%, 0)`,
                transition: 'transform 0.5s'
            }}> 
                <UserContext.Consumer>
                    {value => {
                        return React.Children.map(this.props.children, child => {
                            return React.cloneElement(child, { context: value });
                        });
                    }}
                </UserContext.Consumer>
            </div>
        );
    }
}

export { RightModulePage, RightModule };