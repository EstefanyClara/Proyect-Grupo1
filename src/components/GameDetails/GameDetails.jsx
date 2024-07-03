import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getGame } from "../../Api/Index";
import { ThemeContext } from "../Context/Context";
import Skeleton from "../MySkeleton/MySkeleton";
import Plataforms from "../Plataforms/Plataforms";
import Button from "../Buttons/Button";
import "./GameDetails.css";

const GameDetails = () => {
  const { gameId } = useParams();
  const [gameData, setGameData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const themeSettings = useContext(ThemeContext);

  useEffect(() => {
    const fetchGameData = async () => {
      setIsLoading(true);
      try {
        const game = await getGame(gameId);
        setGameData(game);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
      setIsLoading(false);
    };

    fetchGameData();
  }, [gameId]);

  return (
    <div className="container">
      <div
        className={`game-details game-details-${themeSettings.mode}`}
        style={{
          background: gameData
            ? `linear-gradient(rgba(0, 0, 255, 0), rgba(0, 0, 0, 1)), url(${gameData.background_image}) no-repeat`
            : "none",
        }}
      >
        {isLoading ? (
          <Skeleton />
        ) : (
          <div className="loading-content">
            <Plataforms plataforms={gameData?.parent_platforms} />
            <h1 className="Title">{gameData?.name}</h1>
            <p>{gameData?.released}</p>
            <p className="Description">{gameData?.description_raw}</p>
            <Button>Add to wishlist</Button>
            <Button>Purchase</Button>
            <div className="container-details">
              <div>{gameData?.platforms.map((platform) => <p key={platform.platform.id}>{platform.platform.name}</p>)}</div>
              <div>{gameData?.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}</div>
              <div>{gameData?.released}</div>
              <div>{gameData?.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDetails;
