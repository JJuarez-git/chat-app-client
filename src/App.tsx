import React from "react";
import "./App.css";
import MainApp from "./pages/MainApp";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  /* Switch, */
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <MainApp /> */}
        <Login />
        {/* <Footer /> */}
      </div>
      {/* <Switch>
        <Route>
          
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
