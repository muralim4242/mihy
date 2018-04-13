import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import {ContainerGrid,ItemGrid,Div,WhitePaper} from "components";
import AppIcons from "../AppIcons";
import styles from "./css";



const Apps = ({ classes }) => {
  return (
    <Div className={classes.root}>
      <ContainerGrid spacing={8}>
        <ItemGrid xs={3}>
          <WhitePaper className={classes.paper}>
            <AppIcons />
            Donate
          </WhitePaper>
        </ItemGrid>
      </ContainerGrid>
    </Div>
  );
};

Apps.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Apps);
