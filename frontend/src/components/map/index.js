import React, { Component } from "react";
//import ReactDOM from 'react-dom';

class MapModule extends Component {
    constructor(props) {
        super(props);
        console.log("Hello world");
        console.log("Reeee");
    }

    render() {
        return (
            <canvas id='mapCanvas' style={{
                right: '0',
                width: '100%',
                height: '100%'
            }}></canvas>
        );
    }
}

export default MapModule;