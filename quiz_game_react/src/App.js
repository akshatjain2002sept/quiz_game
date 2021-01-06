import React from "react";
import "./App.css";
import "./GamePage";
import logo from "./DataStructuresLogo.png";
import GamePage from "./GamePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/gamepage" component={GamePage} />

          <Route path="/" exact>
            <div className="split left">
              <Title></Title>
            </div>

            <div className="split right">
              <Rules></Rules>
              <StartButton></StartButton>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Rules() {
  return (
    <div className="rulesHeader">
      Rules:
      <div className="rulesGeneral">
        <p>
          This is a multiple choice quiz game in a similar format to the popular
          game show "Who Wants to Be a Millionaire?"
        </p>
        <p>
          This is Data Structures Edition where the questions are a good
          conceptual review of data structures. You get four options for each
          question, and you have three lifelines:
        </p>
        <p>
          1) Jump the Question: You skip the question <br></br>2) Double Dip:
          You get to pick two answers <br></br>3) 50/50: Automatically removes
          two incorrect answer You can use each of these lifelines once. You can
          choose to quit the game at any point. If you answer all 15 questions
          correctly, you have beat the game.
        </p>
        <p>
          For the first five questions, you will also have a 90 second timer in
          which you must answer the question correctly. If you use a lifeline
          during one of those questions, the timer is paused.
        </p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="title">
      Data Structures <br></br> "Who Wants to Be a Millionaire?"
      <br></br>
      <div className="imageHome">
        <img src={logo} width="700"></img>
      </div>
    </div>
  );
}

function StartButton() {
  return (
    <div className="startButton">
      <nav>
        <Link to="/gamepage">
            <button class="btn">
            <svg width="300px" height="100px" viewBox="0 0 300 100" class="border">
            <polyline points="299,1 299,99 1,99 1,1 299,1" class="bg-line" />
            <polyline points="299,1 299,99 1,99 1,1 299,1" class="hl-line" />
            </svg>
            START
            </button>
        </Link>
      </nav>
    </div>
  );
}

export default Home;
