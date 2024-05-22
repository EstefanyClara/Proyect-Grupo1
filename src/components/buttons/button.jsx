import React from 'react';
import './button.css'; // Importa el archivo CSS
import IconUsage from '../icon/iconUsage';
import { useContext } from "react";
import { ThemeContext } from "../context/context";

const Button = ({ onClick, children, iconName, iconColor, iconSize}) => {
  const themeSettings = useContext(ThemeContext);
  return (
    <button className={'social-media-style-button-' + themeSettings.mode } onClick={onClick}>
      {iconName && <IconUsage  uid={iconName} color={iconColor} size={iconSize} valign="middle" />}
      {children}
    </button>
  );
};

export default Button;