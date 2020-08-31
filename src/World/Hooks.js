import React from 'react'
import { Destination, Journey, Origin, Trip } from 'react-trip-animation';

import { Map, Marker, Popup, FeatureGroup,LayersControl,TileLayer  } from "react-leaflet";

import './centre.css'


const TripAnimation = () => (
    <Trip>
      <Journey>
        <Origin position={[41.3887901, 2.1589899]} />
        <Destination position={[25.286106, 51.534817]} />
      </Journey>
      <Journey>
        <Origin position={[25.286106, 51.534817]} />
        <Destination position={[21.028511, 105.804817]} />
      </Journey>
    </Trip>
  );

function Hooks() {
    return (
        <div>
           

   <TripAnimation/>

       
    
              
        </div>
    )
}

export default Hooks
