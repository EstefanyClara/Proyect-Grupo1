// src/components/Switch.js
import React from 'react';
import './switch.css';
import { useContext } from "react";
import { ThemeContext } from "../context/context"; // Asegúrate de crear este archivo CSS para los estilos del switch

const Switch = ({}) => {

    const themeSettings = useContext(ThemeContext);

    return (
        <div className="switch-container">
            <input
                onChange={() => {
                    themeSettings.switchMode();
                }}
                checked={themeSettings.mode === "dark"}
                className="switch-checkbox"
                id="react-switch-new"
                type="checkbox"
            />
        </div>
    );
};
export default Switch;
