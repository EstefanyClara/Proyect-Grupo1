import "./DashBoard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { FaBullseye } from "react-icons/fa6";
import { LogoutModal } from "../../Components/LogoutModal/LogoutModal";
import { Navbarra } from "../../Components/Navbarra/Navbarra";
import GameCard from "../../Components/GameCard/GameCard";
import { getGames } from "../../Api/Index";



export const DashBoard = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGameData = async () => {
      setIsLoading(true);

      try {
        const game = await getGames();
        setGames(game.results);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
      setIsLoading(false);
    };
    fetchGameData();
  }, []);

  return (
    <div>
      <Navbarra isPlain={false} />
      <h1> New And Trending </h1>
      <p> Based on player couts and release date</p>
      <LogoutModal />
      <div className="game-box">
        {games.map((game, index) => (
          <GameCard key={index} gameData={game} listNumber={index + 1} isLoading={isLoading} />
        ))}
      </div>
    </div>
  );
};
export default DashBoard;
