import React, { Component } from "react";
import Konva from 'konva';

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

    drawAsset(row, col, type, layer) {
        // how many cases do we have here?
        // we have the building case, which is if both indexes are even

        // draw a skyscraper
        if (row % 2 == 0 && col % 2 == 0) {
            var skyscraperModel = new Konva.Rect({
                x: 200 * (col / 2),
                y: 200 * (row / 2),
                fill: 'gray',
                height: 160,
                width: 160
            });
            layer.add(skyscraperModel);
        }
    }

    populateMap() {
        var map = [['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
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
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road']];

        var layer = new Konva.Layer();
        this.stage.add(layer);

        var i = 0;
        for (i = 0; i < map.length; i++) {
            var j = 0;
            for (j = 0; j < map[0].length; j++) {
                this.drawAsset(i, j, map[i][j], layer);
            }
        }

        layer.draw();
    }

    componentDidMount() {
        var width = document.getElementById('map-container').offsetWidth;
        var height = document.getElementById('map-container').offsetHeight;
        this.stage = new Konva.Stage({
            container: 'map-container',
            width: width,
            height: height,
            draggable: true,
            id: "map-konva-layer"
        });

        //var layer = new Konva.Layer();
        //this.stage.add(layer);

        window.addEventListener("resize", function(e) {
            this.stage.height(document.getElementById('map-container').offsetHeight);
            this.stage.width(document.getElementById('map-container').offsetWidth);
        }.bind(this), false);

        //var WIDTH = 3000;
        //var HEIGHT = 3000;
        //var NUMBER = 200;

        // code just to actally generate content; temporary
        /*function generateNode() {
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
        layer.draw();*/

        this.populateMap();
    }
}

export default MapModule;