import React, { Component } from "react";
import "./GamePage.css";
import Questions from "./Questions.js";

var number = 0;
var isCorrect = true;

function GamePage() {
  //   number += 1;
  //   var item = new Questions();
  //   console.log(item.answer());
  return <Questions></Questions>;
}

function QuestionDisplay(questionList) {
  const information = questionList[number];
  const question = information[0];
  const answer1 = information[1];
  const answer2 = information[2];
  const answer3 = information[3];
  const answer4 = information[4];
  return (
    <div className="Game">
      <div className="question">Question: {question} </div>
      <div className="answers">
        <div className="answer1">{answer1}</div>
        <div className="answer2">{answer2}</div>
        <div className="answer3">{answer3}</div>
        <div className="answer4">{answer4}</div>
      </div>
    </div>
  );
}

export default GamePage;
