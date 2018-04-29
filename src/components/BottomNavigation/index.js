import React from "react";
import PropTypes from "prop-types";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import {withStyles} from "material-ui/styles";
import styles from "./css";

const MaterializeBottomNavigation = ({
  classes,
  className,
  options,
  handleChange,
  selectedIndex
}) => (
  <BottomNavigation
    showLabels
    className={`parentOverrideClass ${classes.root}`}
    value={selectedIndex}
    onChange={(e, value) => {
      handleChange(value);
    }}
  >
    {options.map((item, index) => (
      <BottomNavigationAction className={classes.bottomNavigation} key={index} label={<span style={{color:"white"}}>{item.label}</span>} icon={item.icon} />
    ))}
  </BottomNavigation>
);

MaterializeBottomNavigation.propTypes = {
  style: PropTypes.object,
  selectedIndex: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      route: PropTypes.string.isRequired
    })
  ).isRequired,
  handleChange: PropTypes.func
};

export default withStyles(styles)(MaterializeBottomNavigation);
