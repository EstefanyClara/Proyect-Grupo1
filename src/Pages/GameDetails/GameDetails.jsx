import React from "react";
import { useState, useEffect, useContext } from "react";
import NavBarSimple from "../../Components/NavBarSimple/NavBarSimple";

import { ThemeContext } from "../../Components/Context/Context";
import { getGame } from "../../Api/Index";


const GameDetails = (gameId) => {
  const [gameData, setGameData] = useState(null);
  const themeSettings = useContext(ThemeContext);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const game = await getGame(3498);
        setGameData(game);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };

    fetchGameData();
  }, []);

  return (
    <div className={"game-details-" + themeSettings.mode}>
      <NavBarSimple />
      <h1>{gameData.name}</h1>
    </div>
  );
};

export default GameDetails;
