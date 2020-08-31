import React from "react";
import Sidebar from "./Sidebar";
import Head from './Head'

import "./App.css";
// import Design from "./Design";
// import Map from './dynamic/Map'

import Path from './World/Path'

function App() {
  return (
    
    <div className="app">
      <Head/>
      <div className="map__text">
      <Sidebar />
      <div className ="map__left">


         <Path/>
     </div>
    
     </div>
      
     
     

    </div>
  );
}

export default App;
