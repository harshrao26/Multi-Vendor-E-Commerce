import { lazy, Suspense } from "react";
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin.jsx"));
const Login = lazy(() => import("../../views/auth/Login.jsx"));
const Home = lazy(() => import("../../views/Home.jsx"));
const Register = lazy(() => import("../../views/auth/Register.jsx"));

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/login",
    element: (
        <Login />
    ),
  },
  {
    path: "/register",
    element: (
        <Register />
    ),
  },
  {
    path: "/admin/login",
    element: (
        <AdminLogin />
    ),
  },
];

export default publicRoutes;
