import React, { Component } from "react";

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionEasyList: [],
      questionMediumList: [],
      questionHardList: [],
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
    console.log("eneters questionUsefulInfo");
    var answer = new Array(question, correct_answer, answer2, answer3, answer4);
    return answer;
  }

  answer() {
    console.log("enters answer");
    const questionInfo = this.state.questionEasyList.map((question) =>
      this.questionUsefulInfo(
        question.question,
        question.correct_answer,
        question.incorrect_answers[0],
        question.incorrect_answers[1],
        question.incorrect_answers[2]
      )
    );
    console.log("QuestionInfo:", questionInfo);
    return questionInfo;
  }

  render() {
    var end = this.answer();
    console.log("enters render");
    // return [this.state.questionEasyList];
    return <div>{end}</div>;
  }
}
