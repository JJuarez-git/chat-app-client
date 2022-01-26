import React from "react";
import "./App.css";
import MainApp from "./pages/MainApp";
import SignIn from "./pages/SignIn";
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
        <SignIn />
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
