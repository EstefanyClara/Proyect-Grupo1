import { Navbar } from "../../components/Navbar/navbar";
import "./dashboard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {MyNav} from "../../components/Nav/myNav";


export const Dashboard = () => {

    return (
        <div>
            <Navbar/>
            <h1> New And Trending </h1>
            <p> Based on player couts and release date</p>
            <MyNav/>
        </div>
    );
}; export default Dashboard;