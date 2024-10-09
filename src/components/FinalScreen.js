
import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';
import "../App.css";

function FinalScreen() {
    const { score, setScore, setQuizState } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setQuizState("menu");
    };
    return (
        <div className="FinalScreen">
            <h1>Quiz Finished</h1>
            <h3>{score}/{Questions.length}</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
}

export default FinalScreen
