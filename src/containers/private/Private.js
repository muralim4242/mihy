import React from "react";
import PropTypes from "prop-types";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import { compose } from "recompose";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";
import { Header, Footer,RenderRoutes } from "components";
import appRoutes from "routes/app";
import { auth } from "firebase-util";
import { LOGIN } from "constants/routes/routes";
import { withAuthorization } from "hoc";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit,
    marginTop: "55px",
    marginBottom:"40px"
  }
});

class Private extends React.Component {
  state = {
    mobileOpen: false
  };

  logout = () => {
    const self = this;
    auth
      .signOut()
      .then(function() {
        // Sign-out successful.
        self.props.history.push(LOGIN);
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      // eslint-disable-next-line
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
  }

  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0;
  }

  handleNavivationChange = value => {
    if (value === 3) {
      this.logout();
    }
    else {
      this.props.history.push(appRoutes[value].path);
    }
  };

  render() {
    const { classes,history} = this.props;
    const { handleDrawerToggle, handleNavivationChange } = this;
    const { mobileOpen } = this.state;
    return (
      <div className={classes.root} ref="mainPanel">
        <Header
          onHandleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          onMenuItemClick={handleNavivationChange}
          history={history}
        />
          <main className={classes.content}><RenderRoutes parentUrl="" routes={appRoutes}/></main>
        <Footer onBottomNaviationChange={handleNavivationChange}/>
      </div>
    );
  }
}

Private.propTypes = {
  classes: PropTypes.object.isRequired
};

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  withStyles(styles, { withTheme: true })
)(Private);
