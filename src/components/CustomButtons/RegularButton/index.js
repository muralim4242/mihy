import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

function RegularButton(props) {
  const {color,variant,ariaLabel,disabled,mini,parentOverrideClass,onClick,children,id,...rest} = props;
  return (
        <Button variant={variant?variant:"raised"} color={`${color?color:"default"}`} aria-label={`${ariaLabel?ariaLabel:""}`} className={`${parentOverrideClass}`} mini={mini?mini:false} disabled={disabled?disabled:false} onClick={(e)=>onClick(e)} id={id} {...rest}>
          {children}
        </Button>
  );
}

RegularButton.propTypes = {
  color:PropTypes.string,
  ariaLabel:PropTypes.string,
  parentOverrideClass:PropTypes.string,
  onClick:PropTypes.func
};

export default RegularButton;
