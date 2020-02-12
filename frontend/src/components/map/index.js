import React, { Component } from "react";
import Konva from 'konva';
import { Image } from 'react-bootstrap';

const BUILDING_WIDTH = 160;
const ROAD_WIDTH = BUILDING_WIDTH / 4;
const BLOCK_WIDTH = BUILDING_WIDTH + ROAD_WIDTH;

// import relevant assets
import intersection from '../../../img/4-way-intersection-city-dense.png';
import road from '../../../img/4-lane-road-city-dense.png';
import skyscraper1 from '../../../img/skyscraper-dense-parallax-1.png'
import tripletowers1 from '../../../img/triple-towers-1.png'

class MapModule extends Component {

    constructor(props) {
        super(props);
        this.stage = null;
        this.cityLayer = null
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

    selectAsset(type) {
        if (type == "skyscraper1") {return skyscraper1;}
        else if (type == "tripletowers1") { return tripletowers1; }
    }

    drawBuildingBlock(row, col, type, layer) {
        var imageObj = new window.Image();
        imageObj.src = this.selectAsset(type);
        imageObj.onload = function() {
            var skyscraperModel = new Konva.Rect({
                x: BLOCK_WIDTH * (col / 2),
                y: BLOCK_WIDTH * (row / 2),
                height: BUILDING_WIDTH,
                width: BUILDING_WIDTH,
                fillPatternImage: imageObj,
                fillPatternScaleX: 2,
                fillPatternScaleY: 2
            });
            layer.add(skyscraperModel);
            layer.getContext()._context.imageSmoothingEnabled = false;
            layer.draw();
        };
    }

    drawVerticalRoadBlock(row, col, type, layer) {
        var imageObj = new window.Image();
        imageObj.src = road;
        imageObj.onload = function() {
            var vertRoadModel = new Konva.Rect({
                x: BLOCK_WIDTH * (Math.floor((col / 2)) + 1) - ROAD_WIDTH,
                y: BLOCK_WIDTH * (row / 2),
                width: ROAD_WIDTH,
                height: BUILDING_WIDTH,
                fillPatternImage: imageObj,
                fillPatternScaleX: 2,
                fillPatternScaleY: 2,
                fillPatternRotation: 90
            });
            layer.add(vertRoadModel);
            var ctx = layer.getContext()._context;
            ctx.imageSmoothingEnabled = false;
            layer.draw();
        };
    }

    drawHorizontalRoadBlock(row, col, type, layer) {
        var imageObj = new window.Image();
        imageObj.src = road;
        imageObj.onload = function() {
            var vertRoadModel = new Konva.Rect({
                x: BLOCK_WIDTH * (col / 2),
                y: BLOCK_WIDTH * (Math.floor((row / 2)) + 1) - ROAD_WIDTH,
                width: BUILDING_WIDTH,
                height: ROAD_WIDTH,
                fillPatternImage: imageObj,
                fillPatternScaleX: 2,
                fillPatternScaleY: 2
            });
            layer.add(vertRoadModel);
            var ctx = layer.getContext()._context;
            ctx.imageSmoothingEnabled = false;
            layer.draw();
        };
    }

    drawIntersectionRoadBlock(row, col, type, layer) {
        var imageObj = new window.Image();
        imageObj.src = intersection;
        imageObj.onload = function() {
            var vertRoadModel = new Konva.Rect({
                x: BLOCK_WIDTH * (Math.floor((col / 2)) + 1) - ROAD_WIDTH,
                y: BLOCK_WIDTH * (Math.floor((row / 2)) + 1) - ROAD_WIDTH,
                width: ROAD_WIDTH,
                height: ROAD_WIDTH,
                fillPatternImage: imageObj,
                fillPatternScaleX: 2,
                fillPatternScaleY: 2,
                fillPatternRotation: Math.floor(Math.random() * 4) * 90
            });
            layer.add(vertRoadModel);
            var ctx = layer.getContext()._context;
            ctx.imageSmoothingEnabled = false;
            layer.draw();
        };
    }

    drawAsset(row, col, type, layer) {
        if (row % 2 == 0 && col % 2 == 0) {
            this.drawBuildingBlock(row, col, type, layer);
        } else if (row % 2 == 0 && col % 2 != 0) {
            this.drawVerticalRoadBlock(row, col, type, layer);            
        } else if (row % 2 != 0 && col % 2 == 0) {
            this.drawHorizontalRoadBlock(row, col, type, layer);
        } else {
            this.drawIntersectionRoadBlock(row, col, type, layer);
        }
    }

    populateMap() {
        var map = [['tripletowers1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'tripletowers1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'tripletowers1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'tripletowers1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'tripletowers1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'tripletowers1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
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

        this.cityLayer = new Konva.Layer();
        this.stage.add(this.cityLayer);

        var ctx = this.cityLayer.getContext()._context;
        ctx.imageSmoothingEnabled = false;

        var i = 0;
        for (i = 0; i < map.length; i++) {
            var j = 0;
            for (j = 0; j < map[0].length; j++) {
                this.drawAsset(i, j, map[i][j], this.cityLayer);
            }
        }

        this.cityLayer.draw();
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

        window.addEventListener("resize", function(e) {
            this.stage.height(document.getElementById('map-container').offsetHeight);
            this.stage.width(document.getElementById('map-container').offsetWidth);
            // ensure that antialiasing remains off
            var ctx = this.cityLayer.getContext()._context;
            ctx.imageSmoothingEnabled = false;
        }.bind(this), false);

        this.populateMap();
    }
}

export default MapModule;