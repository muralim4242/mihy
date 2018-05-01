import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import styles from './css'


function PaperSheet(props) {
  const { classes,children,parentOverrideClass } = props;
  return (
    <div>
      <Paper className={`${classes.root} ${parentOverrideClass}`} elevation={4}>
        {children}
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
