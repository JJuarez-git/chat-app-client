import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesLoader from "./pages/loader/RoutesLoader";
import { Authentication } from "./pages/authentication/Authentication";

function App() {
  return (
    <Authentication>
      <Router>
        <div className="App">
          <RoutesLoader />
        </div>
      </Router>
    </Authentication>
  );
}

export default App;
