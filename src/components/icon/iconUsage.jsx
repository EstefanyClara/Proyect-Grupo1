import React from "react";
import Icon from "./Icon";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

const IconUsage = ({ uid, color, size, valign }) => {
  const themeSettings = useContext(ThemeContext);
  const c2olor = themeSettings?.mode === "dark" ? "#FFFFFF" : "#36B972";

  return <Icon uid={uid} color={c2olor} size={size} valign={valign} />;
};

export default IconUsage;
