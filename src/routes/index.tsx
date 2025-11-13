import React, { Suspense } from "react";
import {
  type RouteObject,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router";

const Layout = React.lazy(() => import("../components/organisms/Layout"));

type IModule<T> = {
  [filename: string]: {
    default: T;
  };
};

function AppRoutes() {
  const routesModules: IModule<RouteObject[]> = import.meta.glob(
    "./app/*.tsx",
    {
      eager: true,
    }
  );

  const routesApp = Object.values(routesModules).reduce(
    (acc, module) => [...acc, ...module.default],
    [] as RouteObject[]
  );

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Navigate to="/home" replace={true} />,
    },
    {
      path: "/",
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: routesApp,
    },
  ];
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
export default AppRoutes;
