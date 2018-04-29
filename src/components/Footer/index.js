import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import Hidden from 'material-ui/Hidden';
import BottomNavigation from "../BottomNavigation";
import Home from "material-ui-icons/Home";
import Face from "material-ui-icons/Face";
import Call from "material-ui-icons/Call";
import ExitToApp from "material-ui-icons/ExitToApp";

const footerStyle = {
  root: {
    width: "100%",
    position:"fixed",
    bottom: 0,
    // background: "linear-gradient(60deg, #00BCD4, #009688)"
  },
  icon:{
    color:"white"
  }
};

const options = [
  {
    label: "Home",
    icon: <Home style={footerStyle.icon}/>,
    route: "/"
  },
  {
    label: "Profile",
    icon: <Face style={footerStyle.icon}/>,
    route: "/user"
  },
  {
    label: "Contact Us",
    icon: <Call style={footerStyle.icon}/>,
    route: ""
  },
  {
    label: "Logout",
    icon: <ExitToApp style={footerStyle.icon}/>,
    route: ""
  }
];

function Footer({ ...props }) {
  const { classes, onBottomNaviationChange, value} = props;
  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <BottomNavigation
          selectedIndex={value}
          options={options}
          handleChange={onBottomNaviationChange}
        />
      </Hidden>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
