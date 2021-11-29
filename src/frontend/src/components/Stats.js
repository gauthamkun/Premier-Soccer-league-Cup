import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

function Stats() {
  return (
    <>
      <div class="container">
          <Switch>
            <h1>Hello</h1>

            <li> <Link to="/TutorialsList">Home</Link></li>
            
            <Route exact path="/stats/add" component={AddTutorial} />
            <Route path="/stats/:id" component={Tutorial} />
          </Switch>
          <Route path = "/TutorialsList"/><TutorialsList></TutorialsList>
        </div>
    </>
  );
}

export default Stats;