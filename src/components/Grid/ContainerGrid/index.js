import React from "react";
import { withStyles, Grid } from "material-ui";
import styles from "./css";

function ContainerGrid({ ...props }) {
  const { classes, children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

export default withStyles(styles)(ContainerGrid);
