import React, { Component } from "react";
import { Map, Marker, Popup, FeatureGroup,TileLayer,GeoJSON,withLeaflet,LayersControl,ZoomControl } from "react-leaflet";

import { EditControl } from "react-leaflet-draw";
import L from "leaflet";

import { PlottyGeotiffLayer, VectorArrowsGeotiffLayer } from "./GeotiffLayer";

import './Path.css'

 



 class Path extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // lat: 17.3850 ,
      // lng: 78.4867,
      // zoom: 13,
      // marker: [17.3850 ,78.4867],

      windSpeed: null,
      windDirection: null
    };
    this.windSpeedRef = React.createRef();
    this.windDirectionRef = React.createRef();
  }



  handleLayerClick(e) {
    const windSpeed = this.windSpeedRef.current.leafletElement
      .getValueAtLatLng(e.latlng.lat, e.latlng.lng)
      .toFixed(1);
    const windDirection = this.windDirectionRef.current.leafletElement
      .getValueAtLatLng(e.latlng.lat, e.latlng.lng)
      .toFixed(0);
    this.setState({
      windDirection,
      windSpeed
    });
  }






  // componentDidMount() {
  //   const map = this.leafletMap.leafletElement;
  //   // const searchControl = new ELG.Geosearch().addTo(map);
  //   // const results = new L.LayerGroup().addTo(map);

  //   // searchControl.on("results", function(data) {
  //   //   results.clearLayers();
  //   //   for (let i = data.results.length - 1; i >= 0; i--) {
  //   //     results.addLayer(L.marker(data.results[i].latlng));
  //   //   }
  //   // });   
  // }





  

  render() {
    // const position = [this.state.lat, this.state.lng];
    // const center = [17.3850 ,78.4867];


    const windSpeedUrl = "https://stuartmatthews.github.io/leaflet-geotiff/tif/wind_speed.tif";
    const windSpeedOptions = {
      band: 0,
      displayMin: 0,
      displayMax: 30,
      name: "Wind speed",
      colorScale: "rainbow",
      clampLow: false,
      clampHigh: true,
      vector:true
    };

    const windDirectionUrl = "https://stuartmatthews.github.io/leaflet-geotiff/tif/wind_direction.tif";
    const windDirectionOptions = {
      band: 0,
      name: "Wind direction",
      arrowSize: 40
    };



 
    return (
     <div>

      <div style={{ width: "30%", float: "left" }}>
          <div>
            Wind speed at clicked point is <b>{this.state.windSpeed}</b>
          </div>
          <div>
            Wind direction at clicked point is <b>{this.state.windDirection}</b>
          </div>
        </div>


        {/* <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.setPos}>remove</button> */}

        
        <Map

center={this.props.center}
zoom={this.props.zoom}
length={4}
          onzoomend={this.handleOnZoomed}
          onClick={this.handleLayerClick.bind(this)}
          bounds={[[43.786293, 15.647650,0],[43.686293, 15.547650,0]]}

          ref={m => {
            this.leafletMap = m;
          }} >


          {/* <Marker
            position={this.state.marker}
            //  defaultMarker={{ defaultMarker: true }}
          >
          </Marker> */}

          <PlottyGeotiffLayer
              layerRef={this.windSpeedRef}
              url={windSpeedUrl}
              options={windSpeedOptions}
            />

            <VectorArrowsGeotiffLayer
              layerRef={this.windDirectionRef}
              url={windDirectionUrl}
              options={windDirectionOptions}
            />
      

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
                rectangle: true
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

export default Path