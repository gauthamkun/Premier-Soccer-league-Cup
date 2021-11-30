import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Table from "./components/Table";

class Stats extends Component{
  render(){
    var current = new Date();
    var expiry = new Date("December 01, 2021 17:39:00")
  return (
    
    <div>
    {
    current.getTime() < expiry.getTime()?<div>
            <Router>
            <Route exact path ="/stats" component={Table} />
            </Router>
            </div>:<p>Application process in not available</p> }
    </div>
          );
  }
}

export default Stats;