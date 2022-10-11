import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto my-6'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4">
                <div className="collapse-title text-xl font-medium">
                    1. What is the react purpose?
                </div>
                <div className="collapse-content">
                    <p> The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don't have to write various codes for the same features. Furthermore, if any changes are made in any particular part, it will not affect other parts of the application. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4">
                <div className="collapse-title text-xl font-medium">
                    2. How does Context API work?
                </div>
                <div className="collapse-content">
                    <p>Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    <ol className='list-decimal mx-6 my-4'>
                        <li>Initialize the Context</li>
                        <li>Create the Provider</li>
                        <li>Create the Consumer</li>
                    </ol>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-4">
                <div className="collapse-title text-xl font-medium">
                    3. What is the useRef?
                </div>
                <div className="collapse-content">
                    <p> The useRef is the react hook. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;