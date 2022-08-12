import React, { useContext } from "react";
import { QuizContext } from "../Helper/context";

import "../App.css";
export default function Menu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="menu">
      <h1 className="heading3">Click to Start Quiz</h1>
      <button 
        className="pushbutton" 
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start
      </button>
    </div>
  );
}
