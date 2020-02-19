import React, { Component } from "react";
import Konva from 'konva';
import * as AssetManager from './assetmanager'
import 'babel-polyfill';

const BUILDING_WIDTH = 160;
const ROAD_WIDTH = BUILDING_WIDTH / 4;
const BLOCK_WIDTH = BUILDING_WIDTH + ROAD_WIDTH;

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

    drawBuildingBlock(row, col, type, layer) {
        var imageObj = new window.Image();
        imageObj.src = AssetManager.retrieveBlockAsset(type);
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
        // try and identify what angle the water border tiles need to be at, from the grid
        imageObj.src = AssetManager.retrieveRoadAsset('road', 'north');
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
        imageObj.src = AssetManager.retrieveRoadAsset('road');
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
        imageObj.src = AssetManager.retrieveIntersectionAsset('intersection');
        imageObj.onload = function() {
            var vertRoadModel = new Konva.Rect({
                x: BLOCK_WIDTH * (Math.floor((col / 2)) + 1) - ROAD_WIDTH,
                y: BLOCK_WIDTH * (Math.floor((row / 2)) + 1) - ROAD_WIDTH,
                width: ROAD_WIDTH,
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
                ['skyscraper1', 'road', 'grass', 'road', 'water', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'water', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
                ['road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road', 'road'],
                ['skyscraper1', 'road', 'skyscraper1', 'road', 'water', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road', 'skyscraper1', 'road'],
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