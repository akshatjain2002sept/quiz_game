import React, { Component } from "react";
import Answers from "./Answers";
import "./coolButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import coolButton from "./coolButton";


class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionEasyList: [],
      questionMediumList: [],
      questionHardList: [],
      number: 0,
      level: undefined,
    };
  }

  componentDidMount() {
    var easyURL =
      "https://opentdb.com/api.php?amount=15&category=9&difficulty=easy&type=multiple";
    var mediumURL =
      "https://opentdb.com/api.php?amount=15&category=9&difficulty=medium&type=multiple";
    var hardURL =
      "https://opentdb.com/api.php?amount=15&difficulty=hard&type=multiple";

    // Puts the information for the easyURL, medium, and hard respectively
    fetch(easyURL)
      .then((response) => response.json())
      .then((data) => this.setState({ questionEasyList: data.results }));
    fetch(mediumURL)
      .then((response) => response.json())
      .then((data) => this.setState({ questionMediumList: data.results }));
    fetch(hardURL)
      .then((response) => response.json())
      .then((data) => this.setState({ questionHardList: data.results }));
  }

  questionUsefulInfo(question, correct_answer, answer2, answer3, answer4) {
    var answer = [question, correct_answer, answer2, answer3, answer4];
    return answer;
  }

  answer() {
    var questionInfo = this.state.questionEasyList.map((question) =>
      this.questionUsefulInfo(
        question.question,
        question.correct_answer,
        question.incorrect_answers[0],
        question.incorrect_answers[1],
        question.incorrect_answers[2]
      )
    );
    return questionInfo;
  }

  findQuestion(questionList) {
    return questionList[this.state.number];
  }

  findAnswers(question) {
    return question[0];
  }

  QuestionDisplay(questionList) {
    var question = this.findQuestion(questionList);
    var answer1 = question;
    if (!question) {
      return <span>Loading...</span>;
    }
    var actualQuestion = question[0];

    var answer1 = (
      <Answers letter="A" text={question[1]} correct="true"></Answers>
    );
    var answer2 = (
      <Answers letter="B" text={question[2]} correct="false"></Answers>
    );
    var answer3 = (
      <Answers letter="C" text={question[3]} correct="false"></Answers>
    );
    var answer4 = (
      <Answers letter="D" text={question[4]} correct="false"></Answers>
    );

    return (
      <div className="Game">
      <div>
        <Router>
          <Switch>
            <Route path="/gamepage/gameOver" exact component={this.gameOver()} />
            <Route path="/gamepage/correct" exact component={this.correct()} />
            <Route path="/gamepage/easy" exact>
              <div className="question">
                Question {this.state.number}: {actualQuestion}{" "}
              </div>
              <div className="answers">
                <nav>
                  <Link to="/gamepage/correct">
                    <div className="answer1">{answer1}</div>
                  </Link>
                </nav>
                <nav>
                  <Link to="/gamepage/gameOver">
                    <div className="answer2">{answer2}</div>
                  </Link>
                </nav>
                <nav>
                  <Link to="/gamepage/gameOver">
                    <div className="answer3">{answer3}</div>
                  </Link>
                </nav>
                <nav>
                  <Link to="/gamepage/gameOver">
                    <div className="answer4">{answer4}</div>
                  </Link>
                </nav>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
      </div>
    );
  }

  correct() {
    <div>
      <h1>Correct!</h1>
    </div>
  }

  gameOver() {
    <div className="gameover">
        <h1>gameover</h1>
    </div>
  }

  render() {
    var questionList = this.answer();
    return this.QuestionDisplay(questionList);
  }
}

export default Questions;
