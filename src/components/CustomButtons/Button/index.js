import React from "react";
import { withStyles, Button } from "material-ui";
import PropTypes from "prop-types";
import cx from "classnames";

import buttonStyle from "variables/styles/buttonStyle";

function RegularButton({ ...props }) {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    parentOverrideClass,
    ...rest
  } = props;
  const btnClasses = cx({
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled
  });
  return (
    <Button className={classes.button + " " + btnClasses + " " + parentOverrideClass} {...rest} >
      {children}
    </Button>
  );
}

RegularButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "simple",
    "transparent"
  ]),
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool
};

export default withStyles(buttonStyle)(RegularButton);
