import React from 'react';

const Quiz = ({ quiz }) => {
    const { question, options } = quiz
    console.log(quiz);
    return (
        <div>
            <h2 className='my-12'>{question}</h2>
            {
                options.map((option, idx) => <div
                    key={idx}
                >
                    <input type="radio" name="radio-1" className="radio" />{option}
                </div>)
            }
        </div>
    );
};

export default Quiz;