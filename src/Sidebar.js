import React from "react";
import "./Sidebar.css";

import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightOutlinedIcon from '@material-ui/icons/FlightOutlined';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import BookIcon from '@material-ui/icons/Book';

import SidebarOption from "./SidebarOption";


import SearchIcon from "@material-ui/icons/Search";



import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      
             <h1 className="sidebar__text" >
      <FlightTakeoffIcon className="sidebar__flightTakeoffIcon"  text="Swaiim"/>
     SWAAIM </h1>

      <SidebarOption active Icon={FlightOutlinedIcon} text="WMS_LAYER" />

      <SidebarOption Icon={SearchIcon} text="Measuring-Tool" />
      <SidebarOption Icon={BookIcon} text="Layer" />
      <SidebarOption Icon={AssignmentLateIcon} text="Optional" />
     
     


      <Button  variant="outlined" className="sidebar__tweet" fullWidth>
        Explore on SWAAIM
      </Button>

      
    </div>
  );
}

export default Sidebar;
