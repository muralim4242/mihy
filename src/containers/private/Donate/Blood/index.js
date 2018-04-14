import React from "react";
import {RenderRoutes} from "components";
import bloodRoutes from "routes/bloodRoutes";

class Donate extends React.Component {
  render()
  {
    const {match} =this.props;
    return (
      <RenderRoutes parentUrl={match.url} routes={bloodRoutes}/>
    )
  }
}

export default Donate;
