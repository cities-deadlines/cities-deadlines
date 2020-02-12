import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

class NotificationsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div 
                style={{
                    display: 'flex',
                    height: '100%',
                    width: '80%',
                    flexDirection: 'column',
                    borderColor: 'gray',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderRadius: '5px',
                    overflowY: 'hidden'
                }}
            >

                {/* notifications banner */}
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        height: '40px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '15px',
                
                        backgroundColor: '#f2f2f2',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        borderBottomColor: 'gray',
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                    }}
                >   
                    <b>Recent Transactions</b>
                </div>

                <div 
                    style={{
                        height: '100%',
                        overflowY: 'scroll'
                    }}
                >
                    <NotificationEntry new={true} time='9h' message='Test notification 1' />
                    <NotificationEntry new={true} time='10h' message='Test notification 2' />
                    <NotificationEntry new={true} time='11h' message='Test notification 3' />
                    <NotificationEntry new={false} time='14h' message='Test notification 4' />
                    <NotificationEntry new={true} time='23h' message='Test notification 5' />
                    <NotificationEntry new={true} time='1d' message='Test notification 6' />
                    <NotificationEntry new={false} time='1d' message='Test notification 7' />
                    <NotificationEntry new={false} time='3d' message='Test notification 8' />
                    <NotificationEntry new={false} time='1w' message='Test notification 9' />
                    <NotificationEntry new={false} time='1w' message='Test notification 10' />
                    <NotificationEntry new={false} time='1w' message='Test notification 11' />
                </div>
            </div>
        );
    }
}

class NotificationEntry extends Component {
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
                    height: '50px',
                    justifyContent: 'center',
                    alignItems: 'center',

                    cursor: 'pointer',

                    backgroundColor: hoverColor,
                    borderBottomColor: 'gray',
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid'
                }}
            >
                {this.props.new && (
                    <div 
                        style={{
                            position: 'absolute',
                            left: '13px',
                            width: '9px',
                            height: '9px',
                            backgroundColor: '#5367B5',
                            borderRadius: '50%'
                        }} 
                    />
                )}

                <div
                    style={{
                        fontSize: '13px'
                    }}
                >
                    {this.props.message}
                </div>

                <div 
                    style={{
                        position: 'absolute',
                        right: '11px',
                        fontSize: '11px'
                    }}
                >
                    <i>{this.props.time} ago</i>
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

export default NotificationsList;