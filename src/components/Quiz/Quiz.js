import React, { useState } from 'react';

const Quiz = ({ quiz }) => {
    const [cart, setCart] = useState([]);



    const { question, options } = quiz
    console.log(quiz);

    const handleOption = (ans) => {
        const right = quiz.correctAnswer === ans;
        if (right) {
            alert('Right ans')
        }
        else {
            alert('wrong ans')
        }
    }
    return (
        <div className='w-9/12 mx-auto'>
            <li className='my-8 text-xl font-medium'>{question}</li>
            {
                options.map((option, idx) => <div
                    key={idx}
                >
                    <button className='flex items-center w-11/12 md:w-1/2 mb-2 p-4 border border-black'>
                        <input onClick={() => handleOption(option)} type="radio" name="radio-1" className="radio" />
                        <p className='ml-4'>{option}</p>
                    </button>
                </div>)
            }
        </div>
    );
};

export default Quiz;