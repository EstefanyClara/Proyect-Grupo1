import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../Context/Context";
import MySkeleton from "../MySkeleton/MySkeleton";
import Plataforms from "../Plataforms/Plataforms";
import "./GameCard.css";
const GameCard = ({ gameData, listNumber, isLoading }) => {
  const themeSettings = useContext(ThemeContext);
  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`card card-${themeSettings.mode}`}>
      {isLoading ? (
        <MySkeleton />
      ) : (
        <>
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${gameData?.background_image})`,
            }}
          ></div>
          <div className="details">
            <div>
              <h1 className="title">{gameData?.name}</h1>
              <p className="number-info">#{listNumber}</p>
            </div>

            <div className="details-block">
              <p>Realase Date: {gameData?.released}</p>
              <p>
                Genres:{" "}
                {gameData?.genres.map((genre) => {
                  genre;
                })}
              </p>
            </div>
            <Plataforms plataforms={gameData?.parent_platforms} />
          </div>
        </>
      )}
    </div>
  );
};

export default GameCard;
