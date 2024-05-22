import React from 'react';
import MyInput from '../../components/MyInput/MyInput';
import { Routes } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h1>Game Finder</h1>
            <MyInput type="text" placeHolder="Prueba hola" name="Hola" status="disable" / > 
        </div>
    );
};

export default Home;