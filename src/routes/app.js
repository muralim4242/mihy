import DashboardPage from "views/private/core/Dashboard";
import UserProfile from "views/private/core/UserProfile";
import ContactUs from "views/private/core/ContactUs";
import Blood from "containers/private/Donate/Blood";
import * as routes from "constants/routes/routes";

const appRoutes = [
  {
    path: routes.DASHBOARD,
    sidebarName: "Dashboard",
    navbarName: "Home",
    component: DashboardPage
  },
  {
    path: routes.USER_PROFILE,
    sidebarName: "User Profile",
    navbarName: "Profile",
    component: UserProfile
  },
  {
    path: routes.CONTACTUS,
    sidebarName: "Contact Us",
    navbarName: "Contact Us",
    component: ContactUs
  },
  {
    path: routes.BLOOD,
    sidebarName: "Blood",
    navbarName: "Blood",
    component: Blood
  },
  // { redirect: true, path: routes.LANDING, to: routes.DASHBOARD, navbarName: "Redirect" }
];

export default appRoutes;
