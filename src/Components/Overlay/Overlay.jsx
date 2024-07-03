import React from "react";
import "./Overlay.css";

const Overlay = ({ gameData, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={gameData.background_image} alt={gameData.name} />
        <h1>{gameData.name}</h1>
        <p>Release Date: {gameData.released}</p>
        <p>Genres: {gameData.genres.map((genre) => genre.name).join(", ")}</p>
        <p>{gameData.description_raw}</p>
      </div>
    </div>
  );
};

export default Overlay;
