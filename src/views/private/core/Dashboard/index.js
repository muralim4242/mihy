import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Apps from "./components/Apps";

const styles =(theme)=> ({
  root: {
  }
});

class Dashboard extends React.Component {
  render() {
    const { classes} = this.props;
    return (
      <div className={classes.root}>
        <Apps/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Dashboard);
