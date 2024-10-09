import React, { useState, useContext } from "react"
import FinalScreen from "./components/FinalScreen";
import PrimaryMenu from "./components/PrimaryMenu";
import Quiz from "./components/Quiz";
import { QuizContext } from "./Helpers/Context";

import './App.css';

function App() {
  const [quizState, setQuizState] = useState("menu");
  const [score, setScore] = useState("0");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ quizState, setQuizState, score, setScore }} >
        {quizState === "menu" && <PrimaryMenu />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "finalScreen" && <FinalScreen />}
      </QuizContext.Provider>
    </div >
  );
}

export default App;
