import React, { Component } from "react";
import { Map, Marker, Popup, FeatureGroup,LayersControl,TileLayer  } from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";

import './centre.css'
const { BaseLayer } = LayersControl;


// const File = () => {s
// const data = [
//     {
//       position: { lat: -33.8478796, lng: 150.7918932 },
//       title: "Sydney",
//       iconName: "leaf-red.png"
//     },
//     {
//       position: { lat: -31.954654, lng: 115.8399823 },
//       title: "Perth ",
//       iconName: "leaf-green.png"
//     }
//   ];




 class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 17.3850 ,
      lng: 78.4867,
      zoom: 13,
      marker: [17.3850 ,78.4867]
    };
  }

  terrain = "TERRAIN";
  key = "AIzaSyC0QH9aiCXuuRjJe4k5lzAM2bYl-MUhiPk";

  removeEverything = e => {
    console.log(e);
    const { lat, lng } = e.layer._latlng;
    this.setState({ marker: [lat, lng] });
    const { edit } = this.refs;
    var layerContainer = edit.leafletElement.options.edit.featureGroup;
    const layers = layerContainer._layers;
    const layer_ids = Object.keys(layers);
    layer_ids.splice(0, 1);
    layer_ids.forEach(id => {
      const layer = layers[id];
      layerContainer.removeLayer(layer);
    });
  };

  setPos = () => {
    this.setState({ marker: [51.513121295, -0.09] });
  };

  handleOnZoomed = e => {
    this.setState({ zoom: e.target._zoom });
  };

  render() {
    const position = [this.state.lat, this.state.lng];

  

    return (
     <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.setPos}>remove</button>
        <Map
          center={this.state.marker}
          zoom={this.state.zoom}
          onzoomend={this.handleOnZoomed}
        >
          <Marker
            position={this.state.marker}
            //  defaultMarker={{ defaultMarker: true }}
          >
            
          </Marker>


      

          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FeatureGroup>
            <EditControl
              ref="edit"
              position="topright"
              onCreated={this.removeEverything}
              draw={{
                rectangle: false
              }}
            />
          </FeatureGroup>
          {/* <ReactLeafletGoogleLayer
            googleMapsLoaderConf={{ KEY: this.key }}
            type={"satellite"}
          /> */}
        

      
        </Map>
      
        </div>
    );
  }
}

export default File