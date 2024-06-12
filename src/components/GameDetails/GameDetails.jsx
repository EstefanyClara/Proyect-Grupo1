import React, { useState, useEffect, useContext } from "react";
import { getGame } from "../../api";
import { ThemeContext } from "../context/context";
import NavBarSimple from "../NavBarSimple/NavBarSimple";
import Skeleton from "../MySkeleton/MySkeleton";
import Plataforms from "../Plataforms/Plataforms";

import "./GameDetails.css";

const GameDetails = (gameId) => {
  const [gameData, setGameData] = useState(null);
  const themeSettings = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGameData = async () => {
      setIsLoading(true);
      try {
        const game = await getGame(3488);
        setGameData(game);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
      setIsLoading(false);
    };

    fetchGameData();
  }, []);

  return (
    <>
      <NavBarSimple />

      <div className="container">
        <div
          className={`game-details game-details-${themeSettings.mode}`}
          style={{
            background: `linear-gradient(rgba(0, 0, 255, 0), rgba(0, 0, 0, 1)),
            url(${gameData?.background_image}) no-repeat`,
          }}
        >
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className="loading-content">
              <Plataforms plataforms={gameData?.parent_platforms} />
              <h1 className="Title">{gameData?.name}</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameDetails;
