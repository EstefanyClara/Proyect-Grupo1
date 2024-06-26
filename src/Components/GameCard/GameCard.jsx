import React, { useState, useEffect, useContext } from "react";
import {ThemeContext} from "../Context/Context";
import MySkeleton from "../MySkeleton/MySkeleton";
import Plataforms from "../Plataforms/Plataforms";
const GameCard = ({ gameData, listNumber, isLoading }) => {
  
  const themeSettings = useContext(ThemeContext);
  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div
        className={`card-${themeSettings.mode}`}
        style={{
          background: `linear-gradient(rgba(0, 0, 255, 0), rgba(0, 0, 0, 1)),
            url(${gameData?.background_image}) no-repeat`,
        }}
      >
        {isLoading ? (
          <MySkeleton />
        ) : (
          <div className="loading-content">
            <h1 className="Title">{gameData?.name}</h1>
            <Plataforms plataforms={gameData?.parent_platforms} />
            <p>#{listNumber}</p>
            <div className="details-block">
              <p>Realase Date: {gameData?.released}</p>
              <p>
                Genres:{" "}
                {gameData?.genres.map((genre) => {
                  genre;
                })}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
