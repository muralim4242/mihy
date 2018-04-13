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
    bottom: 0
  }
};

const options = [
  {
    label: "Home",
    icon: <Home />,
    route: "/"
  },
  {
    label: "Profile",
    icon: <Face />,
    route: "/user"
  },
  {
    label: "Contact Us",
    icon: <Call />,
    route: ""
  },
  {
    label: "Logout",
    icon: <ExitToApp />,
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
