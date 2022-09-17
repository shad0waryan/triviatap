import "./App.css";
import { Helmet } from "react-helmet";
import React, { useState, useContext } from "react";
import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import End from "./Components/End";
import { QuizContext } from "./Helper/context";
function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1 className="heading1">React Quiz App</h1>   
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quiz </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
