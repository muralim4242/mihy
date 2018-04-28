import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';

const styles = theme => ({
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  }
});

function SingleLineGridList(props) {
  const { classes,gridList } = props;

  return (
      <GridList className={classes.gridList} cols={6}>
        {gridList.map((tile,key) => (
          <GridListTile key={key}>
            {tile.children}
          </GridListTile>
        ))}
      </GridList>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
