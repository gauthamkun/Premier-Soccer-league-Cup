import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AboutUs from "./AboutUs";
import TeamRegisteration from "./TeamRegisteration";
import Stats from "./Stats";
import Scheduling from "./Scheduling";
import Home from "./Home";
import Referee from "./Referee";
import Map from "./Map";
import Rules from "./Rules";
import Form from "./Form";
import Login from "./Login";
import RefereeRegistration from "./RefereeRegistration";
import TeamRegistrationView from "./TeamRegistrationView";
import SchedulingView from "./SchedulingView";

function Header() {
  const userRole = localStorage.getItem("role");
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
            {userRole == 1 || userRole == 3 ? (
              <li>
                {" "}
                <Link to="/TeamRegistration">Team Registration</Link>
              </li>
            ) : (
              <li>
                {" "}
                <Link to="/TeamRegistrationView">Team Registration</Link>
              </li>
            )}
            <li>
              {" "}
              <Link to="/Stats">Statistics</Link>
            </li>
            {userRole == 1 || userRole == 5 ? (
              <li>
                {" "}
                <Link to="/Scheduling">Match Scheduling</Link>
              </li>
            ) : (
              <li>
                {" "}
                <Link to="/SchedulingView">Match Scheduling</Link>
              </li>
            )}
            {userRole == 1 || userRole == 4 ? (
              <li>
                {" "}
                <Link to="/Referee">Referee section</Link>
              </li>
            ) : (
              <li>
                {" "}
                <Link to="/RefereeRegistration">Referee section</Link>
              </li>
            )}
            <li>
              {" "}
              <Link to="/Map">Maps</Link>
            </li>
            <li>
              {" "}
              <Link to="/Login">Login / Sign Up</Link>
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
        <Route path="/Map">
          <Map />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/register">
          <Form />
        </Route>
        <Route path="/RefereeRegistration">
          <RefereeRegistration />
        </Route>
        <Route path="/TeamRegistrationView">
          <TeamRegistrationView />
        </Route>
        <Route path="/SchedulingView">
          <SchedulingView />
        </Route>
        <Route path="/">
          <Home />{" "}
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
