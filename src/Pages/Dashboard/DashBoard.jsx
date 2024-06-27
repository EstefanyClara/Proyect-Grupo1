import "./DashBoard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LogoutModal } from "../../Components/LogoutModal/LogoutModal";
import { Navbarra } from "../../Components/Navbarra/Navbarra";
import { FaBullseye } from "react-icons/fa6";



export const DashBoard = () => {
  return (
    <div>
      <Navbarra isPlain={false} />
      <h1> New And Trending </h1>
      <p> Based on player couts and release date</p>
      <LogoutModal />
    </div>
  );
};
export default DashBoard;
