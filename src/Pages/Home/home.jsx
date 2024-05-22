import React from 'react';
import { Routes } from 'react-router-dom';
import Button from '../../assets/buttons/button';
import MyPage from '../../assets/icon/iconUsage';

const Home = () => {
    return (
        <div>
            <h1>Game Finder</h1>
            <Button estilo={'custom-button'}>Login</Button>

            <Button estilo={'social-media-style-button '} iconName="smiling-face" iconColor="#f09" iconSize="24"  >Login with Facebook </Button>
        </div>
    );
};

export default Home;