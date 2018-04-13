// This file is shared across the demos.

import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Home from "material-ui-icons/Home";
import Face from "material-ui-icons/Face";
import Call from "material-ui-icons/Call";
import ExitToApp from "material-ui-icons/ExitToApp";

export const MenuListItems = ({ handleMenuItemClick }) => (
  <div>
    <ListItem onClick={()=>{handleMenuItemClick(0)}} button>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem onClick={()=>{handleMenuItemClick(1)}} button>
      <ListItemIcon>
        <Face />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem onClick={()=>{handleMenuItemClick(2)}} button>
      <ListItemIcon>
        <Call />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItem>
    <ListItem onClick={()=>{handleMenuItemClick(3)}} button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);
