import React, { Component } from "react";
import Konva from 'konva';
//import ReactDOM from 'react-dom';

class MapModule extends Component {

    constructor(props) {
        super(props);
        this.stage = null;
    }

    render() {
        return (
            <div id="map-container"style={{
                right: '0',
                width: '100%',
                height: '100%'
            }}></div>
        );
    }

    downloadMap() {
        return [['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ]
    }

    componentDidMount() {

        var map = this.downloadMap();

        var width = document.getElementById('map-container').offsetWidth;
        var height = document.getElementById('map-container').offsetHeight;
        this.stage = new Konva.Stage({
            container: 'map-container',
            width: width,
            height: height,
            draggable: true,
            id: "map-konva-layer"
        });

        var layer = new Konva.Layer();
        this.stage.add(layer);

        window.addEventListener("resize", function(e) {
            this.stage.height(document.getElementById('map-container').offsetHeight);
            this.stage.width(document.getElementById('map-container').offsetWidth);
        }.bind(this), false);

        var WIDTH = 3000;
        var HEIGHT = 3000;
        var NUMBER = 200;

        function generateNode() {
            return new Konva.Circle({
                x: WIDTH * Math.random(),
                y: HEIGHT * Math.random(),
                radius: 50,
                fill: 'red',
                stroke: 'black'
            });
        }

        for (var i = 0; i < NUMBER; i++) {
            layer.add(generateNode());
        }
        layer.draw();
    }
}

export default MapModule;