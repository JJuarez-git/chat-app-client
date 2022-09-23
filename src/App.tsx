import React from "react";
import RoutesLoader from "./pages/loader/RoutesLoader";
import store from './redux-store/store';
import { BrowserRouter as Router } from "react-router-dom";
import { Authentication } from "./pages/authentication/Authentication";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Authentication>
        <Router>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            limit={5}
          />
          <div className="App">
            <RoutesLoader />
          </div>
        </Router>
      </Authentication>
    </Provider>
  );
}

export default App;
