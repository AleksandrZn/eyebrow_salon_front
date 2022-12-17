import Appointment from "./pages/Appointment/index.jsx";
import Main from "./pages/Main/index.jsx";
import Courses from "./pages/Courses/index.jsx";
import {
  APPOINTMENT_ROUTE,
  COURSES_ROUTE,
  MAIN_ROUTE,
} from "./utils/consts";

export const authRoutes = [
];
export const publicRoutes = [
 { path: APPOINTMENT_ROUTE, Component: Appointment },
  { path: MAIN_ROUTE, Component: Main },
  { path: COURSES_ROUTE, Component: Courses },
];
