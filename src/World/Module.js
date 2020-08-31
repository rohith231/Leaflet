import React, { Component } from "react";
import { Map, Marker, Popup, FeatureGroup,LayersControl,TileLayer  } from "react-leaflet";

import { EditControl } from "react-leaflet-draw";
import L from "leaflet";

import './centre.css'

import LeafletReactTrackPlayer from "./laeflet-react-track-player";
import demo from "./demo";





 class Module extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 17.3850 ,
      lng: 78.4867,
      zoom: 13,
      marker: [17.3850 ,78.4867],  type: "distance",
      demo: demo,
      icon: "/img/mech.svg",
    show: true
    };
  }



  render() {

    const position = [demo[demo.length - 1].lat, demo[demo.length - 1].lng];
    

    return (
     <div>
       <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.setPos}>remove</button>
        <Map
          center={position}
          zoom={this.state.zoom}
          onzoomend={this.handleOnZoomed}
        >
       
    

       <LeafletReactTrackPlayer
            track={this.state.demo}  //The points that define the polyline
            optionMultyIdxFn={function(p) {  //Function  defined  in track segment colors
              return p.status;
            }}
            optionsMulty={[    //The colors used for track segments
              { color: "#b1b1b1" },
              { color: "#06a9f5" },
              { color: "#202020" },
              { color: "#D10B41" },
              { color: "#78c800" }
            ]}
            progressFormat={this.state.type}
            customMarker={true}    //	Should use a custom marker icon
            defaultSpeed={1000}
            streamData={false}   //	Update player after add new points
            changeCourseCustomMarker={true}
        
            iconCustomMarker={this.state.icon}   //Need changing course of marker points We need to have course in points. In the  demo.js
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
         
          <div className="pointer" />

      
        </Map>
      
        </div>
    );
  }
}

export default Module