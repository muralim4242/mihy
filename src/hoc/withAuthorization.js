import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { auth } from "firebase-util";
import { LOGIN } from "constants/routes";

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(LOGIN);
        }
      });
    }

    render() {
      return this.props.sessionStore.authUser ? <Component {...this.props}/> : null;
    }
  }

  return compose(withRouter, inject("sessionStore"), observer)(
    WithAuthorization
  );
};

export default withAuthorization;
