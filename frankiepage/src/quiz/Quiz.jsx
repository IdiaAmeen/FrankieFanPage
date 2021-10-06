import React, { Component } from "react";
import { QuizData } from "./QuizData";

export class Quiz extends Component {
  state = {
    userAnswer:null, //current users answer
    currentIndex:0,  //current questions index
    options: [],     //the four options
    quizEnd: false,  //determines if it's the last question
    score: 0,        //holds the score
    disabled: true   // determines the status of the buttons
}
  render() {
    return (loadQuiz = () => {
      const {currentIndex} = this.state //get the current question index
      this.setState(() => {
          return {
              question: QuizData[currentIndex].question,
              options : QuizData[currentIndex].options,
              answer: QuizData[currentIndex].answer          
          }
      }
      )
  })
  }
}

export default Quiz;
