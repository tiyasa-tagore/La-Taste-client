import React from 'react';
import Header from '../Header/Header';
import HomeFirst from './HomeFirst/HomeFirst';
import Chefs from '../Chefs/Chefs';

const Home = () => {
    return (
        <div>
            <HomeFirst></HomeFirst>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;