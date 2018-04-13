import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import indexRoutes from "routes/index";
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
            })
          }
        </Switch>
        <Switch>
          {indexRoutes.map((prop, key) =>
            {
              if (key) {
                return <Route path={prop.path} component={prop.component} key={key} />
              }
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
