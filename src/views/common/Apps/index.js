import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import { ContainerGrid, ItemGrid, Div, AppCard } from "components";
import styles from "./css";


const Apps = ({ classes,apps }) => {
  return (
    <Div className={classes.root}>
      <ContainerGrid spacing={8}>
        {apps.map(app => (
          <ItemGrid xs={12} md={6} className={classes.itemGrid}>
            <AppCard {...app} />
          </ItemGrid>
        ))}
      </ContainerGrid>
    </Div>
  );
};

Apps.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Apps);
