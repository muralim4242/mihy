import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import {compose} from "recompose";
import appStyle from "variables/styles/appStyle";
import LoginForm from "views/public/Login";
import {withoutAuthorization} from "hoc";

class Login extends React.Component {
  render() {
    const { classes} = this.props;
    return (
      <div className={classes.wrapper} style={{background:"linear-gradient(60deg, #C2185B, #7B1FA2)"}}>
          <LoginForm />
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};


export default compose(
  withoutAuthorization,
  withStyles(appStyle)
)(Login);
