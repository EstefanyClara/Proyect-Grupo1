import { Navbar } from "../../components/Navbar/navbar";
import "./dashboard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {LogoutModal} from "../../components/LogoutModal/LogoutModal";


export const Dashboard = () => {

    return (
        <div>
            <Navbar/>
            <h1> New And Trending </h1>
            <p> Based on player couts and release date</p>
            <LogoutModal/>
        </div>
    );
}; export default Dashboard;