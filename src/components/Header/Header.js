import React from 'react';
import img from '../../image/farid.png'
const Header = () => {
    return (
        <div className='text-center my-20'>
            <img className='mx-auto border-2 border-black rounded-full' src={img} alt="" />
            <p className='text-xl font-medium my-4 md:w-9/12 md:mx-auto'>This is our fantastic project. This site main purpose quiz. In this web site we create some question, you solve this question. Here have some question. Here have 4 topic some question. You can give test on topic whatever you like. This site purpose test and learn</p>
        </div>
    );
};

export default Header;