import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "../authentication/Authentication";

const routesList = [
   {
      path: "/signin",
      element: <Authentication mode="signin" />
   },
   {
      path: "/signup",
      element: <Authentication mode="signup" />
   }
]

const RoutesLoader = () => {
   return(
      <Routes>
         {routesList.map(route => <Route {...route} />)}
      </Routes>
   )
}

export default RoutesLoader