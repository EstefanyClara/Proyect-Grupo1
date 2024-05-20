import React from 'react';
import './button.css'; // Importa el archivo CSS

const Button = ({ onClick, children }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
