import { Navbar } from "../../components/Navbar/navbar";
import "./dashboard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {SideBar} from "../../components/SideBar/SideBar";
import { useState } from 'react';


export const DashBoard = () => {
    const [category, setCategory] = useState('');


    return (
        <div>
            <Navbar/>
            <h1> New And Trending </h1>
            <p> Based on player couts and release date</p>
            <SideBar onChangeCategory={setCategory}/>
            
        </div>
    );
}; export default DashBoard;