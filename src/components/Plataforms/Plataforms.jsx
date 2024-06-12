import React from 'react';
import IconUsage from '../icon/iconUsage';
import { useContext, useState } from "react";
import { ThemeContext } from "../context/context";

import './Plataforms.css';
const Plataforms = ({ plataforms }) => {
    const [plataformsName, setPlataformsName] = useState(getPlatforms(plataforms));
    const themeSettings = useContext(ThemeContext);
    const path = "src/assets/icons/"
    console.log(plataformsName)
    return (
        <div className={'plataform-' + themeSettings.mode}>
            {plataformsName.map((plataform) => (
                <img key={plataform} src={path + plataform + ".svg"} alt={plataform} />
            ))}
        </div>
    );
};

function getPlatforms(platforms) {
    const namesPlatform = [];
    platforms.forEach(platformObj => {
        namesPlatform.push(platformObj.platform.slug);
    });
    return namesPlatform;
}

export default Plataforms;