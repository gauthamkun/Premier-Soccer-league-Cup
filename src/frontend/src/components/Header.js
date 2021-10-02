import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AboutUs from "./AboutUs";
import TeamRegisteration from "./TeamRegisteration";
import Stats from "./Stats";
import Scheduling from "./Scheduling";
import Home from "./Home";
import Referee from "./Referee";
import Maps from "./Maps";
import Login from "./Login";
import Rules from "./Rules";
import Form from "./SignUp/Form";

function Header() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About Us</Link>
            </li>
            <li>
              {" "}
              <Link to="/Rules">Tournament Rules</Link>
            </li>
            <li>
              {" "}
              <Link to="/TeamRegistration">Team Registration</Link>
            </li>
            <li>
              {" "}
              <Link to="/Stats">Statistics</Link>
            </li>
            <li>
              {" "}
              <Link to="/Scheduling">Match Scheduling</Link>
            </li>
            <li>
              {" "}
              <Link to="/Referee">Referee section</Link>
            </li>
            <li>
              {" "}
              <Link to="/Maps">Maps</Link>
            </li>
            <li>
              {" "}
              <Link to="/Login">Login / Sign Up</Link>
            </li>
            <li>
              <Link to="/SignUp">SignUp</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/about">
          {" "}
          <AboutUs />
        </Route>
        <Route path="/TeamRegistration">
          <TeamRegisteration />
        </Route>
        <Route path="/Rules">
          <Rules />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
        <Route path="/Scheduling">
          <Scheduling />
        </Route>
        <Route path="/Referee">
          <Referee />
        </Route>
        <Route path="/Maps">
          <Maps />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/SignUp">
          <Form />
        </Route>
        <Route path="/">
          <Home />{" "}
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
