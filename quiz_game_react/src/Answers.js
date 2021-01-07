import React, { Component } from "react";

export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: props.letter,
      text: props.text,
      correct_answer: props.correct,
      clicked: false,
    };
  }

  click(){
    this.state.clicked= true;
  }

  render() {
    var letter = this.state.letter;
    var text = this.state.text;

    return (
      <div className="answers">
        <button onClick={this.click()}>
          {letter}) {text}
        </button>
      </div>
    );
  }
}
