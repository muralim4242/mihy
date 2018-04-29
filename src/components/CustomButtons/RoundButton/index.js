import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import styles from "./css";

function RoundButton(props) {
  const { classes,color,ariaLabel,parentOverrideClass,icon,handleClick,hasIcon,children,...rest} = props;
  return (
        <Button variant="fab" color={`${color?color:"default"}`} aria-label={`${ariaLabel?ariaLabel:""}`} className={`${classes.button} ${parentOverrideClass}`} mini={true} {...rest}>
          {(hasIcon===undefined || hasIcon===true)?<i
            className="material-icons"
            onClick={handleClick}
          >
            {icon}
          </i>:children}
        </Button>
  );
}

RoundButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color:PropTypes.string,
  ariaLabel:PropTypes.string,
  parentOverrideClass:PropTypes.string,
  icon:PropTypes.string
};

export default withStyles(styles)(RoundButton);
