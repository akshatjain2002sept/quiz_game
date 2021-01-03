import React, { Component } from "react";
import "./GamePage.css";
import Questions from "./Questions.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

var number = 0;
var isCorrect = true;

function GamePage() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/gamepage/easy" exact component={Questions} />
          <Route path="/gamepage/medium" exact component={Questions} />
          <Route path="/gamepage/hard" exact component={Questions} />
          <Route path="/gamepage" exact>
            {Options()}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Options() {
  return (
    <div>
      <div className="selection">
        <h1> Please select the difficulty you want</h1>
      </div>
      <div className="level_buttons">
        <nav>
          <Link to="/gamepage/easy">
            <button type="button">Easy</button>
          </Link>
        </nav>
        <nav>
          <Link to="/gamepage/medium">
            <button type="button">Medium</button>
          </Link>
        </nav>
        <nav>
          <Link to="/gamepage/hard">
            <button type="button">Hard</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default GamePage;
