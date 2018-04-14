import React from "react";
import {Div} from "components";
import Apps from "views/common/Apps";
import * as routes from "constants/routes";
import * as donateRoutes from "constants/donateRoutes";

const apps = [
  {
    key: 1,
    title: "Blood",
    secondaryText: "Save life",
    image: `https://firebasestorage.googleapis.com/v0/b/mihy-all.appspot.com/o/blooming-twig-near-plate_23-2147766582%20(1).jpg?alt=media&token=e8213387-b025-4ef1-86e0-12b06eb4c771`,
    route:`${routes.DONATE}${donateRoutes.BLOOD}`
  }
];

const Donate=(props)=>{
  return(
    <Div>
      <Apps apps={apps}/>
    </Div>
  )
}

export default Donate;
