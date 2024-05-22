import React from 'react';
import './button.css'; // Importa el archivo CSS
import IconUsage from '../icon/iconUsage';

const Button = ({ onClick, children, iconName, iconColor, iconSize, estilo }) => {

  return (
    <button className={estilo} onClick={onClick}>
      {iconName && <IconUsage uid={iconName} color={iconColor} size={iconSize} valign="middle" />}
      {children}
    </button>
  );
};

export default Button;
