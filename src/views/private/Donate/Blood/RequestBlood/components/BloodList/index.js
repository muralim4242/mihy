import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import {RoundButton} from "components";
import styles from "./css"

function BloodList(props) {
  const { classes,bloodList } = props;
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6} cellHeight={56}>
          {
            bloodList.map((blood,key)=>{
              return (
                <GridListTile key={key}>
                  <RoundButton ariaLabel={blood.displayName} hasIcon={false} parentOverrideClass={classes[blood.name]}>
                      <span className={classes.text}>{blood.displayName}</span>
                  </RoundButton>
                </GridListTile>
              )
            })
          }
      </GridList>
    </div>
  );
}

BloodList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BloodList);
