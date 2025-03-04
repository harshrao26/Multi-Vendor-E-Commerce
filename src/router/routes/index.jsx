import Mainlayout from "../../layout/Mainlayout";
import { privateRoutes } from "./privateRoutes";

export const getRoutes = () => {
  return {
    path: "/",
    element: <Mainlayout />,
    children: privateRoutes,
  };
};

