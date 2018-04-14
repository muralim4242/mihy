import React from "react";
import { withStyles,Paper } from "material-ui";
// import PropTypes from "prop-types";


function WhitePaper({ ...props }) {
  const { children, ...rest } = props;
  return (
    <Paper {...rest}>
      {children}
    </Paper>
  );
}

WhitePaper.propTypes = {

};

export default withStyles({})(WhitePaper);
