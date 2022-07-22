import Admin from "./pages/Admin/index.jsx";
import Appointment from "./pages/Appointment/index.jsx";
import Auth from "./pages/Auth/index.jsx";
import Main from "./pages/Main/index.jsx";
import Profile from "./pages/Profile/index.jsx";
import Courses from "./pages/Courses/index.jsx";
import {
  ADMIN_ROUTE,
  APPOINTMENT_ROUTE,
  AUTH_ROUTE,
  COURSES_ROUTE,
  MAIN_ROUTE,
  PROFILE_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  { path: ADMIN_ROUTE, Component: Admin },
  { path: PROFILE_ROUTE, Component: Profile },
  { path: APPOINTMENT_ROUTE, Component: Appointment },
];
export const publicRoutes = [
  { path: AUTH_ROUTE, Component: Auth },
  { path: MAIN_ROUTE, Component: Main },
  { path: COURSES_ROUTE, Component: Courses },
];
