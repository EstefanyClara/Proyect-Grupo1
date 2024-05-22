import React from 'react';
import { Routes } from 'react-router-dom';
import Button from '../../components/buttons/button';
import { ThemeContext } from "../../components/context/index";

const Home = () => {

    return (
        <div>
            <h1>Game Finder</h1>    
            <Button estilo={'custom-button-ligth'}>Login</Button>
            <Button estilo={'social-media-style-button-ligth'} iconName="facebook" iconColor="#f09" iconSize="24"  >Login with Facebook </Button>
            <Button estilo={'social-media-style-button-ligth'} iconName="twitter" iconColor="#f09" iconSize="24"  >Login with Twitter </Button>
            <Button estilo={'social-media-style-button-ligth'} iconName="google" iconColor="#f09" iconSize="24"  >Login with Google </Button>

        </div>
    );
};

export default Home;