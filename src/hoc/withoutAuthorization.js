import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { auth } from "firebase-util";
import { LANDING } from "constants/routes";

const withoutAuthorization = Component => {
  class WithoutAuthorization extends React.Component {
    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.props.history.push(LANDING);
        }
      });
    }
    render() {
      return !this.props.sessionStore.authUser ? <Component {...this.props}/> : null;
    }
  }

  return compose(withRouter, inject("sessionStore"), observer)(
    WithoutAuthorization
  );
};

export default withoutAuthorization;
