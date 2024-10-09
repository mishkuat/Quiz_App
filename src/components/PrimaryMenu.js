
import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import "../App.css";

export default function PrimaryMenu() {
    const { quizState, setQuizState } = useContext(QuizContext);
    return (
        <div className="menu">
            <button onClick={() => { setQuizState('quiz'); }}
            >
                Start Quiz</button>
        </div >
    )
}


