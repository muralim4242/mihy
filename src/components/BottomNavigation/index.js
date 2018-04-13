import React from "react";
import PropTypes from "prop-types";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";

const MaterializeBottomNavigation = ({
  className,
  style = {},
  options,
  handleChange,
  selectedIndex
}) => (
  <BottomNavigation
    showLabels
    className={`${className}`}
    style={style}
    value={selectedIndex}
    onChange={(e, value) => {
      handleChange(value);
    }}
  >
    {options.map((item, index) => (
      <BottomNavigationAction key={index} label={item.label} icon={item.icon} />
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

export default MaterializeBottomNavigation;
