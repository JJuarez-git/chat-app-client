import React from "react";
import "./App.css";
import MainApp from "./pages/main/MainApp";
import SignIn from "./pages/authentication/SignIn";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesLoader from './pages/loader/RoutesLoader';

function App() {
   return (
      <Router>
         <div className="App">
            {/* <MainApp /> */}
            {/* <SignIn /> */}
            {/* <Footer /> */}
            <RoutesLoader />
         </div>
      </Router>
   );
}

export default App;
