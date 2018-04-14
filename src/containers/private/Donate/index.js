import React from "react";
import {RenderRoutes} from "components";
import donateRoutes from "routes/donateRoutes";

class Donate extends React.Component {
  render()
  {
    const {match} =this.props;
    return (
      <RenderRoutes parentUrl={match.url} routes={donateRoutes}/>
    )
  }
}

export default Donate;
