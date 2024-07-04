import React from 'react';
import './modal.css';
import { getGame } from '../../Api/Index';
import { useEffect, useState } from 'react';
import Plataforms from '../Plataforms/Plataforms';
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
  }, [game.id]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {gameData && (
          <>
            <img className="background-image" src={gameData.background_image} alt={gameData.name} />
              <h2>{gameData.name}</h2>
            <div className="modal-header">
              <div className="tags">
                <span>{gameData.released.replace("-","/")}</span>
                <span>#{gameData.rating_top}</span>
                <span>{gameData.genres[0].name}</span>
              </div>
            </div>
            <p className="modal-description">{gameData.description_raw}</p>
            <div className="actions">
              <button className="wishlist">Add to wishlist 💚</button>
              <button className="purchase">Purchase</button>
            </div>
            <div className="details">
              <div className="platforms">
                <span className='labels'>Platforms:</span >
                <Plataforms platforms={gameData.platforms} />
              </div>
              <div className="genres">
                <span className='labels'>Genre:</span >
                <p>{gameData.genres.map(genre => genre.name).join(', ')}</p>
              </div>
            </div>
            {/* <div className="screenshots">
              {gameData.short_screenshots.map((id, image) => (
                <img key={id} src={image} alt={`image ${id + 1}`} />
              ))}
            </div> */}
          </>
        )}
      </div>
    </div>
  );
};

export default ModalGrande;
