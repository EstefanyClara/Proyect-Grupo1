import React, { useState, useEffect, useContext } from "react";
import { getGame } from "../../Api/Index";
import "./GameCard.css";
import { ThemeContext } from "../Context/Context";
import Plataforms from "../Plataforms/Plataforms";
const GameCard = ({ gameData, onClick }) => {
  // const [gameData, setGameData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const themeSettings = useContext(ThemeContext);
  const [showOverlay, setShowOverlay] = useState(false);

  // useEffect(() => {
  //   const fetchGameData = async () => {
  //     try {
  //       const data = await getGame(gameId);
  //       setGameData(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching game data:", error);
  //       setError(error);
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchGameData();
  // }, [gameId]);

  return (
    <>
      <div className={`card-${themeSettings.mode}`} onClick={onClick}>
        <img
          src={gameData.background_image}
          alt={gameData.name}
          className="card-image"
        />
        <div className="card-content">
          <h2>{gameData.name}</h2>
          <p className="ranking">#{gameData.rating}</p>
          <div className="card-details">
            <p className="text-details">
              <span className="label">Release date:</span> {gameData.released}
            </p>
            <Plataforms platforms={gameData.platforms} />
          </div>
          <p className="text-details">
            <span className="label">Genres</span>:{" "}
            {gameData.genres.map((genre) => genre.name).join(", ")}
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
