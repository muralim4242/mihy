import Private from "containers/private/Private";
import Login from "containers/public/Login";
import * as routes from "constants/routes/routes";

const indexRoutes = [
  { path: routes.LANDING,component: Private},
  { path: routes.LOGIN, component:Login}
];

export default indexRoutes;
