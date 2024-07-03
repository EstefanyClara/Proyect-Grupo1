import "./DashBoard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import { FaBullseye } from "react-icons/fa6";
import { LogoutModal } from "../../Components/LogoutModal/LogoutModal";
import { Navbarra } from "../../Components/Navbarra/Navbarra";
import { ThemeContext } from "../../Components/Context/Context";
import  GameCard  from "../../Components/Card/GameCard";
import Button from "../../Components/Buttons/Button";
import ModalGrande from "../../Components/ModalGrande/modalGrande";
import { getGames } from "../../Api/Index";


export const DashBoard = () => {
  const themeSettings = useContext(ThemeContext);
  const [gameList, setGameList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);

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

  const handleCardClick = (game) => {
    setSelectedGame(game);
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
  };

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
            <GameCard key={game.id} gameId={game.id} onClick={()=> handleCardClick(game)}  />
          ))
        )}
        </div>
      </div>
    </div>
    {selectedGame && <ModalGrande game={selectedGame} onClose={handleCloseModal} />}
    </div> 
  );
};
export default DashBoard;
