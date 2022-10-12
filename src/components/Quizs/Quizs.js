import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const quizs = useLoaderData().data;
    const quizQuestions = quizs.questions
    return (
        <div >
            <h2 className='my-12 text-center text-2xl font-bold'>Topic : {quizs.name}</h2>
            <form>
                {
                    quizQuestions.map((quiz, idx) => <Quiz
                        idx={idx}
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </form>
        </div>
    );
};

export default Quizs;