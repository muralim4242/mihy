// import React from "react";
import DashboardPage from "views/private/core/Dashboard";
import UserProfile from "views/private/core/UserProfile";
import ContactUs from "views/private/core/ContactUs";
import Donate from "containers/private/Donate";
import * as routes from "constants/routes";
// import {Route,Switch} from "react-router-dom";
import {
  Dashboard,
  Person
} from "material-ui-icons";

const appRoutes = [
  {
    path: routes.DASHBOARD,
    sidebarName: "Dashboard",
    navbarName: "Home",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: routes.USER_PROFILE,
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: routes.CONTACTUS,
    sidebarName: "Contact Us",
    navbarName: "Contact Us",
    icon: Person,
    component: ContactUs
  },
  {
    path: routes.DONATE,
    sidebarName: "Donate",
    navbarName: "Donate",
    component: Donate
  },
  // { redirect: true, path: routes.LANDING, to: routes.DASHBOARD, navbarName: "Redirect" }
];

// const appRoutes = (
//   <div>
//     <Route path={DASHBOARD} component={DashboardPage} />
//     <Route path={USER_PROFILE} component={UserProfile} />
//   </div>
// )

export default appRoutes;
