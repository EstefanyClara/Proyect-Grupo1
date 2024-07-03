import React from 'react';
import './modal.css';
import { getGame } from '../../Api/Index';
import { useEffect, useState, useContext } from 'react';


const ModalGrande = ({ game, onClose }) => {
 const [gameData, setGameData] = useState(null);
 

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const data = await getGame(game.id);
        setGameData(data);
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    };
    fetchGameData();
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <img src={gameData?.background_image} alt={gameData?.name} />
        <h2>{gameData?.name}</h2>
        <p className="relase">Release date: {gameData?.released}</p>
        <p className="generes">Genres: {gameData?.genres.map(genre => genre.name).join(', ')}</p>
        <p className="rating">Rating: {gameData?.rating}</p>
        <p className="modal-description">Description:{gameData?.description}</p>

        
      </div>
    </div>
  );
};

export default ModalGrande;