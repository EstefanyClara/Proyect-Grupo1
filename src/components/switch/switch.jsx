import React from 'react';
import './switch.css';
import { useContext } from "react";
import { ThemeContext } from "../context/context";

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
            <label className="switch-label" htmlFor="react-switch-new">
                <span className="switch-label-text on-text">ON</span>
                <span className="switch-button"/>
                <span className="switch-label-text off-text">OFF</span>
            </label>
        </div>
    );
};

export default Switch;
