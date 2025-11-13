import React from "react";
import type { RouteObject } from "react-router";
import { Navigate } from "react-router";

const Donation = React.lazy(() => import("@/components/templates/Donation"));

const routes: RouteObject[] = [
  {
    path: "",
    element: <Navigate to="" replace={true} />,
  },
  { path: "doar", element: <Donation /> },
];

export default routes;
