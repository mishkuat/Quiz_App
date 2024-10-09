import React, { useState, useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Context';

function Quiz() {
    const { score, setScore, quizState, setQuizState } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChoosen, setOptionChoosen] = useState("");



    const nextQuestion = () => {
        if (Questions[currQuestion].answer == optionChoosen) {
            setScore(prevScore => prevScore + 1);
            // setScore(score + 1);
        }

        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currQuestion].answer == optionChoosen) {
            setScore(prevScore => prevScore + 1);
            // setScore(score + 1);
        }
        setQuizState("finalScreen");
    };
    return (
        <div className="Quiz">
            <h1 >{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChoosen("A")}>{Questions[currQuestion].OptionA}</button>
                <button onClick={() => setOptionChoosen("B")}>{Questions[currQuestion].OptionB}</button>
                <button onClick={() => setOptionChoosen("C")}>{Questions[currQuestion].OptionC}</button>
                <button onClick={() => setOptionChoosen("D")}>{Questions[currQuestion].OptionD} </button>
            </div>
            {currQuestion == Questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (<button onClick={nextQuestion}>Next Question</button>)}

        </div>
    );
}

export default Quiz
