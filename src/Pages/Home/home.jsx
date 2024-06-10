import { React, useState } from 'react';
import { Routes } from 'react-router-dom';
import { ThemeContext } from "../../components/context/context";
import MyInput from '../../components/MyInput/MyInput';
import Button from '../../components/buttons/button';
import Switch from '../../components/switch/switch';
import MyModal from "../../components/Modal/MyModal"

const Home = () => {
    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Game Finder</h1>
            <Switch></Switch>
            <h1>Game Finder</h1>
            <Button estilo={'custom-button-ligth'}>Login</Button>
            <Button iconName="facebook" iconColor="#f09" iconSize="24"  >Login with Facebook </Button>
            <Button estilo={'social-media-style-button-ligth'} iconName="twitter" iconColor="#f09" iconSize="24"  >Login with Twitter </Button>
            <Button estilo={'social-media-style-button-ligth'} iconName="google" iconColor="#f09" iconSize="24"  >Login with Google </Button>

            <div>
                <h1>Game Finder</h1>
                <button onClick={() => setShow(true)}>
                    Custom Width Modal
                </button>
                <MyModal title="titulo" show={show}>
                    <p>Textoooo</p>
                </MyModal>
            </div>
        </div>
    );
};

export default Home;