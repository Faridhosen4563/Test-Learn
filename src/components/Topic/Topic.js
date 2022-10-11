import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic
    return (
        <div className="my-12 card w-full bg-slate-600 border-2 border-black text-white">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Topic name : {name}</h2>
                <p>Quiz quantity : {total}</p>
                <div className="card-actions">
                    <Link to={`/topics/${id}`}>
                        <button className="btn btn-wide text-blue-300 btn-outline">Start Quiz <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;