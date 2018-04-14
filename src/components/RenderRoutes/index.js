import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";

const RenderRoutes=({parentUrl,routes})=>{
  return (
    <Switch>
      {
        routes.map((route,routeKey)=>
        {
          if (route.isRedirect) {
            return <Redirect from={route.path} to={`${parentUrl}${route.to}`} key={routeKey} />;
          } else {
            return <Route path={`${parentUrl}${route.path}`} component={route.component} key={routeKey}/>
          }
        })
      }
    </Switch>
  )
}

export default RenderRoutes;
