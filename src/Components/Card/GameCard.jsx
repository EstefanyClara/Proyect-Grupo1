import React, { useState, useEffect, useContext } from "react";
import { getGame } from "../../Api/Index";
import "./GameCard.css";
import { ThemeContext } from "../Context/Context";
import Overlay from "../Overlay/Overlay";

const GameCard = ({ gameId }) => {
  const [gameData, setGameData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const themeSettings = useContext(ThemeContext);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const data = await getGame(gameId);
        setGameData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching game data:", error);
        setError(error);
        setIsLoading(false);
      }
    };
    fetchGameData();
  }, [gameId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading game data.</div>;
  }

  const handleCardClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div className={`card-${themeSettings.mode}`} onClick={handleCardClick}>
        <img src={gameData.background_image} alt={gameData.name} />
        <div className="card-content">
          <h2>{gameData.name}</h2>
          <p className="ranking">#{gameData.rating}</p>
          <p className="release-date">Release date: {gameData.released}</p>
          <p className="genres">
            Genres: {gameData.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
      {showOverlay && (
        <Overlay gameData={gameData} onClose={handleCloseOverlay} />
      )}
    </>
  );
};

export default GameCard;
