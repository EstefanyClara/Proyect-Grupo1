import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { getGame } from '../../api';
import { ThemeContext } from "../../components/context/context";
import NavBarSimple from '../../components/NavBarSimple/NavBarSimple';
import Skeleton from '../../components/MySkeleton/MySkeleton';
import Plataforms from '../../components/Plataforms/Plataforms';
const GameDetails = (gameId) => {
    const [gameData, setGameData] = useState(null);
    const themeSettings = useContext(ThemeContext);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const fetchGameData = async () => {
            setisLoading(true);
            try {
                const game = await getGame(3498);
                setGameData(game);
            } catch (error) {
                console.error('Error fetching game data:', error);
            }
            setisLoading(false);
        };

        fetchGameData();
    }, []);


    if (isLoading) {
        return(
        <div className={'game-details-' + themeSettings.mode}>
            <NavBarSimple />
            <Skeleton />;
        </div>
        );
    } else {
        return (
            <div className={'game-details-' + themeSettings.mode}>
                <NavBarSimple />
                <Plataforms plataforms={gameData?.parent_platforms}/>
                
                <card>{gameData?.name}</card>
            </div>
        );
    }

};

export default GameDetails;