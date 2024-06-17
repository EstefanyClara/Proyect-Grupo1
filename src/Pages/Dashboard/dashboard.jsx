import { NavBarra} from "../../Componentss/NavBarra/NavBarra";
import "./DashBoard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LogoutModal } from "../../Componentss/LogoutModal/LogoutModal";

export const DashBoard = () => {
  return (
    <div>
      <NavBarra />
      <h1> New And Trending </h1>
      <p> Based on player couts and release date</p>
      <LogoutModal />
    </div>
  );
};
export default DashBoard;
