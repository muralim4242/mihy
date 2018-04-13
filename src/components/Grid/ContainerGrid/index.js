import React from "react";
import { withStyles, Grid } from "material-ui";

const style = {
  grid: {
  }
};

function ContainerGrid({ ...props }) {
  const { classes, children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(ContainerGrid);
