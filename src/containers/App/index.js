import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import indexRoutes from "routes";
import withAuthentication from "hoc/withAuthentication";

const App = () => (
  <div>
    <Router>
      <div>
        <Switch>
          {indexRoutes.map((prop, key) =>
            {
              if (!key) {
                return <Route path={prop.path} component={prop.component} key={key} />
              }
              return null;
            })
          }
        </Switch>
        <Switch>
          {indexRoutes.map((prop, key) =>
            {
              if (key) {
                return <Route path={prop.path} component={prop.component} key={key} />
              }
              return null;
            })
          }
        </Switch>
      </div>
    </Router>
  </div>
);

export default withAuthentication(App);
// {
//   indexRoutes
// }
