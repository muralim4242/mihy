import Donate from "views/private/Donate";
import Blood from "views/private/Donate/Blood";
import * as routes from "constants/donateRoutes";

const donateRoutes=[
  {
    path:routes.DASHBOARD,
    component:Donate
  },
  {
    path:routes.BLOOD,
    component:Blood
  },
  {
    isRedirect:true,
    path:"/donate",
    to:routes.DASHBOARD
  }
];

export default donateRoutes;
