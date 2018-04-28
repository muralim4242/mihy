import Blood from "views/private/Donate/Blood";
import Profile from "views/private/Donate/Blood/Profile";
import RequestBlood from "containers/private/Donate/Blood/RequestBlood";
import * as routes from "constants/bloodRoutes";

const donateRoutes=[
  {
    path:routes.DASHBOARD,
    component:Blood
  },
  {
    path:routes.PROFILE,
    component:Profile
  },
  {
    path:routes.MYREQUESTS,
    component:Profile
  },
  {
    path:routes.CREATEREQUEST,
    component:RequestBlood
  },
  {
    path:routes.DONATEREQUEST,
    component:Profile
  },
  {
    isRedirect:true,
    path:"/donate/blood",
    to:routes.DASHBOARD
  }
];

export default donateRoutes;
