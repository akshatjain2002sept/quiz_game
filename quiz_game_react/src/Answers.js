import React, { Component } from "react";

export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: undefined,
      text: props.text,
      correct_answer: props.correct,
      clicked: false,
    };
  }

  render() {
    var letter = this.state.letter;

    return (
      <div className="answers">
        <button>
          {this.state.letter}
          {this.state.text}
        </button>
      </div>
    );
  }
}
