// import Donate from "views/private/Donate";
import Blood from "containers/private/Donate/Blood";
import * as routes from "constants/donateRoutes";

const donateRoutes=[
  // {
  //   path:routes.DASHBOARD,
  //   component:Donate
  // },
  {
    path:routes.BLOOD,
    component:Blood,
    displayName:"Blood",
    code:"B",
    style:{
      background:"#B71C1C",
      color:"white"
    }
  },
  // {
  //   isRedirect:true,
  //   path:"/donate",
  //   to:routes.DASHBOARD
  // }
];

export default donateRoutes;
