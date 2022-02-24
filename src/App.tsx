import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesLoader from "./pages/loader/RoutesLoader";
import { Authentication } from "./pages/authentication/Authentication";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Authentication>
      <Router>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
        />
        <div className="App">
          <RoutesLoader />
        </div>
      </Router>
    </Authentication>
  );
}

export default App;
