import React from "react";
import {Div} from "components";
import Apps from "views/common/Apps";

import * as donateRoutes from "constants/routes/donateRoutes";
import * as bloodRoutes from "constants/routes/bloodRoutes";

const apps = [
  {
    key: 1,
    title: "My profile",
    secondaryText: "Create your blood donate profile",
    image: ``,
    route:`${donateRoutes.BLOOD}${bloodRoutes.PROFILE}`
  },
  // {
  //   key: 1,
  //   title: "Blood requests",
  //   secondaryText: "My requested blood",
  //   image: ``,
  //   route:`${donateRoutes.BLOOD}${bloodRoutes.DONATEREQUEST}`
  // },
  {
    key: 1,
    title: "Search donor",
    secondaryText: "Request for donor",
    image: ``,
    route:`${donateRoutes.BLOOD}${bloodRoutes.CREATEREQUEST}`
  },
  // {
  //   key: 1,
  //   title: "My Requests",
  //   secondaryText: "My requests for blood",
  //   image: ``,
  //   route:`${donateRoutes.BLOOD}${bloodRoutes.MYREQUESTS}`
  // },

];

const Blood=(props)=>{
  return (
    <Div>
      <Apps apps={apps}/>
    </Div>
  )
}

export default Blood;
