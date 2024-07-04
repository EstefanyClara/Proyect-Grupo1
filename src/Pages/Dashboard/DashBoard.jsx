import "./DashBoard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import { LogoutModal } from "../../Components/LogoutModal/LogoutModal";
import { Navbarra } from "../../Components/Navbarra/Navbarra";
import { ThemeContext } from "../../Components/Context/Context";
import GameCard from "../../Components/Card/GameCard";
import Button from "../../Components/Buttons/Button";
import ModalGrande from "../../Components/ModalGrande/modalGrande";
import { getGames } from "../../Api/Index";
import MySkeleton from "../../Components/MySkeleton/MySkeleton";

export const DashBoard = () => {
  const themeSettings = useContext(ThemeContext);
  const [gameList, setGameList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(null); // URL de la siguiente página de la API
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const newGameList = await getGames();
        setGameList(newGameList.results);
        setNextPage(newGameList.next);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching game data", error);
        setError("Error fetching game data");
        setIsLoading(false);
      }
    };
    fetchGameData();
  }, []);

  const handleLoadNextPage = async () => {
    if (nextPage) {
      try {
        const response = await fetch(nextPage);
        if (!response.ok) {
          throw new Error("Failed to load next page");
        }
        const { results, next } = await response.json();
        setGameList((prevGameList) => [...prevGameList, ...results]); // Agrega los resultados nuevos a la lista existente
        setNextPage(next);
      } catch (error) {
        console.error("Error fetching next page data", error);
        setError("Error fetching next page data");
      }
    }
  };

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
        <div className="dashboard-container">
          <div className="game-list">
            {isLoading ? (
              <MySkeleton />
            ) : error ? (
              <p>{error}</p>
            ) : (
              gameList.map((game) => (
                <GameCard
                  key={game.id}
                  gameData={game}
                  onClick={() => handleCardClick(game)}
                />
              ))
            )}
          </div>
        </div>
      </div>
      {selectedGame && (
        <ModalGrande game={selectedGame} onClose={handleCloseModal} />
      )}
      {nextPage && (
        <Button
          onClick={handleLoadNextPage}
          estilo={"next"}
          iconName="right-chevron"
          iconColor="#f09"
          iconSize="24"
        ></Button>
      )}
    </div>
  );
};

export default DashBoard;
