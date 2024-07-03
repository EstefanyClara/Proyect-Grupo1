import React from 'react';
import './Button.css'; // Importa el archivo CSS
import IconUsage from '../Icon/IconUsage';
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

const Button = ({ onClick, children, iconName, iconColor, iconSize, estilo}) => {
  const themeSettings = useContext(ThemeContext);
  if(estilo){
    return (
      <button className={'custom-button-' + themeSettings.mode + '-' + estilo} onClick={onClick}>
        {iconName && <IconUsage  uid={iconName} color={iconColor} size={iconSize} valign="middle" />}
        {children}
      </button>
    );
  }
  return (
    <button className={'custom-button-' + themeSettings.mode } onClick={onClick}>
      {iconName && <IconUsage  uid={iconName} color={iconColor} size={iconSize} valign="middle" />}
      {children}
    </button>
  );
};

export default Button;
