import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import styles from "./css";

function RoundButton(props) {
  const { classes,color,ariaLabel,parentOverrideClass,icon,onClick,hasIcon,children,id,...rest} = props;
  return (
        <Button variant="fab" color={`${color?color:"default"}`} aria-label={`${ariaLabel?ariaLabel:""}`} className={`${classes.button} ${parentOverrideClass}`} mini={true} onClick={(e)=>onClick(e)} id={id} {...rest}>
          {(hasIcon===undefined || hasIcon===true)?<i
            className="material-icons"
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
  icon:PropTypes.string,
  onClick:PropTypes.func
};

export default withStyles(styles)(RoundButton);
