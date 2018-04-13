// import React from "react";
import App from "containers/private/Private";
import Login from "containers/public/Login";
import {LANDING,LOGIN} from "constants/routes";
// import {Route,Switch} from "react-router-dom";

const indexRoutes = [
  { path: LANDING,component: App},
  { path: LOGIN, component:Login}
];
//
// const indexRoutes =(
//   <div>
//     <Route path={LANDING} component={App}/>
//     {/*<Route path={LOGIN} component={Login}/>*/}
//   </div>
// )

export default indexRoutes;
