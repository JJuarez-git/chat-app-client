import React from "react";
import { Navigate, PathRouteProps, Route, Routes } from "react-router-dom";
import NotFound404 from "../404/404";
import RequireAuth from "../authentication/RequireAuth";
import SignWrapper from "../authentication/SignWrapper";
import MainApp from "../main/MainApp";

interface RouteType {
  path: string;
  element: JSX.Element;
}

export enum RoutePath {
  Root = "/",
  Rest = "*",
  SingIn = "/signin",
  SingUp = "/signup",
  Chat = "/chat",
}

const routesList: RouteType[] = [
  {
    path: RoutePath.Root,
    element: <Navigate to="/chat" replace={true} />,
  },
  {
    path: RoutePath.Rest,
    element: <NotFound404 />,
  },
  {
    path: RoutePath.SingIn,
    element: <SignWrapper mode="signin" />,
  },
  {
    path: RoutePath.SingUp,
    element: <SignWrapper mode="signup" />,
  },
  {
    path: RoutePath.Chat,
    element: (
      <RequireAuth>
        <MainApp />
      </RequireAuth>
    ),
  },
];

const RoutesLoader = () => {
  return (
    <Routes>
      {routesList.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default RoutesLoader;
