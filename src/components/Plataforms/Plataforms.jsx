import React from "react";
import IconUsage from "../Icon/Icon";
import { useContext, useState } from "react";
import { ThemeContext } from "../Context/Context";
import "./Plataforms.css";

const Plataforms = ({ platforms }) => {
  const [plataformsName, setPlataformsName] = useState(getPlatforms(platforms));
  const themeSettings = useContext(ThemeContext);
  const path = "src/assets/icons/";

  return (
    <div className={"plataform-" + themeSettings.mode}>
      {plataformsName?.map((plataform) => (
        <img key={plataform} src={path + plataform + ".svg"} alt={plataform} />
      ))}
    </div>
  );
};

function getPlatforms(platforms) {
  const namesPlatform = [];

  platforms.forEach((platformObj) => {
    namesPlatform.push(platformObj.platform.slug);
  });
  const onlyPlataformsWithIcons = filterValidPlatforms(namesPlatform);
  return onlyPlataformsWithIcons;
}

function filterValidPlatforms(platforms) {
  const validPlatforms = ["pc", "playstation", "xbox"];
  const uniquePlatforms = new Set();

  platforms.forEach((platform) => {
    validPlatforms.forEach((validPlatform) => {
      if (platform.includes(validPlatform)) {
        uniquePlatforms.add(validPlatform);
      }
    });
  });

  return Array.from(uniquePlatforms);
}

export default Plataforms;
