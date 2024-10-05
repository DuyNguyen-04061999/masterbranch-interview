/* eslint-disable react-refresh/only-export-components */
import MainLayout from "@/layout/main-layout";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const Home = lazy(() => import("@/pages"));

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
  },
];

export { routes };

