import React, { useContext } from "react";
import { QuizContext } from "../Helper/context";
import { questions } from "../Helper/questions";
import "../App.css";

function End() {
  const { gameState, setGameState, score, setScore } = useContext(QuizContext);
  return (
    <div className="end">
      <h1 className="heading3">Quiz Ended</h1>
      <h1 className="heading2"> Your Score is {score}/{questions.length}</h1>
      
      <button
      className="pushbutton"
        onClick={() => {
          setScore(0);
          setGameState("menu");
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default End;
