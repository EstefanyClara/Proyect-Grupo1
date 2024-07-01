import "./DashBoard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LogoutModal } from "../../Components/LogoutModal/LogoutModal";
import { Navbarra } from "../../Components/Navbarra/Navbarra";
import { ThemeContext } from "../../Components/Context/Context";
import { useContext, useEffect, useState } from "react";
import { getGames } from "../../Api/Index";
import  GameCard  from "../../Components/Card/GameCard";



export const DashBoard = () => {
  const themeSettings = useContext(ThemeContext);
  const [gameList, setGameList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const newGameList = await getGames();
        setGameList(newGameList);
      }catch(error){
        console.error("Error fetching game data", error);
      }
      setIsLoading(false);
    }; 
    fetchGameData();
  }, []);

  return (
    <div className={"background-" + themeSettings.mode}> 
      <Navbarra isPlain={false} />
      <h1> New And Trending </h1>
      <p> Based on player counts and release date</p>
      <div className="alineacion">
        <LogoutModal />
      <div className="container">
      <div className="game-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          gameList.map((game) => (
            <GameCard key={game.id} gameId={game.id} />
          ))
        )}
        </div>
      </div>
    </div>
    </div> 
  );
};
export default DashBoard;
