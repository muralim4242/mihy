import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Apps from "views/common/Apps";
import apps from "constants/appCategories";


const styles =(theme)=> ({
  root: {
  }
});

class Dashboard extends React.Component {
  render() {
    const { classes} = this.props;
    return (
      <div className={classes.root}>
        <Apps apps={apps}/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Dashboard);
