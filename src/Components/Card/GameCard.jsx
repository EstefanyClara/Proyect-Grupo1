import React, { useState, useEffect, useContext } from 'react';
import { getGame } from '../../Api/Index';
import './GameCard.css';
import { ThemeContext } from '../Context/Context';

const GameCard = ({ gameId, onClick }) => {
  const [gameData, setGameData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const themeSettings = useContext(ThemeContext);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const data = await getGame(gameId);
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
    <div className={"card-"+themeSettings.mode } onClick={onClick}>
      <img src={gameData.background_image} alt={gameData.name} />
      <div className='card-content'>
        <h2>{gameData.name}</h2>
        <p className='ranking'>#{gameData.rating}</p>
        <p className='relase-date'>Release date: {gameData.released}</p>
        <p className="genres">Generes: {gameData.genres.map(genre => genre.name).join(', ')}</p>
        
        </div>
      </div>
  );
};

export default GameCard;
