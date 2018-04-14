import React from "react";
import {Div} from "components";
import Apps from "views/common/Apps";
import * as routes from "constants/routes";
import * as donateRoutes from "constants/donateRoutes";
import * as bloodRoutes from "constants/bloodRoutes";

const apps = [
  {
    key: 1,
    title: "My profile",
    secondaryText: "Create your blood donate profile",
    image: ``,
    route:`${routes.DONATE}${donateRoutes.BLOOD}${bloodRoutes.PROFILE}`
  },
  {
    key: 1,
    title: "Blood requests",
    secondaryText: "My requested blood",
    image: ``,
    route:`${routes.DONATE}${donateRoutes.BLOOD}${bloodRoutes.DONATEREQUEST}`
  },
  {
    key: 1,
    title: "Request blood",
    secondaryText: "Create donor",
    image: ``,
    route:`${routes.DONATE}${donateRoutes.BLOOD}${bloodRoutes.CREATEREQUEST}`
  },
  {
    key: 1,
    title: "My Requests",
    secondaryText: "My requests for blood",
    image: ``,
    route:`${routes.DONATE}${donateRoutes.BLOOD}${bloodRoutes.MYREQUESTS}`
  },

];

const Blood=(props)=>{
  return (
    <Div>
      <Apps apps={apps}/>
    </Div>
  )
}

export default Blood;
