import React, { Component } from "react";

// import relevant assets
import intersection from '../../../img/4-way-intersection-city-dense.png';
import road from '../../../img/4-lane-road-city-dense.png';
import skyscraper1 from '../../../img/skyscraper-dense-parallax-1.png';
import tripletowers1 from '../../../img/triple-towers-1.png';
import watertile from '../../../img/water-full-block.png'
import waterroad from '../../../img/water-road-block-middle.png'
import waterinter from '../../../img/water-intersect-block-middle.png'
import grass from '../../../img/grass.png'
import grassRoad from '../../../img/grass-road.png'


export function retrieveBlockAsset(name) {
    if (name == "skyscraper1") {return skyscraper1;}
    else if (name == "tripletowers1") { return tripletowers1; }
    else if (name == "water") { return watertile; }
    else return grass;
}

export function retrieveRoadAsset(name, direction) {
    if (name == "waterroad") { return waterroad; }
    if (name == "grass") { return grassRoad; }
    return road;
}

export function retrieveIntersectionAsset(name) {
    return intersection;
}