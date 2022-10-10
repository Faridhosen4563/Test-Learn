import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic
    return (
        <div className="card w-96 bg-slate-600 border-2 border-black text-white">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Topic name : {name}</h2>
                <p>Quiz quantity : {total}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Topic;