import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({ quiz, idx }) => {
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
        <div className='w-9/12 mx-auto border-2 border-gray-500 p-4 md:p-8 my-6'>
            <div className='flex justify-between items-center'>
                <li className='my-8 text-xl font-medium'>Q{idx + 1}:{question}</li>
                <EyeIcon className='w-6 h-6'></EyeIcon>

            </div>
            {
                options.map((option, idx) => <div
                    key={idx}
                >
                    <div className='flex items-center w-11/12 md:w-1/2 mb-2 p-4 border border-black'>
                        <input onClick={() => handleOption(option)} type="radio" name="radio-1" className="radio" />
                        <p className='ml-4'>{option}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Quiz;