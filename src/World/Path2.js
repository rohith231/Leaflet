import React, { Component } from "react";
import { Map, Marker, Popup, FeatureGroup,TileLayer,GeoJSON,withLeaflet,LayersControl,ZoomControl } from "react-leaflet";
// import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";
// import MarkerClusterGroup from "react-leaflet-markercluster";
// import { PlottyGeotiffLayer, VectorArrowsGeotiffLayer } from "./GeotiffLayer";
// import NmScale from "@marfle/react-leaflet-nmscale";
// import FigureEditor from "react-leaflet-figure-editor";
import './centre.css'
import LeafletReactTrackPlayer from "./laeflet-react-track-player";
import demo2 from "./demo2";
 




 class Path extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 17.3850 ,
      lng: 78.4867,
      zoom: 13,
      marker: [17.3850 ,78.4867],
      type: "distance",
      demo: demo2
    
    };

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
  //   };







  



  // terrain = "TERRAIN";
  // key = "iPkAIzaSyC0QH9aiCXuuRjJe4k5lzAM2bYl-MUh";

  // removeEverything = e => {
  //   console.log(e);
  //   const { lat, lng } = e.layer._latlng;
  //   this.setState({ marker: [lat, lng] });
  //   const { edit } = this.refs;
  //   var layerContainer = edit.leafletElement.options.edit.featureGroup;
  //   const layers = layerContainer._layers;
  //   const layer_ids = Object.keys(layers);
  //   layer_ids.splice(0, 1);
  //   layer_ids.forEach(id => {
  //     const layer = layers[id];
  //     layerContainer.removeLayer(layer);
  //   });
  // };

  // setPos = () => {
  //   this.setState({ marker: [17.3850 ,78.4867] });
  // };

  // handleOnZoomed = e => {
  //   this.setState({ zoom: e.target._zoom });
  // };

  render() {
    const position = [demo[demo.length - 1].lat, demo[demo.length - 1].lng];
    const center = [17.3850 ,78.4867];
 

    



 
    return (
     <div>



        <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.setPos}>remove</button>

        
        <Map


          center={this.state.marker}
          zoom={this.state.zoom}
          onzoomend={this.handleOnZoomed}
          
     

          ref={m => {
            this.leafletMap = m;
          }} >


          <Marker
            position={this.state.marker}
            //  defaultMarker={{ defaultMarker: true }}
          >
          </Marker>


          <LeafletReactTrackPlayer
            track={this.state.demo}
            optionMultyIdxFn={function(p) {
              return p.status;
            }}
            optionsMulty={[
              { color: "#b1b1b1" },
              { color: "#06a9f5" },
              { color: "#202020" },
              { color: "#D10B41" },
              { color: "#78c800" }
            ]}
            progressFormat={this.state.type}
            customMarker={true}
            changeCourseCustomMarker={true}
            iconCustomMarker={"/img/mech.svg"}
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
        

        <div className="pointer" />
        </Map>
      
        </div>
    );
  }
}

export default Path