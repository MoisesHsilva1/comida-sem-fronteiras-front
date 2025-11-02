import React from "react";
import type { RouteObject } from "react-router";

const Home = React.lazy(() => import("@/components/templates/Home"));

const routes: RouteObject[] = [
  {
    path: "",
    element: <Home />,
  },
  { path: "home", element: <Home /> },
];

export default routes;
