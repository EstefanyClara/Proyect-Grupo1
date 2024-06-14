import { NavBarra} from "../../Components/NavBarra/NavBarra";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LogoutModal } from "../../Components/LogoutModal/LogoutModal";

export const Dashboard = () => {
  return (
    <div>
      <NavBarra />
      <h1> New And Trending </h1>
      <p> Based on player couts and release date</p>
      <LogoutModal />
    </div>
  );
};
export default Dashboard;
