import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const topics = useLoaderData();
    console.log(topics);
    return (
        <div>
            <h2>this is home site</h2>
        </div>
    );
};

export default Home;