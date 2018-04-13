import React from "react";
import { withStyles } from "material-ui";
import PropTypes from "prop-types";

function Div({ ...props }) {
  const { children, ...rest } = props;
  return (
    <div {...rest}>
      {children}
    </div>
  );
}

Div.propTypes = {

};

export default withStyles({})(Div);
