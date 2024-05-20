import React from 'react';
import { Routes } from 'react-router-dom';
import Button from '../../assets/buttons/button';
import MyPage from '../../assets/icon/iconUsage';

const Home = () => {
    return (
        <div>
            <h1>Game Finder</h1>
            <Button>Login</Button>
            <MyPage></MyPage>
        </div>
    );
};

export default Home;