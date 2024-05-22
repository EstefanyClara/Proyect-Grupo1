import React from 'react';
import { Routes } from 'react-router-dom';
import Button from '../../assets/buttons/button';

const Home = () => {
    return (
        <div>
            <h1>Game Finder</h1>
            <Button estilo={'custom-button'}>Login</Button>
            <Button estilo={'social-media-style-button '} iconName="facebook" iconColor="#f09" iconSize="24"  >Login with Facebook </Button>
            <Button estilo={'social-media-style-button '} iconName="twitter" iconColor="#f09" iconSize="24"  >Login with Twitter </Button>
            <Button estilo={'social-media-style-button '} iconName="google" iconColor="#f09" iconSize="24"  >Login with Google </Button>
        </div>
    );
};  

export default Home;