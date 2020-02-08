import React, { Component } from "react";
//import ReactDOM from 'react-dom';

class MapModule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // <script type="text/javascript" src="./frontend/src/components/map/map-controller.js"></script>
        /*
        <canvas id='mapCanvas' style={{
                right: '0',
                width: '100%',
                height: '100%'
            }}></canvas>
        */
        
        return (
            <div id="map-container"style={{
                right: '0',
                width: '100%',
                height: '100%'
            }}></div>
        );
    }

    componentDidMount() {

        console.log("THIERRY HENRY");
        
        var aScript = document.createElement('script');
        aScript.type = 'text/javascript';
        aScript.src = "https://unpkg.com/konva@4.1.3/konva.min.js";
    
        document.head.appendChild(aScript);

        aScript.onload = function() {

            var width = document.getElementById('map-container').offsetWidth;
            var height = document.getElementById('map-container').offsetHeight;

            console.log(width);
            console.log(height);

            var stage = new Konva.Stage({
                container: 'map-container',
                width: width,
                height: height,
                draggable: true,
                id: "map-konva-layer"
            });

            var layer = new Konva.Layer();
            stage.add(layer);

            function resizeStage() {
                stage.height(document.getElementById('map-container').offsetHeight);
                stage.width(document.getElementById('map-container').offsetWidth);
            }

            window.addEventListener("resize", resizeStage);

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
        };
    }
}

export default MapModule;