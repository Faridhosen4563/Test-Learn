import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    return (
        <div className='w-11/12 mx-auto my-40'>
            <LineChart
                width={350}
                height={300}
                data={data}
                margin={{
                    top: 15,
                    right: 30,
                    left: 10,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="4 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div >
    );
};

export default Statistics;