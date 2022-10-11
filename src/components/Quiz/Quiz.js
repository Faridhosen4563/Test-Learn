import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz, idx }) => {
    const [open, setOpen] = useState(false);
    const { question, options, correctAnswer } = quiz

    const handleOption = (ans) => {
        const right = correctAnswer === ans;
        if (right) {
            toast.success('Correct! Your answer is right.', {
                position: 'top-center',
            })
        }
        else {
            toast.error('Incorrect! Your answer is wrong.', {
                position: 'top-center'
            })
        }
    }



    return (
        <div className='w-9/12 mx-auto border-2 border-gray-500 p-4 md:p-8 my-6'>
            <div className='flex justify-between items-center'>
                <li className='my-8 text-xl font-medium'>Q{idx + 1}:{question}</li>
                <button onClick={() => setOpen(!open)} className='w-6 h-6'>
                    {
                        open ? <EyeIcon ></EyeIcon> : <EyeSlashIcon></EyeSlashIcon>
                    }
                </button>


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
            {
                <div>
                    <h2 className={`text-lg font-normal text-blue-800 mt-6 ${!open ? 'hidden' : 'block'}`}>Correct Answer : {correctAnswer}</h2>
                </div>
            }
            <ToastContainer />
        </div>
    );
};

export default Quiz;