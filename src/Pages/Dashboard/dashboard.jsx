import { Navbarra } from "../../components/NavBarra/NavBarra";
import "./dashboard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {LogoutModal} from "../../components/LogoutModal/LogoutModal";
import { useContext } from "react";
import { ThemeContext } from "../../components/context/context";


export const Dashboard = () => {
    const themeSettings = useContext(ThemeContext);
    return (
        <body className={'custom-background-' + themeSettings.mode}>
        <div >
            <Navbarra/>
            <h1> New And Trending </h1>
            <p> Based on player couts and release date</p>
            <LogoutModal/>
        </div>
        </body>
    );
}; export default Dashboard;