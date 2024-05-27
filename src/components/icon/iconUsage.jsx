import React from 'react';
import Icon from './icon';
import { useContext } from "react";
import { ThemeContext } from "../context/context";

const IconUsage = ({ uid, color, size, valign }) => {
  const themeSettings = useContext(ThemeContext);
  const c2olor = themeSettings?.mode === 'dark' ? '#FFFFFF' : '#36B972';


  return <Icon uid={uid} color={c2olor} size={size} valign={valign} />;    
};

export default IconUsage;
