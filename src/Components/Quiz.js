import React, { useState, useContext } from "react";
import { QuizContext } from "../Helper/context";
import { questions } from "../Helper/questions";
import "../App.css";

function Quiz() {
  const { gameState, setGameState, score, setScore } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [choice, setChoice] = useState("");
  const next = () => {
    if (questions[currQuestion].answer == choice) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };
  const prev = () => {
    if (questions[currQuestion].answer == choice) {
      setScore(score - 1);
    }
    setCurrQuestion(currQuestion - 1);
  };
  return (
    <div className="quiz">
      <h1 className="heading2">Question {currQuestion + 1}</h1>
      <h1 className="heading4">{questions[currQuestion].prompt}</h1>
      <div className="options">
        <button className="optionbutton" onClick={() => setChoice("A")}>
          {questions[currQuestion].optionA}
        </button>
        <br></br>
        <button className="optionbutton" onClick={() => setChoice("B")}>
          {questions[currQuestion].optionB}
        </button>
        <br></br>
        <button className="optionbutton" onClick={() => setChoice("C")}>
          {questions[currQuestion].optionC}
        </button>
        <br></br>
        <button className="optionbutton" onClick={() => setChoice("D")}>
          {questions[currQuestion].optionD}
        </button>
        <br></br>
      </div>
      <div className="buttons">
        {currQuestion == 0 ? (
          <button
            className="pushbutton"
            onClick={() => {
              setGameState("menu");
            }}
          >
            Menu
          </button>
        ) : (
          <button className="pushbutton" onClick={prev}>
            Previous
          </button>
        )}
        {currQuestion == questions.length - 1 ? (
          <button
            className="submitbutton"
            onClick={() => {
              if (questions[currQuestion].answer == choice) {
                setScore(score + 1);
              }
              setGameState("end");
            }}
          >
            Submit
          </button>
        ) : (
          <button className="pushbutton" onClick={next}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
