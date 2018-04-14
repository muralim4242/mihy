import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Apps from "views/common/Apps";

const apps = [
  {
    key: 1,
    title: "Donate",
    secondaryText: "Save life",
    image: `https://firebasestorage.googleapis.com/v0/b/mihy-all.appspot.com/o/blooming-twig-near-plate_23-2147766582%20(1).jpg?alt=media&token=e8213387-b025-4ef1-86e0-12b06eb4c771`,
    route:"/donate"
  },
  // {
  //   key: 2,
  //   title: "Water management",
  //   secondaryText: "Save life",
  //   image: `https://firebasestorage.googleapis.com/v0/b/mihy-all.appspot.com/o/blooming-twig-near-plate_23-2147766582%20(1).jpg?alt=media&token=e8213387-b025-4ef1-86e0-12b06eb4c771`
  // },
  // {
  //   key: 3,
  //   title: "PGR",
  //   secondaryText: "Save life",
  //   image: `https://firebasestorage.googleapis.com/v0/b/mihy-all.appspot.com/o/blooming-twig-near-plate_23-2147766582%20(1).jpg?alt=media&token=e8213387-b025-4ef1-86e0-12b06eb4c771`
  // },
  // {
  //   key: 4,
  //   title: "Tracker",
  //   secondaryText: "Save life",
  //   image: `https://firebasestorage.googleapis.com/v0/b/mihy-all.appspot.com/o/blooming-twig-near-plate_23-2147766582%20(1).jpg?alt=media&token=e8213387-b025-4ef1-86e0-12b06eb4c771`
  // }
];

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
