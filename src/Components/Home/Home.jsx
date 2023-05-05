import React from 'react';
import Header from '../Header/Header';
import HomeFirst from './HomeFirst/HomeFirst';
import Chefs from '../Chefs/Chefs';
import Homesecond from './HomeSecond/Homesecond';
import HomeThird from './HomeThird/HomeThird';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <HomeFirst></HomeFirst>
            <Chefs></Chefs>
            <Container>
            <Homesecond></Homesecond>
            <HomeThird></HomeThird>
            </Container>
        </div>
    );
};

export default Home;