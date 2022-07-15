import Admin from "./pages/Admin";
import Appointment from "./pages/Appointment";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Courses from "./pages/Сourses";
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
