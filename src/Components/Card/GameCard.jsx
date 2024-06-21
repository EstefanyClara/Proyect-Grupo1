import React, { useState, useEffect } from 'react';

const GameCard = ({ gameId }) => {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await fetch(`API_ENDPOINT/${gameId}`);
        const data = await response.json();
        setGameData(data);
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    };

    fetchGameData();
  }, [gameId]);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <img src={gameData.image} alt={gameData.name} />
      <h2>{gameData.name}</h2>
      <p>{gameData.description}</p>
      <p>Released: {gameData.releaseDate}</p>
      <p>Genres: {gameData.genres}</p>
      <p>{gameData.index}</p>
      <p>{gameData.compatibility}</p>
    </div>
  );
};

export default GameCard;
