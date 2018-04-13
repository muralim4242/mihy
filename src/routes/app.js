// import React from "react";
import DashboardPage from "views/private/core/Dashboard";
import UserProfile from "views/private/core/UserProfile";
import ContactUs from "views/private/core/ContactUs";
import {DASHBOARD,USER_PROFILE,LANDING,CONTACTUS} from "constants/routes";
// import {Route,Switch} from "react-router-dom";
import {
  Dashboard,
  Person
} from "material-ui-icons";

const appRoutes = [
  {
    path: DASHBOARD,
    sidebarName: "Dashboard",
    navbarName: "Home",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: USER_PROFILE,
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: CONTACTUS,
    sidebarName: "Contact Us",
    navbarName: "Contact Us",
    icon: Person,
    component: ContactUs
  },
  // { redirect: true, path: LANDING, to: DASHBOARD, navbarName: "Redirect" }
];

// const appRoutes = (
//   <div>
//     <Route path={DASHBOARD} component={DashboardPage} />
//     <Route path={USER_PROFILE} component={UserProfile} />
//   </div>
// )

export default appRoutes;
